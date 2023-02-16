import styled from 'styled-components';
import { Cinzel } from '@next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] });

const GoBackButtonStyled = styled.button`
	pointer: cursor;
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
	return <GoBackButtonStyled className={cinzel.className}>Go Back</GoBackButtonStyled>;
}
