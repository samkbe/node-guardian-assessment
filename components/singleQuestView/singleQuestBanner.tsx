import styled from 'styled-components';
import { useRouter } from 'next/router';
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
	cursor: pointer;
	padding: 10px 10px 0px 0px;
`;

export function SingleQuestBanner() {
	const router = useRouter();
	return (
		<SingleQuestBannerWrapper>
			<ExitButton
				onClick={(e) => {
					e.preventDefault();
					router.push('/');
				}}
				width={23}
				src={ExitIcon}
				alt='Exit Button'
			/>
		</SingleQuestBannerWrapper>
	);
}
