import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tostify = () => {
  const [notifications, setNotifications] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:1000/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        stompClient.subscribe('/topic/notifications', (message) => {
          console.log('Connected registration');
          const notification = JSON.parse(message.body);
          console.log(notification.email);
          handleNotification(notification);
        });
        stompClient.subscribe('/topic/reports', (message) => {
          console.log('Connected report notification');
          const report = JSON.parse(message.body);
          console.log(report);//checking
          handleReportNotification(report);
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
  const handleReportNotification = (report) => {
    setReports([...reports, report]);
    triggerReportToast(report);
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
  const triggerReportToast = (report) => {
    const message = `<b>Report : </b> ${report.title}  ${report.reportedByName} reported to ${report.reportedToId}`;
    toast(<div dangerouslySetInnerHTML={{ __html: message }} />, {
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