import { Pagination, Table } from 'antd';
import React from 'react';
import { vehiclesColumn } from '../../utils/columns';
import commonStyle from '../Components.module.css';
import HomePageButton from '../Common/HomePageButton/HomePageButton';
import { paginationRender } from '../../utils/pagination';
import { vehiclesTitle } from '../../utils/dataSource';

const Vehicles = ({currentPage, requestVehicles, vehicles, count}) => {
    const onPageChanged = (page) => {
        requestVehicles(page);
    };
    return(
        <>
            <HomePageButton />
            <Table columns={vehiclesColumn()}
                dataSource={vehicles}
                pagination={false}
                className={commonStyle.table}
                title={vehiclesTitle}
                rowClassName={commonStyle.rows}
                />
            <Pagination current={currentPage}
                showSizeChanger={false}
                itemRender={paginationRender}
                total={count}
                onChange={onPageChanged}
                className={commonStyle.pagination} />
    </>
    );
}

export default Vehicles;