import styled from 'styled-components';
import Image from 'next/image';
import FilledSword from '../../public/sword_icon_filled.svg';
import EmptySword from '../../public/sword_icon_empty.svg';

const SwordsWrapper = styled.div`
	display: flex;
`;
const StatWrapper = styled.div`
	display: flex;
	height: 30%;
	align-items: center;
`;
const StatKeyText = styled.p`
	padding: 0px;
	margin: 0px;
	font-size: 12px;
	color: ${(props) => (props.color ? props.color : props.theme.colors.gold)};
`;
const StatValueText = styled.p<StatKeyTextProps>`
	padding: 0px;
	margin: 0px;
	font-size: 12px;
	color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
`;

type SwordIconsProps = {
	swords: number;
};
type StatKeyTextProps = {
	color?: string;
};
type StatProps = {
	isSwordIcons?: boolean;
	iconRating?: number;
	title: string;
	value: string | number;
	color?: string;
};
type StatKeyProps = {
	text: string;
};
type StatValueProps = {
	text: string | number;
	color?: string;
};

export function SwordIcons({ swords }: SwordIconsProps) {
	//Create arr to map over with length of 5
	const arr = [0, 0, 0, 0, 0];

	//Adjust rating (arr is 0 indexed)
	const rating = swords - 1;

	//Map over arr and add filled swords accordingly
	return (
		<SwordsWrapper>
			{arr.map((_, i) => {
				if (rating > i) {
					return <Image key={i} src={FilledSword} alt='Sword-Icon' />;
				} else {
					return <Image key={i} src={EmptySword} alt='Sword-Icon' />;
				}
			})}
		</SwordsWrapper>
	);
}

export function StatKey({ text }: StatKeyProps) {
	return (
		<StatWrapper>
			<StatKeyText>{text}</StatKeyText>
		</StatWrapper>
	);
}

export function StatValue({ text, color }: StatValueProps) {
	return (
		<StatWrapper>
			<StatValueText color={color}>{text}</StatValueText>
		</StatWrapper>
	);
}
