import styled from 'styled-components';
import { QuestListItem } from '@/types/quest';
import { QuestTileBanner } from './questTileBanner';
import { QuestTileTitle } from './questTileTitle';
import { QuestViewStats } from './questViewStats';

type SingleQuestTileProps = {
	quest: QuestListItem;
};

const SingleQuestTileWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.lighterBlack};
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: 10px;
	padding: 2px;
	display: flex;
	flex-direction: column;
	&:hover {
		box-shadow: ${(props) => `0px 2px 10px 0px ${props.theme.colors.gold}`};
	}
	cursor: pointer;
`;

export function SingleQuestTile({ quest }: SingleQuestTileProps) {
	return (
		<SingleQuestTileWrapper>
			<QuestTileBanner />
			<QuestTileTitle>{quest.title}</QuestTileTitle>
			<QuestViewStats
				skill={quest.skill}
				skillTree={quest.skillTree}
				type={quest.type}
				difficulty={quest.difficulty}
				experience={quest.experience}
				gold={quest.gold}
			/>
		</SingleQuestTileWrapper>
	);
}
