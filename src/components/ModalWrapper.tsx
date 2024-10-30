import {} from '@emotion/styled';
import { Box, Modal, SxProps } from '@mui/material';
import React from 'react';

interface ModalWrapperProps {
	open: boolean;
	handleClose: Function;
	styles?: SxProps;
	children: any;
}

const styleDefault: SxProps = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	borderRadius: '5px',
	boxShadow: 24,
	p: 2,
	maxHeight: '80vh',
	width: 'fit-content',
	maxWidth: {
		xl: '60vw',
		lg: '50vw',
		md: '80vw',
		sm: 'calc(100vw - 32px)',
	},
};

const ModalWrapper = ({
	open,
	handleClose,
	children,
	styles,
}: ModalWrapperProps) => {
	return (
		<Modal
			open={open}
			onClose={() => handleClose()}
			aria-labelledby="child-modal-title"
			aria-describedby="child-modal-description">
			<Box sx={{ ...styleDefault, ...styles }}>{children}</Box>
		</Modal>
	);
};

export default ModalWrapper;
