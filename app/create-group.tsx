import { Stack, router } from 'expo-router';
import { Pressable, TextInput, Text, View } from 'react-native';
import { useGroupsStore } from '../stores/groups';
import { useState } from 'react';

export default function CreateGroupScreen() {
	const addGroup = useGroupsStore((s) => s.addGroup);
	const [name, setName] = useState('');

	return (
		<View className="flex-1 p-4 gap-4">
			<Stack.Screen options={{ title: 'Create Group' }} />
			<TextInput
				value={name}
				onChangeText={setName}
				placeholder="Group name"
				className="border border-gray-300 rounded-md px-3 py-2"
			/>
			<Pressable
				className="bg-blue-600 px-4 py-3 rounded-md items-center"
				disabled={!name.trim()}
				onPress={() => {
					const created = addGroup(name.trim());
					setName('');
					router.replace(`/group/${created.id}`);
				}}
			>
				<Text className="text-white font-semibold">Create</Text>
			</Pressable>
		</View>
	);
}