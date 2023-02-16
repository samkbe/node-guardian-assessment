import styled from 'styled-components';
import { StatKey, StatValue, SwordIcons } from '../shared/stat';

const SingleQuestStatsWrapper = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 10% 40% 10% 40%;
	grid-template-rows: 1fr 1fr;
	align-items: center;
	@media (max-width: 800px) {
		grid-template-columns: 20% 30% 20% 30%;
	}
	@media (min-width: 1600px) {
		width: 80%;
	}
	padding: ${(props) => `0px ${props.theme.spacing.s}`};
`;

type SingleQuestStatsProps = {
	skillTree: string;
	skill: string;
	difficulty: number;
	type: string;
};

const SingleQuestStatKey = styled(StatKey)`
	font-size: 14px;
`;
const SingleQuestStatValue = styled(StatValue)`
	font-size: 14px;
`;

export function SingleQuestStats({ skillTree, skill, difficulty, type }: SingleQuestStatsProps) {
	return (
		<SingleQuestStatsWrapper>
			<SingleQuestStatKey size='14px' text='Skill Tree' />
			<SingleQuestStatValue size='14px' text={skillTree} />
			<SingleQuestStatKey size='14px' text='Difficulty' />
			<SwordIcons swords={difficulty} />
			<SingleQuestStatKey size='14px' text='Skill' />
			<SingleQuestStatValue size='14px' text={skill} />
			<SingleQuestStatKey size='14px' text='Quest type' />
			<SingleQuestStatValue size='14px' text={type} />
		</SingleQuestStatsWrapper>
	);
}
