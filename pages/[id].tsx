import { useQuery } from '@tanstack/react-query';
import { getQuests, getQuestsById } from '../helpers';
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import type { Quest } from '@/types/quest';
import { SingleQuestView } from '@/components/singleQuestView/singleQuestView';

type PagePropsFailure = {
	notFound: true;
};
type PagePropsSuccess = {
	props: {
		data: Quest;
	};
};
type PageProps = PagePropsFailure | PagePropsSuccess;

export async function getStaticPaths() {
	const data = await getQuests();
	const paths = data.map((quest) => {
		return {
			params: {
				id: quest.id.toString()
			}
		};
	});
	return {
		paths: paths,
		fallback: false
	};
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<PageProps> {
	if (context.params?.id) {
		try {
			const quest = await getQuestsById(parseInt(context.params.id[0]));
			return {
				props: {
					data: quest
				}
			};
		} catch (e) {
			return {
				notFound: true
			};
		}
	}
	return {
		notFound: true
	};
}

export default function Quest(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data, isError, isLoading } = useQuery(['quest', props.data.id], () => getQuestsById(props.data.id), {
		initialData: props.data
	});
	return <SingleQuestView quest={props.data} />;
}
