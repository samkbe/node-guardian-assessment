import styled from 'styled-components';
import Image from 'next/image';
import SideIcon from '../../public/side_icon.svg';

type SingleQuestTitleProps = {
	title: string;
};
type GradientProps = {
	direction: string;
};

const GradientOverlay = styled.div<GradientProps>`
	background-image: ${(props) => `linear-gradient(to ${props.direction}, rgba(29, 28, 26, 0), rgba(29, 28, 26, 1))`};
`;

const SingleQuestTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-image: linear-gradient(to right, rgba(29, 28, 26, 1), rgba(29, 28, 26, 0), rgba(29, 28, 26, 1));
`;

const Grad = styled.div`
	background-image: linear-gradient(to right, rgba(29, 28, 26, 1), rgba(29, 28, 26, 0), rgba(29, 28, 26, 1));
	z-index: 9;
`;

const SideIconGradientRight = styled.div`
	width: 0;
	height: 0;
	border-top: 2px solid transparent;
	border-bottom: 2px solid transparent;
	border-left: 60px solid rgba(109, 93, 67, 1);
	margin-left: -2px;
`;

const SideIconSphere = styled(Image)`
	border: ${(props) => `2px solid ${props.theme.colors.lighterBlack}`};
	border-radius: 50%;
	z-index: 2;
`;

export function SingleQuestTitle({ title }: SingleQuestTitleProps) {
	return (
		<SingleQuestTitleWrapper>
			<SideIconLeft />
			{title}
			<SideIconRight />
			<Grad />
		</SingleQuestTitleWrapper>
	);
}

function SideIconRight() {
	return (
		<SideIconWrapper>
			<SideIconSphere src={SideIcon} width={10} alt='side-icon-right' />

			<SideIconGradientRight>
				<GradientOverlay direction='right' />
			</SideIconGradientRight>
		</SideIconWrapper>
	);
}

const SideIconWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const SideIconGradientLeft = styled.div`
	width: 0;
	height: 0;
	border-top: 2px solid transparent;
	border-bottom: 2px solid transparent;
	border-right: 60px solid rgba(109, 93, 67, 1);
	margin-right: -2px;
`;

function SideIconLeft() {
	return (
		<SideIconWrapper>
			<GradientOverlay direction='left'>
				<SideIconGradientLeft />
			</GradientOverlay>
			<SideIconSphere src={SideIcon} width={10} alt='side-icon-left' />
		</SideIconWrapper>
	);
}
