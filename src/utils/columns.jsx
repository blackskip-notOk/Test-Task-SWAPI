import React from 'react';
import homeStyle from '../components/Home/Home.module.css';

export const homeColumns = () => {
    return (
        [
            {
                title: <h2 className={homeStyle.tableTh}>Номер</h2>,
                dataIndex: 'number',
                key: 'number',
                className: homeStyle.numberColumn
            },
            {
                title: <h2 className={homeStyle.tableTh}>Название</h2>,
                dataIndex: 'notation',
                key: 'notation',
                className: homeStyle.notationColumn,
                align: 'center',
            },
            {
                title: <h2 className={homeStyle.tableTh}>АПИ</h2>,
                dataIndex: 'api',
                key: 'api',
                className: homeStyle.apiColumn,
                render: text => <a href={text} target='_blanc' className={homeStyle.apiLink}>{text}</a>
            },
            {
                title: <h2 className={homeStyle.tableTh}> </h2>,
                dataIndex: 'move',
                key: 'move',
                className: homeStyle.buttonColumn
            }
        ]
    );
}