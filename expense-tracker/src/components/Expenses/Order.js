import React from 'react';
import './Order.css';

const ExpensesFilter = (props) => {



    return (
        <div className='order-filter'>
            <div className='order-filter__control'>
                <label>Set Order</label>
                <select>
                    <option value='increasing'>Increasing</option>
                    <option value='decreasing'>Decreasing</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;