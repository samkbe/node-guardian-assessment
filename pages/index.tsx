import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import type { QuestList } from '@/types/quest';
import { getQuests } from '../helpers';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { QuestTiles } from '@/components/questsView/questTiles';

type PagePropsSuccess = {
	props: {
		data: QuestList;
	};
};
type PagePropsFailure = {
	notFound: true;
};
type PageProps = PagePropsSuccess | PagePropsFailure;

export async function getStaticProps(context: GetStaticPropsContext): Promise<PageProps> {
	const quests = await getQuests();

	if (!quests) {
		return {
			notFound: true
		};
	}
	return {
		props: {
			data: quests
		}
	};
}

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data, isError, isLoading } = useQuery(['quests'], () => getQuests(), { initialData: props.data });
	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>
			{data ? <QuestTiles quests={data} /> : <>Loading...</>}
		</>
	);
}
