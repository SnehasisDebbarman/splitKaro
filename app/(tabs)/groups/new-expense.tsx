import { useState } from 'react';
import { Alert } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

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
      <Input
        value={description}
        onChangeText={setDescription}
        placeholder="e.g. Groceries"
        className="mt-2"
      />
      <View style={{ height: 16 }} />
      <Text>Amount</Text>
      <Input
        value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad"
        placeholder="e.g. 24.99"
        className="mt-2"
      />
      <View style={{ height: 24 }} />
      <Button label="Save Expense" onPress={handleSubmit} />
    </View>
  );
}

