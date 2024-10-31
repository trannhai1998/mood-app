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
	query,
	where,
} from 'firebase/firestore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { db } from 'configs/firebase.config';
import { useNavigate } from 'react-router-dom';
import { concat } from 'lodash';
import { handleFriendRequest } from 'utils/fuctions';
import { IFriendUserContext, useFriendUser } from 'contexts/FriendUserContext';

const RecommendFriends = () => {
	const { user } = useAuth() as { user: User };
	const navigate = useNavigate();
	const [listUser, setListUser] = useState<any[] | null>(null);
	const [listUserIdsLoading, setListUserIdsLoading] = useState<string[]>([]);
	const { fetchUserFriends } = useFriendUser() as IFriendUserContext;

	useEffect(() => {
		if (!user) return;
		fetchListUserRecommend();
	}, [user]);

	if (!user) {
		return null;
	}

	const fetchListUserRecommend = async () => {
		if (!user) {
			return;
		}

		const currentUser = (await getDoc(doc(db, 'users', user.uid))).data();
		const usersRef = collection(db, 'users');
		const q = query(
			usersRef,
			where('id', 'not-in', currentUser?.friends || ['empty']),
			limit(5),
		);
		const querySnapshot = await getDocs(q);

		const listUser = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		setListUser(listUser);
	};

	const handleRedirectDetailUser = (userId) => {
		navigate(`/feed/user/${userId}`);
	};

	const onAddFriend = async (id: string) => {
		setListUserIdsLoading(concat(listUserIdsLoading, id));

		await handleFriendRequest(user.uid, id, true);

		setListUserIdsLoading(listUserIdsLoading.filter((e) => e !== id));
		if (listUser) {
			setListUser(listUser?.filter((e) => e.id !== id));
		}
		fetchUserFriends();
	};

	return (
		<Stack spacing={2}>
			<Divider sx={{ marginTop: 2 }}>
				<Typography className="font-cute" color="primary" fontSize={18}>
					Suggestion Friends
				</Typography>
			</Divider>

			<Stack spacing={2} px={2}>
				{listUser?.length
					? listUser.map((e) => (
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
									title="Add friend"
									sx={{ marginLeft: 'auto' }}>
									<IconButton
										color="primary"
										onClick={() => onAddFriend(e.id)}
										disabled={listUserIdsLoading?.includes(
											e?.id,
										)}>
										<PersonAddIcon
											sx={{
												fontSize: '24px',
											}}></PersonAddIcon>
									</IconButton>
								</Tooltip>
							</Box>
					  ))
					: null}
			</Stack>
		</Stack>
	);
};

export default RecommendFriends;
