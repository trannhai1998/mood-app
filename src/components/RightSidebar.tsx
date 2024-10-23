import React from 'react';
import { Box, Typography } from '@mui/material';

const RightBar: React.FC = () => {
	return (
		<Box
			sx={{
				width: '360px',
				bgcolor: 'background.paper',
				borderLeft: '1px solid #ddd',
				padding: 2,
				position: 'sticky', // Sticky position để sidebar phải luôn cố định
				top: '54px',
				height: 'calc(100vh - 54px)',
			}}>
			<Typography variant="h6">Rightbar</Typography>
		</Box>
	);
};
export default RightBar;
