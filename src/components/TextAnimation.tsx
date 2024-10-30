import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import 'styles/TextAnimation.css'; // Include your styles for cursor blinking effect

const speedForward = 35;
const speedWait = 5000;
const speedBetweenLines = 1000;
const speedBackspace = 25;

const TextAnimation = ({
	textArray,
	isDelete = true,
	variant = 'h4',
}: {
	textArray: string[];
	isDelete?: boolean;
	variant?: any;
}) => {
	const [index, setIndex] = useState(0); // Index of the current quote
	const [subIndex, setSubIndex] = useState(0); // Character index in the quote
	const [isDeleting, setIsDeleting] = useState(false);
	const [isParagraph, setIsParagraph] = useState(false);

	useEffect(() => {
		if (!textArray?.length) {
			return;
		}
		if (isDeleting && !!isDelete) {
			if (subIndex > 0) {
				setTimeout(() => {
					setSubIndex((prev) => prev - 1);
				}, speedBackspace);
			} else {
				setIsDeleting(false);
				setIsParagraph(false);
				setIndex((prev) => (prev + 1) % textArray.length);
			}
		} else {
			if (subIndex < textArray[index].length) {
				if (textArray[index].charAt(subIndex) === '|') {
					setIsParagraph(true);
					setSubIndex((prev) => prev + 1);
					setTimeout(() => {}, speedBetweenLines);
				} else {
					setTimeout(() => {
						setSubIndex((prev) => prev + 1);
					}, speedForward);
				}
			} else {
				setTimeout(() => {
					setIsDeleting(true);
				}, speedWait);
			}
		}
	}, [index, subIndex, isDeleting, textArray]);

	if (!textArray?.length) {
		return null;
	}

	const headerText = textArray[index].split('|')[0].substring(0, subIndex);

	return (
		<div id="output">
			<Typography
				variant={variant}
				className={`cursor font-cute ${!isParagraph ? 'active' : ''}`}>
				{headerText}
			</Typography>
		</div>
	);
};

export default TextAnimation;
