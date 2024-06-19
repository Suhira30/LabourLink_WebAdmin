import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tostify = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:1000/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log('Connected');
        stompClient.subscribe('/topic/notifications', (message) => {
          const notification = JSON.parse(message.body);
          console.log(notification.email);
          handleNotification(notification);
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, []);

  const handleNotification = (notification) => {
    setNotifications([...notifications, notification]);
    triggerToast(notification);
  };

  const triggerToast = (notification) => {
    const message = `<b>${notification.name}</b> (${notification.email}) Wants to join with us `;
    toast(<div dangerouslySetInnerHTML={{ __html: message }} />,{
        position: "bottom-left",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    });
  };

  return (
    <>
      <ToastContainer />
      {/* Render notifications or other content here */}
    </>
  );
};

export default Tostify;