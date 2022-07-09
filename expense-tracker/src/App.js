import {useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {

  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);


  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses((prev) => {
      return [expense, ...prev] ;
    })
  }

  const deleteExpenseHandler = (thisId) => {
    console.log('deleteExpenseHandler');

    setExpenses((prevExpenses)=>{
      return prevExpenses.filter((expense)=>{
        return expense.id !== thisId ;
      })
    })
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} onDelete={deleteExpenseHandler} />
    </div>
  );
}

export default App;
