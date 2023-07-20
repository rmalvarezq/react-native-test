import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

type Expense = {
  id: string;
  title: string;
  amount: number;
};

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <View style={styles.container}>
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});

export default App;
