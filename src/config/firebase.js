import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsIfm2Cj65I3bpkMyPcBl0UPLsYBgBeF0",
  authDomain: "mail-box-7480d.firebaseapp.com",
  databaseURL: "https://mail-box-7480d-default-rtdb.firebaseio.com",
  projectId: "mail-box-7480d",
  storageBucket: "mail-box-7480d.appspot.com",
  messagingSenderId: "288082956966",
  appId: "1:288082956966:web:9bf8470d3b9b3165ae9a67"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);