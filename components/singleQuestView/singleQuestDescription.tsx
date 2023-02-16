import styled from 'styled-components';

type SingleQuestDescriptionProps = {
	description: string;
};

const SingleQuestDescriptionWrapper = styled.div`
	padding: ${(props) => ` 0px ${props.theme.spacing.s}`};
	width: 100%;
	@media (min-width: 1600px) {
		width: 80%;
	}
`;
const SingleQuestDescriptionText = styled.p`
	font-size: 14px;
	color: ${(props) => props.theme.colors.grey};
`;

export function SingleQuestDescription({ description }: SingleQuestDescriptionProps) {
	return (
		<SingleQuestDescriptionWrapper>
			<SingleQuestDescriptionText>{description}</SingleQuestDescriptionText>
		</SingleQuestDescriptionWrapper>
	);
}
