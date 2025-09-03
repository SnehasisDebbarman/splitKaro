import { useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { Text, View } from '../../../components/Themed';

export default function NewExpenseScreen() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit() {
    Alert.alert('Submitted', `Added: ${description} - $${amount}`);
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>New Expense</Text>
      <View style={{ height: 16 }} />
      <Text>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="e.g. Groceries"
        style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, padding: 12, marginTop: 8 }}
      />
      <View style={{ height: 16 }} />
      <Text>Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad"
        placeholder="e.g. 24.99"
        style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, padding: 12, marginTop: 8 }}
      />
      <View style={{ height: 24 }} />
      <Text onPress={handleSubmit} style={{ backgroundColor: '#2563eb', color: 'white', padding: 12, borderRadius: 8, textAlign: 'center', fontWeight: '700' }}>
        Save Expense
      </Text>
    </View>
  );
}

