import { db } from 'configs/firebase.config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

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

export { handleFriendRequest };
