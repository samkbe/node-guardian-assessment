import { QuestList } from '@/types/quest';
import styled from 'styled-components';
import { SingleQuestTile } from './singleQuestTile';

type QuestTilesProps = {
	quests: QuestList;
};

const QuestTilesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 80vw;
	height: 115vh;
	margin-top: 20vh;
	max-width: 1100px;
	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
		width: 90vw;
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		width: 95vw;
	}
	grid-gap: ${(props) => props.theme.spacing.s};
`;

export function QuestTiles({ quests }: QuestTilesProps) {
	console.log(quests);
	return (
		<QuestTilesWrapper>
			{quests.map((quest) => (
				<SingleQuestTile key={quest.id} quest={quest} />
			))}
		</QuestTilesWrapper>
	);
}
