import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if (props.filteredList.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }


    if(props.sortMode==='Price'){
        // console.log(typeof(props.filteredList[0].amount))
        console.log('price')
        props.filteredList.sort((a, b)=>{
            return a.amount - b.amount ;
        })
    }
    else if(props.sortMode === 'Date'){
        console.log('date')
        props.filteredList.sort((a, b)=>{
            return b.date.getTime() - a.date.getTime();
        })
    }

    console.log(props.filteredList)

    const sortedDomExpensesList = props.filteredList.map((ex) => {
        return <ExpenseItem
            title={ex.title}
            amount={ex.amount}
            date={ex.date}
            onDelete={props.onDelete}
            id={ex.id}
            key={ex.id}
        />
    })

    return (
        <ul className='expenses-list'>
            {
                sortedDomExpensesList
            }
        </ul>
    )
}

export default ExpensesList