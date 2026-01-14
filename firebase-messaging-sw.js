importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase Ayarların (Yukarıdakiyle Aynı Olmalı)
firebase.initializeApp({
    apiKey: "AIzaSy...",
    authDomain: "projen.firebaseapp.com",
    projectId: "projen-id",
    storageBucket: "projen.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:12345:web:abcde"
});

const messaging = firebase.messaging();

// Arka planda mesaj gelince ne olacak?
messaging.onBackgroundMessage((payload) => {
    console.log('Arka plan mesajı alındı: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/2088/2088617.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
