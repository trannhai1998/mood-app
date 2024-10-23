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
			main: '#90caf9',
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
			main: '#1976d2',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: '#f5f5f5',
			paper: '#ffffff',
		},
	},
	typography: {
		// Tùy chỉnh font chữ, kích thước, v.v.
	},
});

export { appDarkTheme, appLightTheme };
