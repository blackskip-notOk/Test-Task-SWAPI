import React from 'react';
import s from '../components/Components.module.css';

export const paginationRender = (page, type, originalElement, current) => {
    switch(type) {
        case 'prev':
            return <div className={s.changePage}><i className="fas fa-angle-left"></i></div>;
        case 'next':
            return <div className={s.changePage}><i className="fas fa-angle-right"></i></div>;
        case 'page':
            return <div className={current === page ? s.pageChosen : s.page}>{page}</div>;
        case 'jump-prev':
            return <div className={s.changePage}><i className="fas fa-angle-double-right"></i></div>;
        case 'jump-next':
            return <div className={s.changePage}><i className="fas fa-angle-double-left"></i></div>;

        default: return originalElement;
    }
}