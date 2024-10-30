import { createBrowserRouter } from 'react-router-dom';
import SignUp from './auth/Signup';
import Login from './auth/Login';
import Layout from './Layout';
import HomePage from './HomePage';
import ProtectedRoute from './auth/ProjectedAuthRoute';
import Feed from './feed/Feed';
import UserDetail from './UserDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<SignUp />
			</ProtectedRoute>
		),
	},
	{
		path: '/login',
		element: (
			<Layout>
				<Login />
			</Layout>
		),
	},
	{
		path: '/signup',
		element: (
			<Layout>
				<SignUp />
			</Layout>
		),
	},
	{
		path: '/feed',
		element: (
			<ProtectedRoute>
				<Layout>
					<HomePage />
				</Layout>
			</ProtectedRoute>
		),
		children: [
			{
				path: '',
				element: <Feed></Feed>,
			},
			{
				path: 'user/:userId',
				element: <UserDetail></UserDetail>,
			},
		],
	},
]);

export default router;
