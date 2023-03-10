import { useQuery } from '@tanstack/react-query';
import { getQuests, getQuestsById } from '../helpers';
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import type { Quest } from '@/types/quest';
import axios from 'axios';
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
	//Must make the api request directly in here to avoid errors during build
	const { data } = await axios.get('https://dummyjson.com/products?offset=0&limit=10');
	const paths = data.products.map((quest: any) => {
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
			if (typeof context.params.id === 'string') {
				const quest = await getQuestsById(parseInt(context.params.id));
				return {
					props: {
						data: quest
					}
				};
			}
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
	if (isLoading) return <>Loading...</>;
	if (isError) return <>Sorry there was an error..</>;
	return <SingleQuestView quest={data} />;
}
