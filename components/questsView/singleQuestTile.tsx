import styled from 'styled-components';
import { useRouter } from 'next/router';
import { QuestListItem } from '@/types/quest';
import { QuestTileBanner } from './questTileBanner';
import { QuestTileTitle } from './questTileTitle';
import { QuestViewStats } from './questViewStats';
import { Cinzel } from '@next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] });

type SingleQuestTileProps = {
	quest: QuestListItem;
};

const SingleQuestTileWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.lighterBlack};
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: 10px;
	padding: ${(props) => props.theme.spacing['6xs']};
	display: flex;
	flex-direction: column;
	&:hover {
		box-shadow: ${(props) => `0px 2px 10px 0px ${props.theme.colors.gold}`};
	}
	cursor: pointer;
`;

export function SingleQuestTile({ quest }: SingleQuestTileProps) {
	const router = useRouter();

	return (
		<SingleQuestTileWrapper
			onClick={(e) => {
				e.preventDefault();
				router.push(`/${quest.id}`);
			}}
		>
			<QuestTileBanner url={quest.cover} />
			<QuestTileTitle className={cinzel.className}>{quest.title}</QuestTileTitle>
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
