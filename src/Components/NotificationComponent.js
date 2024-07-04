// import React, { useState, useEffect } from 'react';
// import SockJS from 'sockjs-client';
// import { Client as StompClient } from '@stomp/stompjs';
// import BASE_URL from '../Pages/Service/baseUrl';

// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';

// const NotificationComponent = () => {
//     const [notifications, setNotifications] = useState([]);
//     const [reports, setReports] = useState([]);

//     useEffect(() => {
//         const socket = new SockJS(`${BASE_URL}/ws`);
//         const stompClient = new StompClient({
//             brokerURL: '/ws',
//             connectHeaders: {},
//             debug: (str) => console.log(str),
//             onConnect: (frame) => {
//                 console.log('Connected: ' + frame);

//                 stompClient.subscribe('/topic/notifications', (notification) => {
//                     const notificationData = JSON.parse(notification.body);
//                     console.log('Received notification:', notificationData);
//                     handleNotification(notificationData);
//                 });

//                 stompClient.subscribe('/topic/reports', (message) => {
//                     const reportData = JSON.parse(message.body);
//                     console.log('Received report notification:', reportData);
//                     handleReportNotification(reportData);
//                 });
//             },
//             onStompError: (frame) => {
//                 console.error('Broker reported error: ' + frame.headers['message']);
//                 console.error('Additional details: ' + frame.body);
//             },
//         });

//         stompClient.activate();

//         return () => {
//             if (stompClient) {
//                 stompClient.deactivate();
//             }
//         };
//     }, []);

//     const handleNotification = (notification) => {
//         setNotifications((prevNotifications) => [...prevNotifications, notification]);
//         showNotification(notification);
//     };

//     const handleReportNotification = (report) => {
//         setReports((prevReports) => [...prevReports, report]);
//         showReportNotification(report);
//     };

//     const showNotification = (notification) => {
//         const message = `${notification.name} (${notification.email}) wants to join with us.`;
//         NotificationManager.info(message, 'Notification');
//     };

//     const showReportNotification = (report) => {
//         const message = `Report: ${report.title}. ${report.reportedByName} reported to ${report.reportedToId}.`;
//         NotificationManager.warning(message, 'Report Notification');
//     };

//     return (
//         <div>
//             <NotificationContainer />
//         </div>
//     );
// };

// export default NotificationComponent;
