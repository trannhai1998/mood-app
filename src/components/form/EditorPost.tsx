import { Editor } from '@tinymce/tinymce-react';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

const EditorPost = ({
	onEditorChange,
}: {
	onEditorChange: (content: string) => void;
}) => {
	const [state, setState] = useState({
		content: '',
		saved: false,
		post: {
			description: '',
		},
		urlImage: '',
		loading: false,
	});
	const editorRef = useRef(null);
	const log = () => {
		if (!!editorRef && !!editorRef.current) {
			// @ts-ignore: Unreachable code error
		}
	};

	useEffect(() => {
		log();
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceEditorChange = useCallback(
		debounce((nextValue) => {
			onEditorChange(nextValue);
		}, 300),
		[],
	);

	const handleEditorChange = (value, e) => {
		debounceEditorChange(value);
		// setState((prevState) => ({
		// 	...prevState,
		// 	content: value,
		// }));
	};

	return (
		<>
			<Editor
				apiKey="am5q0xrfor22kzkfa81wxto3g1fuv11bdzh3we6b540uh3h5"
				onInit={(_evt, editor) => ({
					if(editorRef) {
						editorRef.current = editor;
					},
				})}
				init={{
					height: 400,
					menubar: false,
					placeholder: 'Writing out help you feel better!',
					plugins: [
						'advlist',
						'autolink',
						'lists',
						'link',
						'image',
						'charmap',
						'preview',
						'anchor',
						'searchreplace',
						'visualblocks',
						'code',
						'fullscreen',
						'insertdatetime',
						'media',
						'table',
						'code',
						'help',
						'wordcount',
						'link image',
					],
					toolbar:
						'undo redo | blocks | ' +
						'bold italic | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | help',
					content_style:
						'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
				}}
				onEditorChange={(value, editor) => {
					handleEditorChange(value, editor as any);
				}}
			/>
		</>
	);
};

export default EditorPost;
