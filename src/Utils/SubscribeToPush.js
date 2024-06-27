// import React, { useEffect } from 'react';
// import { askNotificationPermission } from '../utils/notificationUtils';

// const SubscribeToPush = () => {
//   useEffect(() => {
//     askNotificationPermission()
//       .then(() => {
//         console.log('Notification permission granted.');
//         subscribeUserToPush();
//       })
//       .catch(error => {
//         console.error('Notification permission denied.', error);
//       });
//   }, []);

//  async function subscribeUserToPush() {
//     try {
//       const registration = await navigator.serviceWorker.ready;
//       const subscription = await registration.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: urlBase64ToUint8Array(process.env.BPD6YKcGnmST4cqpsm-b3bpI6KglyUKbxXz42k3B4bc5UJm0SdMwblak8yHfruSSr_9XYZG5LmukU8ER4mc9IW4)
//       });

//       // Send subscription to server
//       await fetch('/api/subscribe', {
//         method: 'POST',
//         body: JSON.stringify(subscription),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('User subscribed successfully');
//     } catch (error) {
//       console.error('Failed to subscribe the user: ', error);
//     }
//   }


//   function urlBase64ToUint8Array(base64String) {
//     const padding = '='.repeat((4 - base64String.length % 4) % 4);
//     const base64 = (base64String + padding)
//       .replace(/\-/g, '+')
//       .replace(/_/g, '/');

//     const rawData = window.atob(base64);
//     const outputArray = new Uint8Array(rawData.length);

//     for (let i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
//   }

//   return null;
// };

// export default SubscribeToPush;
