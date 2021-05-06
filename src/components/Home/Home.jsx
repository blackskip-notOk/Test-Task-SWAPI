import { Table } from 'antd';
import React from 'react';
import { homeColumns } from '../../utils/columns';
import { homeTableData, homeTitle } from '../../utils/dataSource';
import s from './Home.module.css';

const Home = ({titles, api}) => {
    const columns = homeColumns();
    const dataSource = homeTableData(titles, api);
    const title = homeTitle;
    return (
        <Table dataSource={dataSource}
            columns={columns}
            pagination={false}
            title={title}
            rowClassName={s.rows}
            className={s.table} />
    );
}

export default Home;