// src/components/Post.js
import React from 'react';
import '../styles/Post.css';

const Post = ({ profilePic, image, username, timestamp, message }) => {
	return (
		<div className="post">
			<div className="post__top">
				<img src={profilePic} alt="" className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{timestamp}</p>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>
			{image && (
				<div className="post__image">
					<img src={image} alt="" />
				</div>
			)}
			<div className="post__options">
				{/* Các nút Like, Comment, Share */}
			</div>
		</div>
	);
};

export default Post;
