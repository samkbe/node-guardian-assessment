import styled from 'styled-components';
import { Stat } from '../shared/stat';

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
	grid-template-columns: 1fr 1fr;
	height: 100px;
`;

export function QuestViewStats({ skillTree, skill, type, difficulty, experience, gold }: QuestViewStatsProps) {
	return (
		<QuestViewStatsWrapper>
			<Stat title='Skill Tree' value={skillTree} />
			<Stat title='Difficulty' isSwordIcons={true} value='' iconRating={difficulty} />
			<Stat title='Skill' value={skill} />
			<Stat title='Experience' value={experience} />
			<Stat title='Type' value={type} />
			<Stat title='Gold' value={gold} />
		</QuestViewStatsWrapper>
	);
}
