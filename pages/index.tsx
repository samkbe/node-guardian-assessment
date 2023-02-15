import Head from 'next/head';
import type { QuestList } from '@/types/quest';
import { getQuests } from '../helpers';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

type PagePropsSuccess = {
	props: {
		__typename: 'success';
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
			__typename: 'success',
			data: quests
		}
	};
}

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log('PROPS: ', props);

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>
			{props.__typename === 'success' ? (
				<>
					{props.data.map((quest) => (
						<p key={quest.id}>{quest.experience}</p>
					))}
				</>
			) : (
				<p>Sorry, something went wrong</p>
			)}
		</>
	);
}
