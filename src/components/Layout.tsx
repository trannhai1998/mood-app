import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightBar from './RightSidebar';

interface LayoutProps {}

const Layout = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				paddingTop: '54px',
				height: '100vh',
			}}>
			{/* Header */}
			<Header />

			{/* Main Content */}
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					flexGrow: 1,
				}}>
				<LeftSidebar />

				<Feed />

				<RightBar />
			</Box>
		</Container>
	);
};

export default Layout;
