import styled from 'styled-components';
import Image from 'next/image';
import ExpSymbol from '../../public/EXP.svg';

const ExpBadgeWrapper = styled.div`
	border: ${(props) => `1px solid ${props.theme.colors.gold}`};
	background-image: linear-gradient(to top, rgba(7, 15, 29, 0), rgba(54, 77, 137, 0.4));
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 5vw;
	height: 5vh;
`;

type ExpBadgeProps = {
	experience: number;
};

export function ExpBadge({ experience }: ExpBadgeProps) {
	return (
		<ExpBadgeWrapper>
			<Image src={ExpSymbol} alt='exp-symbol' />
			<p>+{experience}</p>
		</ExpBadgeWrapper>
	);
}
