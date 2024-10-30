import { Box, Typography } from '@mui/material';

const EmptyFeed = () => {
	return (
		<Box textAlign={'center'}>
			<Typography className="font-cute" fontSize={20}>
				Your diary awaits new stories, let's create some together!
			</Typography>
		</Box>
	);
};

export default EmptyFeed;
