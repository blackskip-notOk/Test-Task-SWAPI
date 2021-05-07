import { Pagination, Table } from 'antd';
import React from 'react';
import { peopleColumns } from '../../utils/columns';
import { peopleTitle } from '../../utils/dataSource';
import HomePageButton from '../Common/HomePageButton/HomePageButton';
import s from './People.module.css';

const People = ({currentPage, count, requestPeople, people}) => {
    const columns = peopleColumns();
    const dataSource = people;
    const title = peopleTitle;

    function itemRender(page, type, originalElement, current) {
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

    const onPageChanged = (page) => {
        requestPeople(page);
        //добавить изменение класса в зависимлсти от страницы
    };

    return(
        <>
            <HomePageButton />
            <Table columns={columns}
                dataSource={dataSource}
                pagination={false}
                className={s.table}
                title={title}
                rowClassName={s.rows} />

            <Pagination current={currentPage}
                showSizeChanger={false}
                itemRender={itemRender}
                total={count}
                onChange={onPageChanged}
                className={s.pagination}
                />
            {/* <Paginator currentPage={currentPage}
                    pages={pages}
                    portionCount={portionCount}
                    portionSize={portionSize}
                    requestPeople={requestPeople}
                    pageSize={pageSize} /> */}
    </>
    );
}

export default People;