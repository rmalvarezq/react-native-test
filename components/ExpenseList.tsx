import React from 'react';
import { View, FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

type Expense = {
  id: string;
  title: string;
  amount: number;
};

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ExpenseList;
