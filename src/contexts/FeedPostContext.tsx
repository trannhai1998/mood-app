import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs, limit} from 'firebase/firestore';
import { db } from 'configs/firebase.config';
import { useAuth } from 'components/auth/AuthProvider';
import { User } from 'firebase/auth';
import { IPost } from 'components/post/Post';

export interface IPostContext {
	posts: IPost[];
	fetchPosts: () => void;
	error: any;
	loading: boolean;
}

const PostContext = createContext<IPostContext | null>(null);

export const usePosts = () => {
	return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
	const { user } = useAuth() as { user: User };
	const [posts, setPosts] = useState<any[]>([]);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [limitNumb, setLimitNumb] = useState(20);

	const fetchPosts = async () => {
		setLoading(true);
		try {
			const postsRef = collection(db, 'posts');
			const q = query(
				postsRef,
				where('userId', '==', user.uid),
                
				orderBy('createdDate', 'desc'),
                limit(limitNumb)
			);
			const querySnapshot = await getDocs(q);
			const postsList = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setPosts(postsList);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (!user) return; // Chờ đến khi user được xác thực

		fetchPosts();
	}, [user]);

	return (
		<PostContext.Provider value={{ posts, fetchPosts, loading, error }}>
			{children}
		</PostContext.Provider>
	);
};
