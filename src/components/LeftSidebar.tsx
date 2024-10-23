import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';

const Sidebar: React.FC = () => {

	return (
		<Box
			sx={{
				width: '360px',
				bgcolor: 'background.paper',
				borderRight: '1px solid #ddd',
				position: 'sticky', // Sticky position để sidebar phải luôn cố định
				top: '54px',
				height: 'calc(100vh - 54px)',
			}}>
			<List>
				<ListItem>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Trang chủ" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary="Bạn bè" />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<GroupsIcon />
					</ListItemIcon>
					<ListItemText primary="Nhóm" />
				</ListItem>
				{/* Thêm các mục khác ở đây */}
			</List>
		</Box>
	);
};

export default Sidebar;
