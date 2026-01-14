importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "BURAYA_API_KEY",
    projectId: "PROJE_ID",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/2088/2088617.png'
    });
});
