import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '반바지 (폴로)',
    amount: 75000,
    date: new Date(2021, 5, 14),
  },
  {
    id: 'e2',
    title: '셔츠 (유니온블루)',
    amount: 55000,
    date: new Date(2021, 9, 21),
  },
  {
    id: 'e3',
    title: '후드티 (폴로)',
    amount: 179000,
    date: new Date(2022, 1, 28),
  },
  {
    id: 'e4',
    title: '맨투맨 (폴로)',
    amount: 85000,
    date: new Date(2022, 3, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
