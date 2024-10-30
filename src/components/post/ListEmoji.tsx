import { Box } from '@mui/material';
import MoodEmoji, { Emoji } from './MoodEmoji';
import {
	DATA_EMOJI,
	EMOJI_DATA_TYPE,
	ENUM_EMOJI,
} from 'constants/emoji.contants';
import { useState } from 'react';

const DataEmoji = [
	ENUM_EMOJI.HAPPINESS,
	ENUM_EMOJI.EXCITED,
	ENUM_EMOJI.NATURAL,
	ENUM_EMOJI.SAD,
	ENUM_EMOJI.ANGRY,
].map((e) => DATA_EMOJI[e]);

const ListEmoji = ({
	selectedEmoji,
	selectChangeEmoji,
}: {
	selectedEmoji: EMOJI_DATA_TYPE | null;
	selectChangeEmoji: (data: EMOJI_DATA_TYPE) => void;
}) => {
	const handleClickEmoji = (data: EMOJI_DATA_TYPE) => {
		selectChangeEmoji(data);
	};

	return (
		<Box sx={{ textAlign: 'center', display: 'flex', gap: 3 }}>
			{DataEmoji.map((e) => {
				return (
					<MoodEmoji
						key={e.key}
						data={e}
						isActive={selectedEmoji?.key === e.key}
						onClick={handleClickEmoji}></MoodEmoji>
				);
			})}
		</Box>
	);
};

export default ListEmoji;
