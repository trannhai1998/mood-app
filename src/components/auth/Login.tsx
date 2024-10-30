import { Link, useNavigate } from 'react-router-dom';
import { Link as MUILINK } from '@mui/material';
import Auth from './Auth';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../configs/firebase.config';
import { useEffect, useState } from 'react';

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState('');

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				navigate('/feed');
			}
		});

		return () => unsubscribe();
	}, [navigate]);
	return (
		<Auth
			submitLabel="Login"
			onSubmit={async (request) => {
				// login(request);
				try {
					const user = await signInWithEmailAndPassword(
						auth,
						request.email,
						request.password,
					);
					if (user) {
						navigate('/feed');
					} else {
						setError('Email or password is in valid!');
					}
					console.log(user);
				} catch (error) {
					setError('Email or password is in valid!');

					console.log(error);
				}
			}}
			error={error}>
			<Link to={`/signup`} style={{ alignSelf: 'center' }}>
				<MUILINK className="font-cute">Sign up</MUILINK>
			</Link>
		</Auth>
	);
};

export default Login;