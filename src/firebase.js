import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB9YDSTCDpmUf22HOl4CKSpPq-E9fsLNP0",
  authDomain: "drive-clone-b8c64.firebaseapp.com",
  projectId: "drive-clone-b8c64",
  storageBucket: "drive-clone-b8c64.appspot.com",
  messagingSenderId: "564952798513",
  appId: "1:564952798513:web:351bfc6ac4d2ec97f70c10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth,provider,db,storage }