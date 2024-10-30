import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Header from './Header';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				paddingTop: '54px',
				height: '100vh',
                paddingX: {
                    xs: '0px'
                }
			}}>
			{/* Header */}
			<Header />

			{/* Main Content */}
			{children}
		</Container>
	);
};

export default Layout;
