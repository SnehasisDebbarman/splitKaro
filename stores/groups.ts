import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { nanoid } from 'nanoid/non-secure';

export type Group = {
	id: string;
	name: string;
	createdAt: number;
};

export type GroupsState = {
	groups: Group[];
	addGroup: (name: string) => Group;
	removeGroup: (id: string) => void;
	getGroupById: (id: string) => Group | undefined;
};

export const useGroupsStore = create<GroupsState>()(
	persist(
		(set, get) => ({
			groups: [],
			addGroup: (name: string) => {
				const newGroup: Group = { id: nanoid(12), name, createdAt: Date.now() };
				set((state) => ({ groups: [newGroup, ...state.groups] }));
				return newGroup;
			},
			removeGroup: (id: string) => {
				set((state) => ({ groups: state.groups.filter((g) => g.id !== id) }));
			},
			getGroupById: (id: string) => {
				return get().groups.find((g) => g.id === id);
			},
		}),
		{
			name: 'splitkaro-groups',
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);