import { db } from 'configs/firebase.config';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	updateDoc,
	query,
	where,
	orderBy,
	limit,
} from 'firebase/firestore';

const handleFriendRequest = async (
	userId: string,
	userIdFriend: string,
	addFriend = true,
) => {
	const userDocRef = doc(db, 'users', userId);

	if (addFriend) {
		// Add to each other's friend list
		const userRef = doc(db, 'users', userId);

		const userDoc = await getDoc(userDocRef);
		const currentFriends: any = userDoc.data()?.friends || [];

		await updateDoc(userRef, {
			friends: [...currentFriends, userIdFriend],
		});
	} else {
		// Unfriend
	}
};

const fetchUserData = async (userId: string) => {
	return (await getDoc(doc(db, 'users', userId))).data();
};

const fetchPostByUser = async (userId: string, queryConstants: any[]) => {
	const postsRef = collection(db, 'posts');
	const q = query(postsRef, where('userId', '==', userId), ...queryConstants);
	const querySnapshot = await getDocs(q);
	const postsList = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return postsList;
};

export { handleFriendRequest, fetchUserData, fetchPostByUser };
