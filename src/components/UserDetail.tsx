import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	collection,
	query,
	where,
	orderBy,
	getDocs,
	getDoc,
	doc,
} from 'firebase/firestore';
import { db } from 'configs/firebase.config';
import { IPost, Post } from './post/Post';
import {
	Box,
	Button,
	IconButton,
	Skeleton,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material';
import { UserAvatar } from './UserAvatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useAuth } from './auth/AuthProvider';
import { User } from 'firebase/auth';
import { IFriendUserContext, useFriendUser } from 'contexts/FriendUserContext';
import MessageIcon from '@mui/icons-material/Message';

const UserDetail = () => {
	const { userId } = useParams(); // Nhận userId từ URL
	const { user: currentUser } = useAuth() as { user: User };
	const [posts, setPosts] = useState<IPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [userDetail, setUserDetail] = useState<any>(null);
	const [loadingUser, setLoadingUser] = useState(true);
	const { userFriends } = useFriendUser() as IFriendUserContext;
	const [isYourFriend, setIsYourFriend] = useState(false);

	const fetchUserPosts = async () => {
		setLoading(true);
		try {
			const postsRef = collection(db, 'posts');
			const q = query(postsRef, where('userId', '==', userId));
			const querySnapshot = await getDocs(q);
			const postsList = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setPosts(postsList as IPost[]);
		} catch (error) {
			console.error('Error fetching posts: ', error);
		} finally {
			setLoading(false);
		}
	};
	const fetchUser = async () => {
		setLoadingUser(true);
		try {
			if (!userId) {
				setUserDetail(null);
				setLoadingUser(false);
				return;
			}
			const userDocRef = doc(db, 'users', userId); // Thay 'users' bằng tên collection của bạn
			const userDoc = await getDoc(userDocRef);
			const infoUser = userDoc.data();
			setUserDetail(infoUser);
			setIsYourFriend(!!userFriends?.find((e) => e.id === userId));
		} catch (error) {
		} finally {
			setLoadingUser(false);
		}
	};

	useEffect(() => {
		fetchUser();
		fetchUserPosts();
	}, [userId]);

	return (
		<Stack spacing={2} mt={2} px={2}>
			<Stack
				alignItems={'center'}
				direction="row"
				spacing={2}
				sx={[
					(theme) => ({
						padding: 2,
						background:
							theme.palette.mode === 'dark' ? '#242526' : '#fff',
						borderRadius: '5px',
						position: 'sticky',
						top: '56px',
						border: `1px solid ${
							theme.palette.mode === 'dark' ? '#fff' : '#43a047'
						}`,
					}),
				]}>
				{loadingUser ? (
					<>
						<Skeleton variant="circular" width={40} height={40} />
						<Skeleton
							variant="rounded"
							width={'100%'}
							height={40}
						/>
					</>
				) : (
					<>
						<UserAvatar
							displayName={userDetail?.displayName || ''}
							path={userDetail?.photoURL || ''}></UserAvatar>
						<Typography fontSize={'20px'} fontWeight={700}>
							{userDetail?.displayName}
						</Typography>

						<Box
							display={'flex'}
							flexDirection={'row'}
							sx={{
								marginLeft: 'auto !important',
							}}>
							{currentUser?.uid !== userId && !isYourFriend ? (
								<Tooltip title="Add Friend">
									<IconButton color="primary">
										<PersonAddIcon
											sx={{
												fontSize: '28px',
											}}></PersonAddIcon>
									</IconButton>
								</Tooltip>
							) : null}

							{isYourFriend ? (
								<Tooltip title="Send message">
									<IconButton color="primary">
										<MessageIcon
											sx={{
												fontSize: '28px',
											}}></MessageIcon>
									</IconButton>
								</Tooltip>
							) : null}
						</Box>
					</>
				)}
			</Stack>

			{loading ? (
				<Skeleton
					variant="rounded"
					width={'100%'}
					height={'300px'}></Skeleton>
			) : (
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap="16px"
					px={2}>
					{posts.map((post) => (
						<Post key={post.id} data={post} isHideAvatar={true} />
					))}
				</Box>
			)}
		</Stack>
	);
};

export default UserDetail;
