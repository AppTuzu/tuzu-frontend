// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDXVDCvPaR7OjHj1ARDv6UNFQ5h6hd6kuA",
	authDomain: "tuzu-8c691.firebaseapp.com",
	projectId: "tuzu-8c691",
	storageBucket: "tuzu-8c691.firebasestorage.app",
	messagingSenderId: "514011159180",
	appId: "1:514011159180:web:1b174950bc16a540bcb9a9",
	measurementId: "G-XEFLXV350V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
