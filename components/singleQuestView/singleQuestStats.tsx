import styled from 'styled-components';
import { StatKey, StatValue, SwordIcons } from '../shared/stat';

const SingleQuestStatsWrapper = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 10% 40% 10% 40%;
	grid-template-rows: 1fr 1fr;
	align-items: center;
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
			<SingleQuestStatKey text='Skill Tree' />
			<SingleQuestStatValue text={skillTree} />
			<SingleQuestStatKey text='Difficulty' />
			<SwordIcons swords={difficulty} />
			<SingleQuestStatKey text='Skill' />
			<SingleQuestStatValue text={skill} />
			<SingleQuestStatKey text='Quest type' />
			<SingleQuestStatValue text={type} />
		</SingleQuestStatsWrapper>
	);
}
