import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ToggleTheme from './ToggleTheme';

interface HeaderProps {}

const Header = () => {
	return (
		<AppBar position="fixed">
			<Toolbar
				sx={{
					minHeight: '54px !important',
				}}>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1 }}>
					Emotion
				</Typography>
				<Box>
					{/* Đây là nơi bạn có thể thêm các icon hoặc menu cho header */}
					<ToggleTheme />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
