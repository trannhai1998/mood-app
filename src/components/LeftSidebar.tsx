import React from 'react';
import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	Divider,
	Stack,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import { IconWrapper } from './IconWrapper';
import RecommendFriends from './RecommendFriends';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
	const navigate = useNavigate();

	const handleRedirect = (url) => {
		navigate(url);
	};

	return (
		<Box
			sx={[
				(theme) => ({
					width: '300px',
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
			<Stack spacing={2}>
				<List>
					<ListItem>
						<ListItemButton onClick={() => handleRedirect('/feed')}>
							<ListItemIcon>
								<IconWrapper>
									<HomeIcon />
								</IconWrapper>
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
					{/* <ListItem>
					<ListItemButton>
						<ListItemIcon>
							<IconWrapper>
								<PeopleIcon />
							</IconWrapper>
						</ListItemIcon>
						<ListItemText primary="Friends" />
					</ListItemButton>
				</ListItem> */}
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
				</List>

				<RecommendFriends></RecommendFriends>
			</Stack>
		</Box>
	);
};

export default Sidebar;
