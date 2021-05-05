import React, { useState } from "react";
import Page from "./Page";
import s from './Paginator.module.css';

const Paginator = ({portionSize, requestPeople, pageSize, pages,
    currentPage, portionCount}) => {
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));

    const leftPortion = (portionNumber - 1) * portionSize + 1;
    const rightPortion = portionNumber * portionSize;
    const onPageChanged = (pageNumber) => {
        requestPeople(pageNumber, pageSize);
    }
    return (
        <div className={s.divPages}>
        {portionNumber >= 2 &&
            <button type='button' onClick={() => {
                setPortionNumber(1);}}>
                <span><i className="fas fa-angle-double-left"></i></span>
            </button>
        }
        {portionNumber > 1 &&
            <button type='button' onClick={() => {
                setPortionNumber(portionNumber - 1);}}>
                <span><i className="fas fa-angle-left"></i></span>
            </button>
        }
        {pages
            .filter(p => p >= leftPortion && p <= rightPortion)
            .map(p => {return <Page key={p} path={`/people/page=${p}`}
                    currentPage={currentPage}
                    chosenPage={p}
                    onPageChanged ={onPageChanged} />
            })
        }
        {portionCount > portionNumber &&
            <button type='button' onClick={() => {
                setPortionNumber(portionNumber + 1)}}>
                <span><i className="fas fa-angle-right"></i></span>
            </button>
        }
        {portionCount > portionNumber &&
            <button type='button' onClick={() => {
                setPortionNumber(portionCount);}}>
                <span><i className="fas fa-angle-double-right"></i></span>
            </button>
        }
    </div>
    );
}

export default Paginator;