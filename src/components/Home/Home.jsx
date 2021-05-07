import { Table } from 'antd';
import React from 'react';
import { homeColumns } from '../../utils/columns';
import { homeTableData, homeTitle } from '../../utils/dataSource';
import s from './Home.module.css';
import commonStyles from '../Components.module.css';

const Home = ({titles, api}) => {
    const title = homeTitle;
    return (
        <Table dataSource={homeTableData(titles, api)}
            columns={homeColumns()}
            pagination={false}
            title={title}
            rowClassName={s.rows}
            className={commonStyles.table} />
    );
}

export default Home;