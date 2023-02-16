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
const StatKeyText = styled.p<StatKeyValueProps>`
	padding: 0px;
	margin: 0px;
	font-size: ${(props) => (props.size ? props.size : '12px')};
	color: ${(props) => (props.color ? props.color : props.theme.colors.gold)};
`;
const StatValueText = styled.p<StatKeyValueProps>`
	padding: 0px;
	margin: 0px;
	font-size: ${(props) => (props.size ? props.size : '12px')};
	color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
`;

type SwordIconsProps = {
	swords: number;
};
type StatKeyValueProps = {
	color?: string;
	size?: string;
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
	size?: string;
};
type StatValueProps = {
	text: string | number;
	color?: string;
	size?: string;
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

export function StatKey({ text, size }: StatKeyProps) {
	return (
		<StatWrapper>
			<StatKeyText size={size}>{text}</StatKeyText>
		</StatWrapper>
	);
}

export function StatValue({ text, color, size }: StatValueProps) {
	return (
		<StatWrapper>
			<StatValueText size={size} color={color}>
				{text}
			</StatValueText>
		</StatWrapper>
	);
}
