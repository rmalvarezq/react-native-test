import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

type AddExpenseFormProps = {
  onAddExpense: (newExpense: Expense) => void;
};

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    // Validar los campos y realizar las acciones necesarias
    if (title.trim() === '' || amount.trim() === '') {
      return;
    }

    const newExpense = {
      id: Math.random().toString(),
      title,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);

    setTitle('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        placeholder="Cantidad"
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        keyboardType="numeric"
      />
      <Button title="Agregar Gasto" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default AddExpenseForm;
