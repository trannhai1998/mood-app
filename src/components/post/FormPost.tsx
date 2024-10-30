import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import HighlightOff from '@mui/icons-material/HighlightOff';
import EditorPost from 'components/form/EditorPost';
import ListEmoji from './ListEmoji';
import { useState } from 'react';
import {
	DATA_EMOJI,
	EMOJI_DATA_TYPE,
	SAMPLE_TEXT_ARRAY_BY_EMOJI,
} from 'constants/emoji.contants';
import { random } from 'lodash';
import TextAnimation from 'components/TextAnimation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from 'configs/firebase.config';
import {
	POST_COLLECTION_NAME,
	POST_COLLECTION_TYPE,
} from 'constants/posts-collection.constant';
import { useAuth } from 'components/auth/AuthProvider';
import Loader from 'components/Loader';
import { User } from 'firebase/auth';
import { IPostContext, usePosts } from 'contexts/FeedPostContext';

export const FormPost = ({ toggle }: { toggle: Function }) => {
	const { user } = useAuth() as { user: User };
	const { fetchPosts } = usePosts() as IPostContext;
	const [isLoading, setIsLoading] = useState(false);

	const [textEmoji, setTextEmoji] = useState<string[]>([]);
	const [content, setContent] = useState('');
	const [error, setError] = useState('');
	const [selectedEmoji, setSelectedEmoji] = useState<EMOJI_DATA_TYPE | null>(
		null,
	);

	const onSave = async () => {
		if (!selectedEmoji) {
			setError('"Please choose a feeling; your heart will thank you!"');
		}
		setIsLoading(true);
		const docRef = await addDoc(collection(db, POST_COLLECTION_NAME), {
			content,
			createdDate: new Date().valueOf(),
			emojiKey: selectedEmoji?.key,
			loveNumbers: 0,
			userId: user.uid,
			loveUserIds: [],
			userPhotoURL: user.photoURL,
			userDisplayName: user.displayName,
			emojiPoint: selectedEmoji
				? DATA_EMOJI[selectedEmoji?.key]?.point
				: null,
		} as any);
		if (docRef) {
			setIsLoading(false);
			toggle();
			fetchPosts();
		}
	};

	const onRunTextEmoji = (data: EMOJI_DATA_TYPE) => {
		setTextEmoji([SAMPLE_TEXT_ARRAY_BY_EMOJI[data.key][random(0, 4)]]);
	};

	const handleEditorChange = (content: string) => {
		if (content) {
			setContent(content);
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				maxWidth: '1046px',
			}}>
			<Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					<Typography variant="h6" className="font-cute">
						How Are u feeling today?
					</Typography>
					<IconButton onClick={() => toggle()}>
						<HighlightOff />
					</IconButton>
				</Box>
			</Box>

			<ListEmoji
				selectChangeEmoji={(data) => {
					setError('');
					setTextEmoji([]);
					if (selectedEmoji?.key !== data.key) {
						setSelectedEmoji(data);
						onRunTextEmoji(data);
					}
				}}
				selectedEmoji={selectedEmoji}></ListEmoji>

			{error ? (
				<Typography className="font-cute color-error">
					{error}
				</Typography>
			) : null}

			{textEmoji?.length ? (
				<TextAnimation
					textArray={textEmoji}
					variant={''}
					isDelete={false}></TextAnimation>
			) : null}

			<Box>
				<Box
					sx={{
						borderRadius: '5px',
					}}>
					<EditorPost
						onEditorChange={handleEditorChange}></EditorPost>
				</Box>

				<Box sx={{}}>
					<Button
						variant="contained"
						type="submit"
						onClick={onSave}
						sx={{
							width: '100%',
						}}>
						{isLoading ? (
							<Loader></Loader>
						) : (
							<Typography fontSize={20} className="font-cute">
								Keep a diary
							</Typography>
						)}
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
