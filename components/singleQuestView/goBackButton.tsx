import styled from 'styled-components';

export const GoBackButton = styled.button`
	border-radius: ${(props) => props.theme.radius.s};
	border: ${(props) => `1px solid ${props.theme.colors.gold}`};
	height: 35px;
	width: 90px;
	position: absolute;
	bottom: 2%;
	right: 2%;
	background-color: ${(props) => props.theme.colors.lighterBlack};
`;
