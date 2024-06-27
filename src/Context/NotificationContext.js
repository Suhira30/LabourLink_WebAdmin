import React, { createContext, useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import notificationService from '../Pages/Service/notificationService';
export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  // const [reports, setReports] = useState([]);
  const [clickedButtons, setClickedButtons] = useState({});
  // const [clickedReportButtons, setClickedReportButtons] = useState({});
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
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    // const storedReports = JSON.parse(localStorage.getItem('reports')) || [];
    const storedClickedButtons = JSON.parse(localStorage.getItem('clickedButtons')) || {};
    // const storedClickedReportButtons = JSON.parse(localStorage.getItem('clickedReportButtons')) || {};

    setNotifications(storedNotifications);
    // setReports(storedReports);
    setClickedButtons(storedClickedButtons);
    // setClickedReportButtons(storedClickedReportButtons);
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  // useEffect(() => {
  //   localStorage.setItem('reports', JSON.stringify(reports));
  // }, [reports]);

  useEffect(() => {
    localStorage.setItem('clickedButtons', JSON.stringify(clickedButtons));
  }, [clickedButtons]);

  // useEffect(() => {
  //   localStorage.setItem('clickedReportButtons', JSON.stringify(clickedReportButtons));
  // }, [clickedReportButtons]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:1000/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        // stompClient.subscribe('/topic/reports', (message) => {
        //   const report = JSON.parse(message.body);
        //   setReports((prevReports) => [report, ...prevReports]);
        // });
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
        // If the document becomes visible, fetch notifications again
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
