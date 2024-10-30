import catPaw from 'assets/images/cat-paw-2.svg';

interface LogoProps {
	height?: number;
	width?: number;
}

export const Logo = ({ height = 56, width = 56 }: LogoProps) => {
	return <img src={catPaw} width={width} height={height} alt="Logo"></img>;
};
