import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ToggleTheme from './components/toggle-theme';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './configs/firebase.config';

const darkTheme = createTheme({
	colorSchemes: {
		dark: true,
	},
});

function App() {
	const [data, setData] = useState<{ name: string }[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'test'));
			const dataList = querySnapshot.docs.map((doc) => doc.data());
			console.log(dataList);
			setData(dataList as any);
		};
		console.log('Run here');
		fetchData();
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main>This app is using the dark mode</main>
			<ToggleTheme></ToggleTheme>

			<ul>
				{data.map((item, index) => (
					<li key={index}>{item.name}</li>
				))}
			</ul>
		</ThemeProvider>
	);
}

export default App;
