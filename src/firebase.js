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
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
	//Intialise google provider
	const googleProvider = new firebase.auth.GoogleAuthProvider();

	//asks user to select gmail account in new pop up window
	auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
	auth.signOut();
};
export const createOrgetUserProfileDocument = async (user) => {
	if (!user) return;

	const userRef = firestore.doc(`users/${user.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email, photoURL } = user;

		try {
			const user = {
				display_name: displayName,
				email,
				phot0_url: photoURL,
				created_at: new Date()
			};
			await userRef.set(user);
		} catch (error) {
			console.log('Error', error);
		}
	}

	return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
	if (!uid) return null;

	try {
		const userDocument = await firestore.collection('user').doc(uid);
		return userDocument;
	} catch (error) {
		console.error('Error in getUserDocument', error.message);
	}
}
