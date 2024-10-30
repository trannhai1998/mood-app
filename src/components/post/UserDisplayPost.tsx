import { Box, Typography } from '@mui/material';
import { UserAvatar } from 'components/UserAvatar';
import useModal from 'hooks/useModal';
import ModalPost from './ModalPost';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAuth } from 'components/auth/AuthProvider';
import { useEffect, useState } from 'react';
import { auth } from 'configs/firebase.config';

const UserDisplayPost = () => {
	const { isShowing, toggle } = useModal();
	const [user, setUser] = useState<User>();

	const handleClick = () => {};

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

	return (
		<Box
			sx={[
				(theme) => ({
					display: 'flex',
					alignItems: 'center',
					gap: '16px',
					padding: '16px',
					borderRadius: '8px',
					...theme.applyStyles('dark', {
						background: '#242526',
					}),
					...theme.applyStyles('light', {
						background: '#fff',
					}),
				}),
			]}>
			{!!user ? (
				<UserAvatar
					displayName={user?.displayName || 'NA'}
					path={user.photoURL || ''}></UserAvatar>
			) : null}

			<Box
				onClick={toggle}
				sx={[
					(theme) => ({
						display: 'flex',
						alignItems: 'center',
						paddingLeft: '16px',
						height: '40px',
						flexGrow: 1,
						cursor: 'pointer',
						borderRadius: '20px',
						...theme.applyStyles('dark', {
							background: '#4E4F50',
							':hover': {
								background: '#3a3a3a',
							},
						}),
						...theme.applyStyles('light', {
							background: '#EFF2F5',
							':hover': {
								background: '#c7c7c7',
							},
						}),
					}),
				]}>
				<Typography className="font-cute">
					How you feel today?
				</Typography>
			</Box>

			<ModalPost isShowing={isShowing} toggle={toggle}></ModalPost>
		</Box>
	);
};

export default UserDisplayPost;
