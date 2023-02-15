import { QuestList } from '@/types/quest';
import styled from 'styled-components';
import { SingleQuestTile } from './singleQuestTile';

type QuestTilesProps = {
	quests: QuestList;
};

const QuestTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70vw;
  height: 80vh;
  margin-top -5vh;
  max-width: 1100px;
  grid-gap: ${(props) => props.theme.spacing.s}
`;

export function QuestTiles({ quests }: QuestTilesProps) {
	return (
		<QuestTilesWrapper>
			{quests.map((quest) => (
				<SingleQuestTile key={quest.id} quest={quest} />
			))}
		</QuestTilesWrapper>
	);
}
