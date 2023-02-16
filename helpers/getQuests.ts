import axios from 'axios';
import type { QuestList } from '@/types/quest';

export async function getQuests(): Promise<QuestList> {
	const { data } = await axios.get('http://localhost:3000/api/quests/');
	return data;
}
