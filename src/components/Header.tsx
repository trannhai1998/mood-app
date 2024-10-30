import React from 'react';
import { AppBar, Toolbar, Typography, Box, SvgIcon } from '@mui/material';
import ToggleTheme from './ToggleTheme';
import { useAuth } from './auth/AuthProvider';
import UserAvatarWithMenu from './UserAvatarWithMenu';
import catPaw from 'assets/images/cat-paw-2.svg';
import 'styles/CatWalk.css';
import { Logo } from './Logo';

interface HeaderProps {}

const Header = () => {
	const { user } = useAuth() as any;

	return (
		<AppBar position="fixed">
			<Toolbar
				sx={{
					minHeight: '54px !important',
					display: 'flex',
					gap: '16px',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						position: 'relative',
					}}>
					<Logo></Logo>
                    
					<Typography
						variant="h4"
						noWrap
						sx={{ flexGrow: 1 }}
						className="font-cute">
						Meow
					</Typography>
				</Box>

				<Typography></Typography>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<ToggleTheme />
					{user ? <UserAvatarWithMenu /> : <></>}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
