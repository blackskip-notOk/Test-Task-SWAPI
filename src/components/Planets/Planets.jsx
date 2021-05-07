import { Pagination, Table } from 'antd';
import React from 'react';
import { planetsColumn } from '../../utils/columns';
import { planetsTitle } from '../../utils/dataSource';
import { paginationRender } from '../../utils/pagination';
import HomePageButton from '../Common/HomePageButton/HomePageButton';
import commonStyle from '../Components.module.css';

const Planets = ({currentPage, requestPlanets, planets, count,
    isVisible, getFiltredData, toggleIsVisible}) => {
    const onPageChanged = (page) => {
        requestPlanets(page);
    };
    return(
        <>
            <HomePageButton />
            <Table columns={planetsColumn(planets, isVisible,
                getFiltredData, requestPlanets, currentPage,
                toggleIsVisible)}
                dataSource={planets}
                pagination={false}
                className={commonStyle.table}
                title={planetsTitle}
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

export default Planets;