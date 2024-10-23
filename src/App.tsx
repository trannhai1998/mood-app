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

const darkTheme = createTheme({
	colorSchemes: {
		dark: true,
	},
});

function App() {
	const [data, setData] = useState<{ name: string }[]>([]);
	const { mode, setMode } = useColorScheme();

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'test'));
			const dataList = querySnapshot.docs.map((doc) => doc.data());
			console.log(dataList);
			setData(dataList as any);
		};
		console.log('Run here');
		// fetchData();
	}, []);

	return (
		<ThemeWrapperProvider>
			<CssBaseline />

			<Layout></Layout>
		</ThemeWrapperProvider>
	);
}

export default App;
