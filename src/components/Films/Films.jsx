import { Table } from 'antd';
import React from 'react';
import { filmsColumns } from '../../utils/columns';
import { filmsTitle } from '../../utils/dataSource';
import HomePageButton from '../Common/HomePageButton/HomePageButton';
import commonStyle from '../Components.module.css';

const Films = ({films}) => {
    return(
        <>
            <HomePageButton />
            <Table columns={filmsColumns()}
                dataSource={films}
                pagination={false}
                className={commonStyle.table}
                title={filmsTitle}
                rowClassName={commonStyle.rows}
                />
    </>
    );
}

export default Films;