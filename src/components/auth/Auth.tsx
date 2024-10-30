import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Logo } from 'components/Logo';
import TextAnimation from 'components/TextAnimation';
import React, { useState } from 'react';

type AuthProps = {
	submitLabel: string;
	onSubmit: (credentials: {
		email: string;
		password: string;
		firstName?: string;
		lastName?: string;
	}) => Promise<void>;
	children: React.ReactNode;
	error?: string;
	isSignUp?: boolean;
};

const textArray = [
	'"Believe in yourself; every step you take brings you closer to achieving greatness. Keep moving forward with confidence!',
	'"Challenges are stepping stones to growth; embrace them and shine even brighter through every experience!"',
	`"Stay focused, stay positive, and remember: you are capable of incredible things!"`,
	`"Your potential is limitless; trust yourself and take that leap toward your dreams."`,
	`"Success is a journey, not a destination. Embrace every step along the way!"`,
	`"Hard days make you stronger; stay resilient and let your light shine through."`,
	`"Believe in your dreams fiercely, and they will unfold in ways you never imagined."`,
	`"Take each day as a fresh start, bringing you closer to the future you desire."`,
];

const Auth = ({
	submitLabel,
	onSubmit,
	children,
	error,
	isSignUp = false,
}: AuthProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [errorName, setErrorName] = useState({
		isError: false,
		messageFirstName: '',
		messageLastName: '',
	});

	const handleSubmit = (event, email: string, password: string) => {
		if (isSignUp) {
			if (!firstName || !lastName) {
				setErrorName({
					isError: true,
					messageFirstName: firstName ? '' : 'First Name is required',
					messageLastName: lastName ? '' : 'Last Name is required',
				});
				return;
			} else {
				setErrorName({
					isError: false,
					messageFirstName: '',
					messageLastName: '',
				});
			}
		}

		onSubmit({ email, password, firstName, lastName });
		event.preventDefault();
	};
	return (
		<form onSubmit={(event) => handleSubmit(event, email, password)}>
			<Stack
				spacing={3}
				sx={{
					height: 'calc(100vh - 54px)',
					maxWidth: {
						xl: '800px',
						md: '80%',
					},
					width: '100%',
					margin: '0 auto',
					justifyContent: 'center',
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}>
					<Logo height={200} width={200} />

					<TextAnimation textArray={textArray}></TextAnimation>
				</Box>

				<TextField
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					type="email"
					label="Email"
					variant="outlined"
					error={!!error}></TextField>
				<TextField
					type="password"
					autoComplete="new-password"
					label="Password"
					value={password}
					error={!!error}
					onChange={(event) => setPassword(event.target.value)}
					variant="outlined"></TextField>
				{isSignUp && (
					<Box display={'flex'} gap={2} width={'100%'}>
						<TextField
							sx={{ flexGrow: 1 }}
							value={firstName}
							onChange={(event) =>
								setFirstName(event.target.value)
							}
							type="text"
							label="First Name"
							variant="outlined"
							error={!!errorName.messageFirstName}
							helperText={errorName.messageFirstName}></TextField>
						<TextField
							sx={{ flexGrow: 1 }}
							type="text"
							label="Last Name"
							value={lastName}
							error={!!errorName.messageLastName}
							helperText={errorName.messageLastName}
							onChange={(event) =>
								setLastName(event.target.value)
							}
							variant="outlined"></TextField>
					</Box>
				)}

				{!!error ? (
					<Typography sx={{ color: '#f44336' }}>{error}</Typography>
				) : null}

				<Button
					variant="contained"
					type="submit"
					onClick={(event) => handleSubmit(event, email, password)}>
					<Typography variant="h5" className="font-cute">
						{submitLabel}
					</Typography>
				</Button>

				{children}
			</Stack>
		</form>
	);
};

export default Auth;
