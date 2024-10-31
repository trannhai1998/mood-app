import { Link, useNavigate } from 'react-router-dom';
import { Link as MUILINK } from '@mui/material';
import Auth from './Auth';
import { useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';
import { auth, db } from '../../configs/firebase.config';
import { randomAvatar } from 'constants/emoji.contants';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate('/feed');
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<Auth
			submitLabel="Sign Up"
			isSignUp={true}
			isLoading={loading}
			onSubmit={async ({ email, password, firstName, lastName }) => {
				try {

					setError('');
					setLoading(true);
					const userCredential = await createUserWithEmailAndPassword(
						auth,
						email,
						password,
					);
					const user = userCredential.user;

					await updateProfile(user, {
						photoURL: randomAvatar(),
						displayName: `${firstName} ${lastName}`,
					});

					await setDoc(doc(db, 'users', user.uid), {
						id: user.uid,
						email: user.email,
						displayName: user.displayName,
						firstName: firstName,
						lastName: lastName,
						photoURL: user.photoURL,
						createdAt: new Date(),
					});
				} catch (error) {
					setError(
						`The email or password (must contain at least 6 characters) is not valid.`,
					);
				} finally {
					setLoading(false);
				}
			}}
			error={error}>
			<Link to={'/login'} style={{ alignSelf: 'center' }}>
				<MUILINK className="font-cute">Login</MUILINK>
			</Link>
		</Auth>
	);
};

export default SignUp;
