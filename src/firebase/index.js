import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCuqtMUxBBpCw9BSA7_IUdyqe5oqGcyeTE',
  authDomain: 'notion-clone-1ca93.firebaseapp.com',
  projectId: 'notion-clone-1ca93',
  storageBucket: 'notion-clone-1ca93.appspot.com',
  messagingSenderId: '527673172871',
  appId: '1:527673172871:web:09ec0aae9eb2d1852ca922',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storageRef = firebase.storage();

export { auth, provider, storageRef };
export default db;
