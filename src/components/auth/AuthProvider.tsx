import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../configs/firebase.config';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<{ user: User | null } | null>(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const updateAuthState = () => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
                

			} else {
				setUser(null);
			}
		});
		return unsubscribe;
	};

	useEffect(() => {
		const unsubscribe = updateAuthState();
		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
