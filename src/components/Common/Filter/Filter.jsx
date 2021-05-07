import React, { useState } from 'react';
import commonStyle from '../../Components.module.css';
const Filter = ({array, filtredArray, filtredParam,getFilteredData,
    requestPlanets, page}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const filterItems = (e) => {
        const result = array.filter((el) => el[filtredParam].indexOf(value) > -1);
        e.preventDefault();
        return getFilteredData(filtredArray, result);
    }

    const resetFilters = () => {
        requestPlanets(page);
        setValue('');
    }

    return (
        <div className={commonStyle.filterDiv}>
            <form onSubmit={filterItems} className={commonStyle.filterForm}>
                <input type='text' value={value}
                    onChange={handleChange} className={commonStyle.filterInput} />
                <input type='submit' value='Отфильтровать'
                        className={commonStyle.inputButton} />
                <input type='button' value='Сбросить фильтр'
                        onClick={resetFilters} className={commonStyle.inputButton} />
            </form>
        </div>
    );
}

export default Filter;