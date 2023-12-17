import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDio0l_obnb0aDJmFi_wWQcLbDycVaObVQ",
  	authDomain: "event-system-4f831.firebaseapp.com",
  	projectId: "event-system-4f831",
  	storageBucket: "event-system-4f831.appspot.com",
  	messagingSenderId: "341872312721",
  	appId: "1:341872312721:web:36e1709eeb5266a9119a30",
  	measurementId: "G-0Q3JYZY8XZ"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
