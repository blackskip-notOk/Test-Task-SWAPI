import { Pagination, Table } from 'antd';
import React from 'react';
import { starshipsColumns } from '../../utils/columns';
import HomePageButton from '../Common/HomePageButton/HomePageButton';
import commonStyle from '../Components.module.css';
import { starshipsTitle } from '../../utils/dataSource';
import { paginationRender } from '../../utils/pagination';

const Starships = ({currentPage, requestStarships, starships, count}) => {
    const onPageChanged = (page) => {
        requestStarships(page);
    };
    return(
        <>
            <HomePageButton/>
            <Table columns={starshipsColumns()}
                dataSource={starships}
                pagination={false}
                className={commonStyle.table}
                title={starshipsTitle}
                rowClassName={commonStyle.rows} />
            <Pagination current={currentPage}
                showSizeChanger={false}
                itemRender={paginationRender}
                total={count}
                onChange={onPageChanged}
                className={commonStyle.pagination} />
    </>
    );
}

export default Starships;