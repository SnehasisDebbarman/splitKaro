import { Link } from 'expo-router';
import { FlatList, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import type { GroupSummary } from '../../../types/domain';

const demoGroups: GroupSummary[] = [
  { id: 'g1', name: 'Roommates', numMembers: 3, numExpenses: 12 },
  { id: 'g2', name: 'Trip to Bali', numMembers: 5, numExpenses: 7 },
];

export default function GroupsListScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={demoGroups}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Link
            href={`/(tabs)/groups/${item.id}`}
            asChild
          >
            <Pressable
              style={{
                padding: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#e5e7eb',
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
              <Text style={{ marginTop: 4, color: '#6b7280' }}>
                {item.numMembers} members • {item.numExpenses} expenses
              </Text>
            </Pressable>
          </Link>
        )}
      />
      <Link href="/(tabs)/groups/new-expense" asChild>
        <Pressable
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
            backgroundColor: '#2563eb',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 9999,
          }}
        >
          <Text style={{ color: 'white', fontWeight: '700' }}>New Expense</Text>
        </Pressable>
      </Link>
    </View>
  );
}

