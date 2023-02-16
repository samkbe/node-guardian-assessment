import styled from 'styled-components';
import Image from 'next/image';
import FilledSword from '../../public/sword_icon_filled.svg';
import EmptySword from '../../public/sword_icon_empty.svg';

const StatWrapper = styled.div`
	display: flex;
	height: 30%;
	align-items: center;
`;
const StatKey = styled.p<StatKeyProps>`
	padding: 0px;
	margin: 0px;
	color: ${(props) => (props.color ? props.color : props.theme.colors.gold)};
`;
const StatValue = styled.p<StatKeyProps>`
	padding: 0px;
	margin: 0px;
	color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
`;

type SwordIconsProps = {
	swords: number;
};
type StatKeyProps = {
	color?: string;
};
type StatProps = {
	isSwordIcons?: boolean;
	iconRating?: number;
	title: string;
	value: string | number;
	color?: string;
};

export function Stat({ isSwordIcons, iconRating, title, value, color }: StatProps) {
	if (isSwordIcons) {
		return (
			<StatWrapper>
				<StatKey color={color}>{title}: </StatKey>
				<SwordIcons swords={iconRating ? iconRating : 0} />
			</StatWrapper>
		);
	}
	return (
		<StatWrapper>
			<StatKey>{title}: </StatKey>
			<StatValue color={color}>{value}</StatValue>
		</StatWrapper>
	);
}

function SwordIcons({ swords }: SwordIconsProps) {
	//Create arr to map over with length of 5
	const arr = [0, 0, 0, 0, 0];

	//Adjust rating (arr is 0 indexed)
	const rating = swords - 1;
	console.log('ARR: ', arr, 'RATING: ', rating);
	//Map over arr and add filled swords accordingly
	return (
		<>
			{arr.map((_, i) => {
				if (rating > i) {
					return <Image key={i} src={FilledSword} alt='Sword-Icon' />;
				} else {
					return <Image key={i} src={EmptySword} alt='Sword-Icon' />;
				}
			})}
		</>
	);
}
