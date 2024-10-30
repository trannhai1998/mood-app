import { Box } from '@mui/material';
import Feed from './feed/Feed';
import LeftSidebar from './LeftSidebar';
import RightBar from './RightSidebar';
import { PostProvider } from 'contexts/FeedPostContext';
import { Outlet, Route, Router, Routes } from 'react-router-dom';

const HomePage = () => {
	return (
		<PostProvider>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					flexGrow: 1,
				}}>
				<LeftSidebar />

                <Box sx={{ flexGrow: 1 }}> {/* Container cho phần nội dung chính */}
					<Outlet /> {/* Đây sẽ render các route con */}
				</Box>

				<RightBar />
			</Box>
		</PostProvider>
	);
};

export default HomePage;
