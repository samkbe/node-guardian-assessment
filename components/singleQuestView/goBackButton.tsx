import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Cinzel } from '@next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] });

const GoBackButtonStyled = styled.button`
	cursor: pointer;
	border-radius: ${(props) => props.theme.radius.s};
	border: ${(props) => `1px solid ${props.theme.colors.gold}`};
	height: 35px;
	width: 90px;
	position: absolute;
	bottom: 3%;
	right: 3%;
	background-color: ${(props) => props.theme.colors.lighterBlack};
	font-size: 12px;
`;

export function GoBackButton() {
	const router = useRouter();
	return (
		<GoBackButtonStyled
			className={cinzel.className}
			onClick={(e) => {
				e.preventDefault();
				router.push('/');
			}}
		>
			Go Back
		</GoBackButtonStyled>
	);
}
