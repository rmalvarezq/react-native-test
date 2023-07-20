import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Expense = {
  id: string;
  title: string;
  amount: number;
};

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <View style={styles.container}>
      <Text>{expense.title}</Text>
      <Text>${expense.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ExpenseItem;
