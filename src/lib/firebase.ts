import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBKLRg3odqB8Z2-5vBFXiOQEVomi5klB7w",
  authDomain: "portfolio-cca11.firebaseapp.com",
  projectId: "portfolio-cca11",
  storageBucket: "portfolio-cca11.firebasestorage.app",
  messagingSenderId: "73813493468",
  appId: "1:73813493468:web:43ecdc4e0bdc70a41b1619",
  measurementId: "G-5VHQNCT9HC"
};

// Initialize Firebase only on client side
let app;
let analytics;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { app, analytics };
