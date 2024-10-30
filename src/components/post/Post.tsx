import { Box, Typography } from '@mui/material';
import { UserAvatar } from 'components/UserAvatar';
import { formatDistanceToNow } from 'date-fns';
import TextFeeling from './TextFeeling';

export interface IPost {
	id: string;
	content: string;
	createdDate: number;
	emojiKey: string;
	loveNumbers: number;
	loveUserIds: string[];
	userDisplayName: string;
	userId: string;
	userPhotoURL: string;
	emojiPoint: number | null;
}

export const Post = ({
	data,
	isHideAvatar,
}: {
	data: IPost;
	isHideAvatar?: boolean;
}) => {
	return (
		<Box
			sx={[
				(theme) => ({
					borderRadius: '5px',
					p: 2,
					backgroundColor:
						theme.palette.mode === 'dark' ? '#242526' : '#fff',
				}),
			]}>
			<Box
				sx={{
					display: 'flex',
					gap: 1,
				}}>
				{isHideAvatar !== true ? (
					<UserAvatar
						displayName={data.userDisplayName}
						path={data.userPhotoURL}></UserAvatar>
				) : null}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
					<TextFeeling
						name={data.userDisplayName}
						emojiKey={data.emojiKey}
						userId={data.userId}></TextFeeling>
					<Typography fontSize={12} color="textDisabled">
						{formatDistanceToNow(new Date(data.createdDate), {
							addSuffix: true,
						})}
					</Typography>
				</Box>
			</Box>
			{data.content ? (
				<div dangerouslySetInnerHTML={{ __html: data.content }} />
			) : null}
		</Box>
	);
};
