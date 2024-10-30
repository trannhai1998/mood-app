import { Box, Typography } from '@mui/material';
import { DATA_EMOJI } from 'constants/emoji.contants';
import { useNavigate } from 'react-router-dom';

const TextFeeling = ({
	name,
	emojiKey,
	userId,
}: {
	name: string;
	emojiKey: string;
	userId?: string;
}) => {
	const navigate = useNavigate();
	const navigateToUserDetail = () => {
		if (userId) {
			navigate(`/feed/user/${userId}`);
		}
	};
	return (
		<Box
			sx={{
				fontSize: '13px',
				display: 'flex',
				alignItems: 'center',
				gap: '4px',
			}}>
			<Typography
				display={'inline'}
				color="primary"
				sx={{
					cursor: 'pointer',
					':hover': {
						textDecoration: 'underline',
					},
				}}
				onClick={navigateToUserDetail}>
				{name}
			</Typography>
			<Typography display={'inline'} color="textSecondary">
				feeling
			</Typography>
			<Typography
				className="font-cute"
				display={'inline-block'}
				sx={{ marginBottom: '2px' }}
				color={DATA_EMOJI[emojiKey]?.color}>
				{DATA_EMOJI[emojiKey]?.name}
			</Typography>
			{/* <img width={30} src={DATA_EMOJI[emojiKey].icon} alt={DATA_EMOJI[emojiKey].name}></img> */}
		</Box>
	);
};
export default TextFeeling;
