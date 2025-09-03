import { useLocalSearchParams, Link } from 'expo-router';
import { ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';

export default function GroupDetailScreen() {
  const { groupId } = useLocalSearchParams<{ groupId: string }>();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Group {groupId}</Text>

      <View style={{ height: 16 }} />
      <Text style={{ fontSize: 16, fontWeight: '600' }}>Members</Text>
      <View style={{ height: 8 }} />
      <View style={{ padding: 12, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8 }}>
        <Text style={{ color: '#6b7280' }}>Members list goes here</Text>
      </View>

      <View style={{ height: 16 }} />
      <Text style={{ fontSize: 16, fontWeight: '600' }}>Expenses</Text>
      <View style={{ height: 8 }} />
      <View style={{ padding: 12, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8 }}>
        <Text style={{ color: '#6b7280' }}>Expenses list goes here</Text>
      </View>

      <View style={{ height: 16 }} />
      <Text style={{ fontSize: 16, fontWeight: '600' }}>Balance</Text>
      <View style={{ height: 8 }} />
      <View style={{ padding: 12, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8 }}>
        <Text style={{ color: '#6b7280' }}>Balance summary goes here</Text>
      </View>

      <View style={{ height: 24 }} />
      <Link href="/(tabs)/groups/new-expense" style={{ color: '#2563eb' }}>Add an expense</Link>
    </ScrollView>
  );
}

