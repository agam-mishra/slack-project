import React, { Component, createContext } from 'react';
import { auth, createOrgetUserProfileDocument } from '../firebase';

const intialUserState = { user: null, loading: false };
export const UserContext = createContext(intialUserState);

export default class UserProvider extends Component {
	state = intialUserState;

	async componentDidMount() {
		// will be fird whenever we go fro logged in to logged out or vice versa
		auth.onAuthStateChanged(async (userAuth) => {
			console.log('UserProvide ->componentDidMount -> UserAuth', userAuth);

			if (userAuth) {
				const userRef = await createOrgetUserProfileDocument(userAuth);

				console.log('userRef', userRef);

				userRef.onSnapshot((snapshot) => {
					console.log('snapshot', snapshot);
					console.log('snapshot data', snapshot.data());
					this.setState({
						user: { uid: snapshot.id, ...snapshot.data() },
						loading: false
					});
				});
			}
		});
	}
	render() {
		console.log('this.props', this.props);
		return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
	}
}
