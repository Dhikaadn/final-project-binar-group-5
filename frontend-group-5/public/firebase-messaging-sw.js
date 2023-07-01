importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNotifikasi } from "../src/redux/actions/notifikasi";
import { useState } from "react";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
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
  const recipientToken =
    "e4WW1J1RPp8BHIKjSP-djz:APA91bFZzEzQt41YhM7-INV-4Ssv0x1et_FoKhyE2Pr9VQCP8DrYXdVVQKQ4yIAKEFdy-YmkCcS0E5RHBwyIob4ZaPcFCmeBKGHf90LfVEU8yqi6ZJYN6WRlLpydsXubf2JD3iAhB5dk";
  setTitle(notificationTitle);
  const body = notificationOptions.body;
  const data = {
    key1: "Value 1",
  };
  const value = { recipientToken, title, body, data };
  if (title != "") {
    dispatch(getNotifikasi(value, navigate));
  } else {
    console.log("notif is none");
  }
});
