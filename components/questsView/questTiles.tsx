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
  height: 80vh;
  margin-top -5vh;
  max-width: 1100px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: ${(props) => props.theme.spacing.s}
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
