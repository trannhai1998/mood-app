import { useEffect, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../configs/firebase.config';
import { UserAvatar } from './UserAvatar';

const UserAvatarWithMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [user, setUser] = useState<User>();
	const navigate = useNavigate();
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				if (!user.photoURL) {
					setTimeout(() => {
						setUser(user);
					}, 2000);
				} else {
					setUser(user);
				}
			}
		});

		return () => unsubscribe();
	}, []);

	// eslint-disable-next-line react-hooks/rules-of-hooks

	const onLogout = () => {
		signOut(auth).then(() => {
			handleClose();
			navigate('.././login');
		});
	};

	return (
		<div>
			<IconButton onClick={handleClick}>
				{user && (
					<UserAvatar
						displayName={user.displayName || ''}
						path={user.photoURL || ''}
					/>
				)}
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={onLogout}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default UserAvatarWithMenu;
