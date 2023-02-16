import styled from 'styled-components';
import { StatKey, StatValue, SwordIcons } from '../shared/stat';

type QuestViewStatsProps = {
	skillTree: string;
	skill: string;
	type: string;
	difficulty: number;
	experience: number;
	gold: number;
};

const QuestViewStatsWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: repeat(4, 1fr);
	height: 100px;
	padding-left: ${(props) => props.theme.spacing['4xs']};
`;

export function QuestViewStats({ skillTree, skill, type, difficulty, experience, gold }: QuestViewStatsProps) {
	return (
		<QuestViewStatsWrapper>
			<StatKey text='Skill Tree' />
			<StatValue color='#98A7F5' text={skillTree} />
			<StatKey text='Difficulty' />
			<SwordIcons swords={difficulty} />
			<StatKey text='Skill' />
			<StatValue text={skill} />
			<StatKey text='Experience' />
			<StatValue text={experience} />
			<StatKey text='Type' />
			<StatValue text={type} />
			<StatKey text='Gold' />
			<StatValue text={gold} />
		</QuestViewStatsWrapper>
	);
}
