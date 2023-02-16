import styled from 'styled-components';
import Image from 'next/image';
import ExpSymbol from '../../public/EXP.svg';
import { Cinzel } from '@next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] });

const ExpBadgeWrapper = styled.div`
	border: ${(props) => `1px solid ${props.theme.colors.gold}`};
	background-image: linear-gradient(to top, rgba(7, 15, 29, 0), rgba(54, 77, 137, 0.4));
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 60px;
	height: 60px;
	justify-content: center;
`;
const ExpBadgeText = styled.p`
	margin: 0px;
	font-size: 8px;
`;

type ExpBadgeProps = {
	experience: number;
};

const FullExpBadgeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 2%;
	left: 2%;
`;
const ExpBadgeTitle = styled.h3`
	font-size: 14px;
	margin: 0px;
	margin-bottom: 10px;
`;

export function ExpBadge({ experience }: ExpBadgeProps) {
	return (
		<FullExpBadgeWrapper className={cinzel.className}>
			<ExpBadgeTitle>QUEST REWARDS</ExpBadgeTitle>
			<ExpBadgeWrapper>
				<Image src={ExpSymbol} alt='exp-symbol' />
				<ExpBadgeText>+{experience}</ExpBadgeText>
			</ExpBadgeWrapper>
		</FullExpBadgeWrapper>
	);
}
