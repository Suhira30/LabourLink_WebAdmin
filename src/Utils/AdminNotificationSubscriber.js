// import React, { useEffect } from 'react';
// import { messaging, getToken } from './firebaseConfig';
// import { getMessaging, subscribeToTopic } from "firebase/messaging";

// function AdminNotificationSubscriber({ children }) {

//   useEffect(() => {
//     const subscribeToAdminNotifications = async () => {
//       try {
//         const currentToken = await getToken(messaging, { vapidKey: '' });
//         if (currentToken) {
//           const response = await fetch('https://iid.googleapis.com/iid/v1/' + currentToken + '/rel/topics/admin_notifications', {
//             method: 'POST',
//             headers: new Headers({
//               'Authorization': 'key=YOUR_SERVER_KEY'
//             })
//           });
//           if (response.status < 200 || response.status >= 400) {
//             throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
//           }
//           console.log('Subscribed to "admin_notifications"');
//         } else {
//           console.log('No registration token available. Request permission to generate one.');
//         }
//       } catch (err) {
//         console.log('An error occurred while retrieving token. ', err);
//       }
//     };

//     subscribeToAdminNotifications();
//   }, []);

//   return <>{children}</>;
// }

// export default AdminNotificationSubscriber;