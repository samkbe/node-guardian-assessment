import styled from 'styled-components';

type QuestTileBannerProps = {
	url: string;
};

export const QuestTileBanner = styled.div<QuestTileBannerProps>`
	background-image: ${(props) => `url('${props.url}')`};
	background-size: cover;
	height: 40%;
	width: 100%;
	border-radius: ${(props) => props.theme.radius.s};
`;
