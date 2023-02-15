import styled from 'styled-components';
import ExitIcon from '../../public/exit.svg';
import Image from 'next/image';

const SingleQuestBannerWrapper = styled.div`
	background-image: url('/Quest_picture.png');
	height: 40%;
	width: 100%;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
	display: flex;
	justify-content: flex-end;
`;
const ExitButton = styled(Image)`
	padding: 10px 10px 0px 0px;
`;

export function SingleQuestBanner() {
	return (
		<SingleQuestBannerWrapper>
			<ExitButton width={23} src={ExitIcon} alt='Exit Button' />
		</SingleQuestBannerWrapper>
	);
}
