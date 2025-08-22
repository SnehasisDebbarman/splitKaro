import { Link } from 'expo-router';
import { FlatList, Pressable, TextInput, Text, View } from 'react-native';
import { useGroupsStore } from '../../stores/groups';
import { useState } from 'react';

export default function GroupsScreen() {
	const groups = useGroupsStore((s) => s.groups);
	const addGroup = useGroupsStore((s) => s.addGroup);
	const [name, setName] = useState('');

	return (
		<View className="flex-1 p-4 gap-4">
			<View className="flex-row gap-2">
				<TextInput
					value={name}
					onChangeText={setName}
					placeholder="New group name"
					className="flex-1 border border-gray-300 rounded-md px-3 py-2"
				/>
				<Pressable
					className="bg-blue-600 px-4 py-2 rounded-md"
					onPress={() => {
						if (!name.trim()) return;
						const created = addGroup(name.trim());
						setName('');
					}}
				>
					<Text className="text-white font-semibold">Add</Text>
				</Pressable>
			</View>

			<FlatList
				data={groups}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={() => <View className="h-px bg-gray-200" />}
				renderItem={({ item }) => (
					<Link
						href={`/group/${item.id}`}
						asChild
					>
						<Pressable className="py-3">
							<Text className="text-base font-medium">{item.name}</Text>
							<Text className="text-xs text-gray-500">
								{new Date(item.createdAt).toLocaleString()}
							</Text>
						</Pressable>
					</Link>
				)}
				ListEmptyComponent={() => (
					<View className="items-center mt-10">
						<Text className="text-gray-500">No groups yet. Create your first one!</Text>
					</View>
				)}
			/>
		</View>
	);
}
