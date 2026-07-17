// Firebase Connection

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {

apiKey: "ใส่ API KEY",

authDomain: "ใส่ AUTH DOMAIN",

projectId: "ใส่ PROJECT ID",

storageBucket: "ใส่ STORAGE BUCKET",

messagingSenderId: "ใส่ SENDER ID",

appId: "ใส่ APP ID"

};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
