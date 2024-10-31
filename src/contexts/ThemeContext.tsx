import { Theme, useColorScheme } from '@mui/material/styles';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
	IThemeContext,
	IThemeMode,
	appDarkTheme,
	appLightTheme,
} from './themes';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export const ThemeWrapperContext = createContext<IThemeContext | null>(null);

export const ThemeWrapperProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const SYSTEM_THEME = useMediaQuery('(prefers-color-scheme: dark)');
	const [themeMode, setThemeMode] = useState<IThemeMode>(
		SYSTEM_THEME ? IThemeMode.LIGHT : IThemeMode.DARK,
	);
	const [theme, setTheme] = useState<Theme>(appLightTheme);

	const switchThemeMode = (mode: IThemeMode) => {
		setThemeMode(mode);
	};

	useEffect(() => {
		switch (themeMode) {
			case IThemeMode.LIGHT:
				setTheme(appLightTheme);
				break;
			case IThemeMode.DARK:
				setTheme(appDarkTheme);
		}
	}, [themeMode, SYSTEM_THEME]);

	return (
		<ThemeWrapperContext.Provider value={{ themeMode, switchThemeMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeWrapperContext.Provider>
	);
};
