import React from 'react';
import { Box, Typography } from '@mui/material';

const Feed: React.FC = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				padding: 2,
				overflowY: 'auto',
				bgcolor: 'background.default',
                height: '300vh'
			}}>
			<Typography variant="h4">Feed</Typography>
		</Box>
	);
};

export default Feed;
