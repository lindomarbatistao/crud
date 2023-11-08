import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyAip82pfQSHC-Ugk6fG9FxByafLHAivW3s",
  authDomain: "native-oficial.firebaseapp.com",
  projectId: "native-oficial",
  storageBucket: "native-oficial.appspot.com",
  messagingSenderId: "508868538408",
  appId: "1:508868538408:web:2dedb16afc348c437f051d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {app, db,  auth, storage}