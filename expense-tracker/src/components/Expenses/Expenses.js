import {useState} from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Sorting from './Sorting'
import Order from './Order'
import './Expenses.css'


export default function Expenses(props){
    const [year, setYear] = useState('2021') ;
    const [sortMode, setSortMode] = useState('price') ;

    const yearChangeHandler = (year) => {
        setYear(year) ;
    }

    const sortModeChangeHandler = (mode) =>{
        setSortMode(mode) ;
    }

    const filteredList = props.expenses.filter((ex) => {
        return ex.date.getFullYear().toString()===year
    });



    return (
        <Card className='expenses'>
            <ExpensesChart filteredList={filteredList} />
            <ExpensesFilter onYearChange={yearChangeHandler} year={year}/>
            <Sorting onSortModeChange={sortModeChangeHandler} sortMode={sortMode}/>
            <Order />
            <ExpensesList filteredList={filteredList} onDelete={props.onDelete} sortMode={sortMode} />
        </Card>
    )
}