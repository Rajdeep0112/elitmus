// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

 apiKey: "AIzaSyCAagSyF2U2lx6pWB6Phve4cZH8q3-qb-A",
  authDomain: "elitmus-c4991.firebaseapp.com",
  projectId: "elitmus-c4991",
  storageBucket: "elitmus-c4991.appspot.com",
  messagingSenderId: "407351890906",
  appId: "1:407351890906:web:818149006406ba992e26e3",
  measurementId: "G-WG7ERJ3FQ4"

};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const initFirebase = () => {
  return app;
};

export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export default app;
export const auth = getAuth(app);