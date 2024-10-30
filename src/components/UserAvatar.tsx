import { Avatar, IconButton } from '@mui/material';
import { useAuth } from './auth/AuthProvider';

import AvatarDefault from 'assets/images/avatar/default-1.png';
interface UserAvatarProps {
	displayName: string;
	path: string;
}

export const UserAvatar = ({ displayName, path }: UserAvatarProps) => {
	if (!displayName || !path) {
		return null;
	}
	return <Avatar alt={displayName || ''} src={path} />;
};
