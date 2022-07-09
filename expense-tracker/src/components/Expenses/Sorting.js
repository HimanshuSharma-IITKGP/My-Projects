import React from 'react';
import './Sorting.css';

const Sorting = (props) => {


    const sortHandler = event => {
        props.onSortModeChange(event.target.value)
    }

    return (
        <div className='sorting-filter'>
            <div className='sorting-filter__control'>
                <label>Sort By</label>
                <select  onChange={sortHandler} value={props.sortMode}>
                    <option value='Price'>Price</option>
                    <option value='Date'>Date</option>
                </select>
            </div>
        </div>
    );
};

export default Sorting;