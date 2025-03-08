import { initializeApp } from "firebase/app";
import { getDynamicLinks } from "firebase/dynamic-links";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrYGJoUvK36K3LB3I-KhSVxg6crxnk1aY",
  authDomain: "jeeeywebsite.firebaseapp.com",
  projectId: "jeeeywebsite",
  storageBucket: "jeeeywebsite.firebasestorage.app",
  messagingSenderId: "514237231240",
  appId: "1:514237231240:web:b857d211a962aff776ef3d",
  measurementId: "G-6YXF449PE1"
};
// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

const dynamicLinks = getDynamicLinks(app);

export { dynamicLinks };

// // تهيئة الخدمات
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCrYGJoUvK36K3LB3I-KhSVxg6crxnk1aY",
//   authDomain: "jeeeywebsite.firebaseapp.com",
//   projectId: "jeeeywebsite",
//   storageBucket: "jeeeywebsite.firebasestorage.app",
//   messagingSenderId: "514237231240",
//   appId: "1:514237231240:web:b857d211a962aff776ef3d",
//   measurementId: "G-6YXF449PE1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
