import { Box, Tooltip } from '@mui/material';
import { EMOJI_DATA_TYPE } from 'constants/emoji.contants';
import { useEffect, useRef } from 'react';

export const Emoji = ({ label, path, isActive }) => {
	const videoRef = useRef(null);

	const handleMouseEnter = () => {
		if (videoRef) {
			console.log(videoRef);
			// @ts-ignore: Unreachable code error
			videoRef.current.play();
			// @ts-ignore: Unreachable code error
			videoRef.current.loop = true;
		}
	};
	const handleMouseLeave = () => {
		if (videoRef && !isActive) {
			// @ts-ignore: Unreachable code error
			videoRef.current.loop = false;
			// @ts-ignore: Unreachable code error
			// videoRef.current.currentTime = 0;
		}
	};
	useEffect(() => {
		if (videoRef && isActive) {
			// @ts-ignore: Unreachable code error
			videoRef.current.loop = true;
		}
	}, [isActive]);

	return (
		<div
			style={{
				width: '100%',
				maxWidth: '200px', // Đặt giới hạn chiều rộng tối đa cho video
				aspectRatio: '1/1', // Đảm bảo tỷ lệ 1:1 cho video
				overflow: 'hidden',
			}}>
			<video
				ref={videoRef}
				style={{ width: '100%', height: '100%' }}
				muted
				aria-label={label}
				loop={!!isActive}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				Your browser does not support the video tag.
				<source src={path} type="video/mp4" />
			</video>
		</div>
	);
};

const MoodEmoji = ({
	data,
	onClick,
	isActive,
}: {
	data: EMOJI_DATA_TYPE;
	isActive: boolean;
	onClick: (data: EMOJI_DATA_TYPE) => void;
}) => {
	return (
		<Tooltip title={data.name}>
			<Box
				sx={[
					(theme) => ({
						borderRadius: '6px',
						border: '3px solid #c4c4c4',
						overflow: 'hidden',
						cursor: 'pointer',
						':hover': {
							borderColor:
								theme.palette.mode === 'dark'
									? '#fabd55'
									: '#43a047',
						},
						borderColor: isActive
							? theme.palette.mode === 'dark'
								? '#fabd55'
								: '#43a047'
							: '#c4c4c4',
					}),
				]}
				onClick={() => onClick(data)}>
				<Emoji
					label={data.name}
					path={data.path}
					isActive={!!isActive}
				/>
			</Box>
		</Tooltip>
	);
};

export default MoodEmoji;
