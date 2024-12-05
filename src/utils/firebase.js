import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

let app;
if (!app) {
  const firebaseConfig = {
    apiKey: "AIzaSyAJljrUMKuieykB2tyA4BtxMYpSImjUStg",
    authDomain: "netflix-26eac.firebaseapp.com",
    projectId: "netflix-26eac",
    storageBucket: "netflix-26eac.firebasestorage.app",
    messagingSenderId: "228252003278",
    appId: "1:228252003278:web:e978dd1826681fe57e599f",
    measurementId: "G-SBFCFV78S4",
  };

  app = initializeApp(firebaseConfig);
}

const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
