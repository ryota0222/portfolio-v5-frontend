importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAeYkWHt4TZj4IkijFNr0mKb5xwRa2B24k',
  authDomain: 'portfolio-5483f.firebaseapp.com',
  projectId: 'portfolio-5483f',
  storageBucket: 'portfolio-5483f.appspot.com',
  messagingSenderId: '87203010473',
  appId: '1:87203010473:web:2ec64715afa1aba813d6b8',
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  if (navigator) navigator.setAppBadge().catch((error) => {});
});
