const CACHE_NAME = 'yavru-saat-v1';

// Uygulama yüklendiğinde çalışır
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Arka planda gelen bildirimleri yakalar
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'Yeni bir mesajınız var!';
    const options = {
        body: data,
        icon: 'https://cdn-icons-png.flaticon.com/512/3103/3103611.png',
        vibrate: [200, 100, 200],
        badge: 'https://cdn-icons-png.flaticon.com/512/3103/3103611.png'
    };
    event.waitUntil(
        self.registration.showNotification('Yavru Uygulama', options)
    );
});

// Bildirime tıklandığında uygulamayı açar
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
