import { Modal } from '@mui/material';
import ModalWrapper from 'components/ModalWrapper';
import { FormPost } from './FormPost';

const ModalPost = ({ isShowing, toggle }) => {
	const handleClose = () => {
		toggle();
	};
	return (
		<ModalWrapper open={isShowing} handleClose={handleClose}>
			<FormPost toggle={toggle}></FormPost>
		</ModalWrapper>
	);
};

export default ModalPost;
