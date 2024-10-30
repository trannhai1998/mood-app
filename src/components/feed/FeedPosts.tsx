import { Box } from '@mui/material';
import EmptyFeed from './EmptyFeed';
import Loader from 'components/Loader';
import { Post } from 'components/post/Post';
import { IPostContext, usePosts } from 'contexts/FeedPostContext';

const FeedPosts = () => {
	const { posts, loading, error } = usePosts() as IPostContext;

	return (
		<Box>
			{loading && (
				<Box
					width={'100%'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}>
					<Loader></Loader>
				</Box>
			)}

			{!loading && !posts?.length ? <EmptyFeed></EmptyFeed> : null}

			{!loading && posts?.length ? (
				<Box display="flex" flexDirection={'column'} gap="16px">
					{posts.map((e) => (
						<Post key={e.id} data={e} />
					))}
				</Box>
			) : null}
		</Box>
	);
};

export default FeedPosts;
