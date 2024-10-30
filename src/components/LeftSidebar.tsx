import React from 'react';
import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import { IconWrapper } from './IconWrapper';

const Sidebar: React.FC = () => {
	return (
		<Box
			sx={[
				(theme) => ({
					width: '280px',
					bgcolor: 'background.paper',
					position: 'sticky',
					top: '54px',
					height: 'calc(100vh - 54px)',
					borderRadius: '15px',
					flexShrink: 0,
					background: 'transparent',
					display: {
						xs: 'none',
						md: 'block',
					},
					// ...theme.applyStyles('dark', {
					//     backgroundColor: '#fabd551c',

					// }),
					// ...theme.applyStyles('light', {
					// 	backgroundColor: '#43a04726',
					// }),
				}),
			]}>
			<List>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<IconWrapper>
								<HomeIcon />
							</IconWrapper>
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<IconWrapper>
								<PeopleIcon />
							</IconWrapper>
						</ListItemIcon>
						<ListItemText primary="Friends" />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<IconWrapper>
								<GroupsIcon />
							</IconWrapper>
						</ListItemIcon>
						<ListItemText primary="Analytics" />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						<ListItemIcon>
							<IconWrapper>
								<GroupsIcon />
							</IconWrapper>
						</ListItemIcon>
						<ListItemText primary="Trophy" />
					</ListItemButton>
				</ListItem>
				{/* Thêm các mục khác ở đây */}
			</List>
		</Box>
	);
};

export default Sidebar;
