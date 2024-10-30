import { green, yellow } from '@mui/material/colors';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export enum IThemeMode {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface IThemeContext {
	themeMode: IThemeMode;
    switchThemeMode: (mode: IThemeMode) => void;
}

const appDarkTheme = createTheme({
	palette: {
		mode: 'dark', // Dark mode
		primary: {
			main: '#fabd55',
		},
		secondary: {
			main: '#f48fb1',

		},
		background: {
			default: '#121212',
			paper: '#1e1e1e',
            
		},
	},
	typography: {
		// Tùy chỉnh font chữ, kích thước, v.v.
	},
});

// src/theme.ts

// Tạo chủ đề Light Mode
const appLightTheme = createTheme({
	palette: {
		mode: 'light', // Light mode
		primary: {
			main: green[600],
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: '#F1F2F5',
			paper: '#ffffff',
		},
	},
	typography: {
		// Tùy chỉnh font chữ, kích thước, v.v.
	},
});

export { appDarkTheme, appLightTheme };
