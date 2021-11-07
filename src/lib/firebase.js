import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAXMlh_bHQ0arol8bKnqQOPZQzDKvAs7KQ',
  authDomain: 'instagram-clone-c44b7.firebaseapp.com',
  projectId: 'instagram-clone-c44b7',
  storageBucket: 'instagram-clone-c44b7.appspot.com',
  messagingSenderId: '67394548577',
  appId: '1:67394548577:web:87030cbafc7485d0c60b20'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
