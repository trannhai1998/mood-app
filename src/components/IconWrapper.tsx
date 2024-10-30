import { Box } from '@mui/material';
import { green, yellow } from '@mui/material/colors';

export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			sx={[
				(theme) => ({
                    display: 'flex',
					...theme.applyStyles('dark', {
						color: '#fabd55',
					}),
					...theme.applyStyles('light', {
						color: green[600],
					}),
				}),
			]}>
			{children}
		</Box>
	);
};
