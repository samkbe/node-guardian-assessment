import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExitIcon from '../../public/exit.svg';
import Image from 'next/image';

type SingleQuestBannerWrapperProps = {
	url: string;
};

const SingleQuestBannerWrapper = styled.div<SingleQuestBannerWrapperProps>`
	background-image: ${(props) => `url('${props.url}')`};
	background-size: cover;
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

export function SingleQuestBanner({ url }: SingleQuestBannerWrapperProps) {
	const router = useRouter();
	return (
		<SingleQuestBannerWrapper url={url}>
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
