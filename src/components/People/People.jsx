import { Pagination, Table } from 'antd';
import React from 'react';
import { peopleColumns } from '../../utils/columns';
import { peopleTitle } from '../../utils/dataSource';
import { paginationRender } from '../../utils/pagination';
import HomePageButton from '../Common/HomePageButton/HomePageButton';
import commonStyle from '../Components.module.css';

const People = ({currentPage, count, requestPeople, people}) => {
    const onPageChanged = (page) => {
        requestPeople(page);
    };

    return(
        <>
            <HomePageButton />
            <Table columns={peopleColumns()}
                dataSource={people}
                pagination={false}
                className={commonStyle.table}
                title={peopleTitle}
                rowClassName={commonStyle.rows} />
            <Pagination current={currentPage}
                showSizeChanger={false}
                itemRender={paginationRender}
                total={count}
                onChange={onPageChanged}
                className={commonStyle.pagination}
                />
        </>
    );
}

export default People;