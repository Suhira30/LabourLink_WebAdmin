import React, { createContext, useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import BASE_URL from '../Pages/Service/baseUrl';
import reportService from '../Pages/Service/reportService';

export const ReportNotificationContext = createContext();

export const ReportNotificationProvider = ({ children }) => {
  const [reports, setReports] = useState([]);
  const [clickedReportButtons, setClickedReportButtons] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await reportService.fetchAllReport();
      setReports(response.data);
      console.log(response.reportedToName);
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
    const storedReports = JSON.parse(localStorage.getItem('reports')) || [];
    const storedClickedReportButtons = JSON.parse(localStorage.getItem('clickedReportButtons')) || {};

    setReports(storedReports);
    setClickedReportButtons(storedClickedReportButtons);
  }, []);

 
  useEffect(() => {
    localStorage.setItem('reports', JSON.stringify(reports));
  }, [reports]);

 
  useEffect(() => {
    localStorage.setItem('clickedReportButtons', JSON.stringify(clickedReportButtons));
  }, [clickedReportButtons]);

  // useEffect(() => {
  //   const socket = new SockJS(`${BASE_URL}/ws`);
  //   const stompClient = new Client({
  //     webSocketFactory: () => socket,
  //     onConnect: () => {
  //       stompClient.subscribe('/topic/reports', (message) => {
  //         const report = JSON.parse(message.body);
  //         setReports((prevReports) => [report, ...prevReports]);
  //       });
        
  //     },
  //     onStompError: (frame) => {
  //       console.error('Broker reported error: ' + frame.headers['message']);
  //       console.error('Additional details: ' + frame.body);
  //     },
  //   });

  //   stompClient.activate();

   
  //   const handleVisibilityChange = () => {
  //     if (!document.hidden) {
  //       // If the document becomes visible, fetch notifications again
  //       fetchData();
  //     }
  //   };

  //   document.addEventListener('visibilitychange', handleVisibilityChange);

  //   return () => {
  //     stompClient.deactivate();
  //     document.removeEventListener('visibilitychange', handleVisibilityChange);
  //   };
  // }, []);
  return (
    <ReportNotificationContext.Provider value={{ reports, setReports, clickedReportButtons, setClickedReportButtons ,loading}}>
      {children}
    </ReportNotificationContext.Provider>
  );
};
