import {
	ThemeProvider,
	createTheme,
	useColorScheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ToggleTheme from './components/ToggleTheme';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './configs/firebase.config';
import Layout from './components/Layout';
import { ThemeWrapperProvider } from './contexts/ThemeContext';
import router from './components/Routes';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import './styles/common.css';
import './styles/variables.css';
import { FriendUserProvider } from 'contexts/FriendUserContext';
import 'animate.css';

const darkTheme = createTheme({
	colorSchemes: {
		dark: true,
	},
});

function App() {
	const [data, setData] = useState<{ name: string }[]>([]);
	const { mode, setMode } = useColorScheme();

	useEffect(() => {
		// const fetchData = async () => {
		// 	const querySnapshot = await getDocs(collection(db, 'test'));
		// 	const dataList = querySnapshot.docs.map((doc) => doc.data());
		// 	console.log(dataList);
		// 	setData(dataList as any);
		// };
		// fetchData();
	}, []);

	return (
		<ThemeWrapperProvider>
			<CssBaseline />
			<AuthProvider>
				<FriendUserProvider>
					<RouterProvider router={router}></RouterProvider>
				</FriendUserProvider>
			</AuthProvider>
		</ThemeWrapperProvider>
	);
}

export default App;
