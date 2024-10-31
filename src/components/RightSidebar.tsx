import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMood from './CalendarMood';
import ListFriends from './ListFriends';

const RightBar: React.FC = () => {
	return (
		<Box
			sx={[
				(theme) => ({
					width: '300px',
					bgcolor: 'background.paper',
					position: 'sticky', // Sticky position để sidebar phải luôn cố định
					top: '54px',
					height: 'calc(100vh - 54px)',
					background: 'transparent',
					flexShrink: 0,
					display: {
						xs: 'none',
						lg: 'block',
					},
					py: 2,
					// borderRadius: '15px',
					// ...theme.applyStyles('dark', {
					// 	backgroundColor: '#fabd551c',
					// }),
					// ...theme.applyStyles('light', {
					// 	backgroundColor: '#43a04726',
					// }),
				}),
			]}>
			<CalendarMood></CalendarMood>

			<ListFriends></ListFriends>
		</Box>
	);
};
export default RightBar;
