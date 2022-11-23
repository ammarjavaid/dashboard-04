import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj-1EmGnbfWnV7_cmm_gzUBn1Ip9PfN9M",
  authDomain: "dashboard-04.firebaseapp.com",
  projectId: "dashboard-04",
  storageBucket: "dashboard-04.appspot.com",
  messagingSenderId: "792252702659",
  appId: "1:792252702659:web:89ec311d04001898972776"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);