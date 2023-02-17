import styled from 'styled-components';
import Image from 'next/image';
import SideIcon from '../../public/side_icon.svg';
import { Cinzel } from '@next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] });

type SingleQuestTitleProps = {
	title: string;
};

const SingleQuestTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50px;
	align-items: center;
`;
const GradWrapper = styled.div`
	position: relative;
`;
const Gradient = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(to right, rgba(29, 28, 26, 1), rgba(29, 28, 26, 0), rgba(29, 28, 26, 1));
	z-index: 3;
`;
const SideIconGradientRight = styled.div`
	width: 0;
	height: 0;
	border-top: 2px solid transparent;
	border-bottom: 2px solid transparent;
	border-left: 15vw solid rgba(109, 93, 67, 1);
	margin-left: -2px;
`;
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
	border-right: 15vw solid rgba(109, 93, 67, 1);
	margin-right: -2px;
`;
const SideIconSphere = styled(Image)`
	border: ${(props) => `2px solid ${props.theme.colors.lighterBlack}`};
	border-radius: 50%;
	z-index: 2;
`;
const Title = styled.h1`
	font-size: 18px;
	padding: 0px 10px;
`;

export function SingleQuestTitle({ title }: SingleQuestTitleProps) {
	return (
		<GradWrapper>
			<Gradient />
			<SingleQuestTitleWrapper>
				<SideIconLeft />
				<Title className={cinzel.className}>{title}</Title>
				<SideIconRight />
			</SingleQuestTitleWrapper>
		</GradWrapper>
	);
}
function SideIconRight() {
	return (
		<SideIconWrapper>
			<SideIconSphere src={SideIcon} width={12} alt='side-icon-right' />
			<SideIconGradientRight />
		</SideIconWrapper>
	);
}
function SideIconLeft() {
	return (
		<SideIconWrapper>
			<SideIconGradientLeft />
			<SideIconSphere src={SideIcon} width={12} alt='side-icon-left' />
		</SideIconWrapper>
	);
}
