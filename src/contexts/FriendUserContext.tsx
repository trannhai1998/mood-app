import React, { createContext, useContext, useState, useEffect } from 'react';
import {
	collection,
	query,
	where,
	orderBy,
	getDocs,
	limit,
	doc,
	getDoc,
} from 'firebase/firestore';
import { db } from 'configs/firebase.config';
import { useAuth } from 'components/auth/AuthProvider';
import { User } from 'firebase/auth';
import { IPost } from 'components/post/Post';

export interface IFriendUserContext {
	userFriends: any[];
	fetchUserFriends: () => void;
	error: any;
	loading: boolean;
}

const FriendUserContext = createContext<IFriendUserContext | null>(null);

export const useFriendUser = () => {
	return useContext(FriendUserContext);
};

export const FriendUserProvider = ({ children }) => {
	const { user } = useAuth() as { user: User };
	const [userFriends, setUserFriends] = useState<any[]>([]);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [limitNumb, setLimitNumb] = useState(20);

	const fetchUserFriends = async () => {
		setLoading(true);
		try {
			const currentUser = (
				await getDoc(doc(db, 'users', user.uid))
			).data();
			if (!currentUser) {
				throw new Error('User does not exist');
			}

			const friendsIds = currentUser.friends || [];
			if (friendsIds.length === 0) {
				return setUserFriends([]);
			}

			const friendsInfoPromises = friendsIds.map((friendId) =>
				getDoc(doc(db, 'users', friendId)),
			);
			const friendsDocs = await Promise.all(friendsInfoPromises);

			const friendsInfo = friendsDocs
				.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
				.filter((e) => e.id && e.displayName);
			console.log(friendsInfo);
			return setUserFriends(friendsInfo);
		} catch (error) {
			setUserFriends([]);
			setError(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (!user) return;
	}, [user]);

	return (
		<FriendUserContext.Provider
			value={{ userFriends, fetchUserFriends, loading, error }}>
			{children}
		</FriendUserContext.Provider>
	);
};
