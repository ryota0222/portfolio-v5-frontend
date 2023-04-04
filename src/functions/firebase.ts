import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getMessaging, getToken } from 'firebase/messaging';

const app = initializeApp({
  apiKey: 'AIzaSyAeYkWHt4TZj4IkijFNr0mKb5xwRa2B24k',
  authDomain: 'portfolio-5483f.firebaseapp.com',
  projectId: 'portfolio-5483f',
  storageBucket: 'portfolio-5483f.appspot.com',
  messagingSenderId: '87203010473',
  appId: '1:87203010473:web:2ec64715afa1aba813d6b8',
});

export const requestNotificationPermission = async (): Promise<void> => {
  const firestore = getFirestore(app);
  const messaging = getMessaging(app);

  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_WEBPUSH_KEY,
    });
    await addDoc(collection(firestore, 'notification'), { token });
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
};
