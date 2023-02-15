import axios from 'axios';
import type { Quest } from '@/types/quest';

export async function getQuestsById(id: number): Promise<Quest> {
	const { data } = await axios.get(`http://localhost:3000/api/quests/${id}`);
	return data;
}
