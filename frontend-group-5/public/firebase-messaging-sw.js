importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCYdE4mAEOAgfImtqBFMP3tVgzgPI77rp8",
  authDomain: "notification-feature-98a0d.firebaseapp.com",
  projectId: "notification-feature-98a0d",
  storageBucket: "notification-feature-98a0d.appspot.com",
  messagingSenderId: "75372393275",
  appId: "1:75372393275:web:f626c0cc1fc45c2d37fd1e",
  measurementId: "G-ERGD3GM7PQ",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
