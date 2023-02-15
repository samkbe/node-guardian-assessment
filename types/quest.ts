export type Quest = {
	cover: string;
	description: string;
	difficulty: number;
	experience: number;
	gold: number;
	id: number;
	rewards: {
		experience: number;
		gold: number;
	};
	skill: string;
	skillTree: string;
	title: string;
	type: string;
};

export type QuestListItem = {
	cover: string;
	difficulty: number;
	experience: number;
	gold: number;
	id: number;
	skill: string;
	skillTree: string;
	title: string;
	type: string;
};

export type QuestList = QuestListItem[];
