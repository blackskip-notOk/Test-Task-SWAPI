import { Pagination, Table } from 'antd';
import React from 'react';
import { speciesColumns } from '../../utils/columns';
import { paginationRender } from '../../utils/pagination';
import HomePageButton from '../Common/HomePageButton/HomePageButton';
import commonStyle from '../Components.module.css';
import { speciesTitle } from '../../utils/dataSource';

const Species = ({currentPage, requestSpecies, species, count}) => {
    const onPageChanged = (page) => {
        requestSpecies(page);
    };
    return(
        <>
            <HomePageButton />
            <Table columns={speciesColumns()}
                dataSource={species}
                pagination={false}
                className={commonStyle.table}
                title={speciesTitle}
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

export default Species;