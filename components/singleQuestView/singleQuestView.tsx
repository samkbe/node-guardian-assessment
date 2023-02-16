import styled from 'styled-components';
import type { Quest } from '@/types/quest';
import { SingleQuestBanner } from './singleQuestBanner';
import { SingleQuestTitle } from './singleQuestTitle';
import { SingleQuestStats } from './singleQuestStats';
import { SingleQuestDescription } from './singleQuestDescription';
import { GoBackButton } from './goBackButton';
import { ExpBadge } from './expBadge';

const SingleQuestViewWrapper = styled.div`
	position: relative;
	max-width: 1100px;
	width: 50vw;
	height: 75vh;
	margin-top: -5vh;
	background-color: ${(props) => props.theme.colors.lighterBlack};
	border-radius: 10px;
	border: 1px solid rgba(58, 58, 58, 0.5);
	display: flex;
	flex-direction: column;
	padding: 2px;
	align-items: center;
`;

type SingleQuestViewProps = {
	quest: Quest;
};

export function SingleQuestView({ quest }: SingleQuestViewProps) {
	return (
		<SingleQuestViewWrapper>
			<SingleQuestBanner />
			<SingleQuestTitle title={quest.title} />
			<SingleQuestStats
				skillTree={quest.skillTree}
				skill={quest.skill}
				difficulty={quest.difficulty}
				type={quest.type}
			/>
			<SingleQuestDescription description={quest.description} />
			<ExpBadge experience={quest.rewards.experience} />
			<GoBackButton>Go Back</GoBackButton>
		</SingleQuestViewWrapper>
	);
}
