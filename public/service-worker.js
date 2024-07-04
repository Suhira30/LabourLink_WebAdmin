// self.addEventListener('push', function(event) {
//   const data = event.data.json();
//   const options = {
//     body: data.message,
//     icon: 'path/to/icon.png', // Optional
//     badge: 'path/to/badge.png' // Optional
//   };

//   event.waitUntil(
//     self.registration.showNotification(data.title, options)
//   );
// });