import React, { createContext, useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import BASE_URL from '../Pages/Service/baseUrl';
import notificationService from '../Pages/Service/notificationService';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [clickedButtons, setClickedButtons] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await notificationService.fetchRegisterNotification();
      setNotifications(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  

  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const storedClickedButtons = JSON.parse(localStorage.getItem('clickedButtons')) || {};

    setNotifications(storedNotifications);
    setClickedButtons(storedClickedButtons);
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('clickedButtons', JSON.stringify(clickedButtons));
  }, [clickedButtons]);

  useEffect(() => {
    const socket = new SockJS(`${BASE_URL}/ws`);
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        stompClient.subscribe('/topic/notifications', (message) => {
          const notification = JSON.parse(message.body);
          setNotifications(prevNotifications => [notification, ...prevNotifications]);
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    stompClient.activate();

   
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchData();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stompClient.deactivate();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return (
    <NotificationContext.Provider value={{ notifications, setNotifications, clickedButtons, setClickedButtons, loading}}>
      {children}
    </NotificationContext.Provider>
  );
};
