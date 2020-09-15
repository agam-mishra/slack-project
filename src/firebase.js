import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyAxQEXHBWsWjNm9CYag8Cezwwd8M0xiWCQ',
	authDomain: 'react-slack-63cc5.firebaseapp.com',
	databaseURL: 'https://react-slack-63cc5.firebaseio.com',
	projectId: 'react-slack-63cc5',
	storageBucket: 'react-slack-63cc5.appspot.com',
	messagingSenderId: '620337831238',
	appId: '1:620337831238:web:cd4dbf887a8e47fd531947'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	auth.signInWithPopup(googleProvider);
};
