import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
	const { user } = useAuth() as any;
    console.log(user);
	if (!user) {
		return <Navigate to="/login" />;
	}

	return children;
};

export default ProtectedRoute;
