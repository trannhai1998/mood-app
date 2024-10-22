import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCfiw3OiusbVLycggM-ek_fOROyDAG91a4',
	authDomain: 'mood-app-a12b5.firebaseapp.com',
	projectId: 'mood-app-a12b5',
	storageBucket: 'mood-app-a12b5.appspot.com',
	messagingSenderId: '493701896655',
	appId: '1:493701896655:web:686cc8229f0c91025f1aba',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
