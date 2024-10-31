import {
	Box,
	Divider,
	IconButton,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material';
import { useAuth } from './auth/AuthProvider';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { UserAvatar } from './UserAvatar';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	where,
} from 'firebase/firestore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { db } from 'configs/firebase.config';
import { useNavigate } from 'react-router-dom';
import { concat } from 'lodash';
import { handleFriendRequest } from 'utils/fuctions';
import MessageIcon from '@mui/icons-material/Message';
import { IFriendUserContext, useFriendUser } from 'contexts/FriendUserContext';

const ListFriends = () => {
	const navigate = useNavigate();
	const { user } = useAuth() as { user: User };
	const { userFriends, fetchUserFriends } =
		useFriendUser() as IFriendUserContext;

	const handleRedirectDetailUser = (userId) => {
		navigate(`/feed/user/${userId}`);
	};

	useEffect(() => {
		fetchUserFriends();
	}, []);

	return (
		<Stack spacing={2}>
			<Divider sx={{ marginTop: 2 }}>
				<Typography className="font-cute" color="primary" fontSize={18}>
					Friends
				</Typography>
			</Divider>

			<Stack spacing={2} px={2}>
				{userFriends?.length
					? userFriends.map((e) => (
							<Box
								className="animate__animated animate__fadeIn"
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}>
								<IconButton
									onClick={() =>
										handleRedirectDetailUser(e.id)
									}>
									<UserAvatar
										displayName={e?.displayName}
										path={e?.photoURL}></UserAvatar>
								</IconButton>
								<Typography
									fontWeight={700}
									sx={{ marginLeft: '8px' }}>
									{e.displayName}
								</Typography>

								<Tooltip
									title="Send message"
									sx={{ marginLeft: 'auto' }}>
									<IconButton color="primary">
										<MessageIcon
											sx={{
												fontSize: '24px',
											}}></MessageIcon>
									</IconButton>
								</Tooltip>
							</Box>
					  ))
					: null}
			</Stack>
		</Stack>
	);
};

export default ListFriends;
