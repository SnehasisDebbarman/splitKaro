import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Alert, Pressable, Text, View } from 'react-native';
import { useGroupsStore } from '../../stores/groups';

export default function GroupDetailsScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const group = useGroupsStore((s) => s.getGroupById(String(id)));
	const removeGroup = useGroupsStore((s) => s.removeGroup);

	if (!group) {
		return (
			<View className="flex-1 items-center justify-center p-4">
				<Text>Group not found.</Text>
			</View>
		);
	}

	return (
		<View className="flex-1 p-4 gap-4">
			<Stack.Screen options={{ title: group.name }} />
			<View className="gap-1">
				<Text className="text-gray-600">Group ID</Text>
				<Text selectable className="font-medium">{group.id}</Text>
			</View>
			<View className="gap-1">
				<Text className="text-gray-600">Created</Text>
				<Text className="font-medium">{new Date(group.createdAt).toLocaleString()}</Text>
			</View>

			<Pressable
				className="bg-red-600 px-4 py-3 rounded-md items-center mt-auto"
				onPress={() => {
					Alert.alert('Delete group', 'This action cannot be undone.', [
						{ text: 'Cancel', style: 'cancel' },
						{
							text: 'Delete',
							style: 'destructive',
							onPress: () => {
								removeGroup(group.id);
								router.replace('/');
							},
						},
					]);
				}}
			>
				<Text className="text-white font-semibold">Delete Group</Text>
			</Pressable>
		</View>
	);
}