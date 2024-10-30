export const POST_COLLECTION_NAME = 'posts';

export interface POST_COLLECTION_TYPE {
	content: string;
	createDate: number;
	emojiKey: string;
	loveNumbers: number;
	loveUserIds: string[];
	userId: string;
}
