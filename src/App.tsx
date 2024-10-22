import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ToggleTheme from './components/toggle-theme';

const darkTheme = createTheme({
	
	colorSchemes: {
		dark: true,
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main>This app is using the dark mode</main>
			<ToggleTheme></ToggleTheme>
		</ThemeProvider>
	);
}

export default App;
