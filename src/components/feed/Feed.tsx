import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import UserDisplayPost from '../post/UserDisplayPost';
import FeedPosts from './FeedPosts';

const Feed: React.FC = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				padding: 2,
				overflowY: 'auto',
				bgcolor: 'background.default',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}>
			<UserDisplayPost></UserDisplayPost>
			<FeedPosts></FeedPosts>
		</Box>
	);
};

export default Feed;
