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

const RecommendFriends = () => {
	const { user } = useAuth() as { user: User };
	const navigate = useNavigate();
	const [listUser, setListUser] = useState<any[] | null>(null);

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
		console.log(listUser);
		setListUser(listUser);
	};

	const handleRedirectDetailUser = (userId) => {
		navigate(`/feed/user/${userId}`);
	};

	return (
		<Stack spacing={2}>
			<Divider sx={{ marginTop: 2 }}>
				<Typography className="font-cute" color="primary" fontSize={18}>
					Friends
				</Typography>
			</Divider>

			<Stack spacing={2} px={2}>
				{listUser?.length
					? listUser.map((e) => (
							<Box
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
									title="Add Friend"
									sx={{ marginLeft: 'auto' }}>
									<IconButton color="primary">
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
