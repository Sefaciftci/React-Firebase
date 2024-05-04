import {getApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCbH-rOu_dpY79YSZhSEzgnOb7uu7qKCdU",
    authDomain: "test-app-c1bb8.firebaseapp.com",
    projectId: "test-app-c1bb8",
    storageBucket: "test-app-c1bb8.appspot.com",
    messagingSenderId: "50499207692",
    appId: "1:50499207692:web:be1a4a67ca1c0022b1a429"
  };
  
const app = getApp(firebaseConfig);
export const auth = getAuth(app);