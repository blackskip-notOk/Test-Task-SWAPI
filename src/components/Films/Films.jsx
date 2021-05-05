import { Button, Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Films.module.css';

const Films = ({films}) => {
        const columns = [
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Эпизод',
            dataIndex: "episode_id",
            key: 'episode_id',
        },
        {
            title: 'Начальные титры',
            dataIndex: 'opening_crawl',
            key: 'opening_crawl',
        },
        {
            title: 'Режиссер',
            dataIndex: 'director',
            key: 'director',
        },
        {
            title: 'Продюссер',
            dataIndex: 'producer',
            key: 'producere',
        },
        {
            title: 'Дата выхода',
            dataIndex: 'release_date',
            key: 'release_datey',
        },
        {
            title: 'Создан',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Отредактирован',
            dataIndex: 'edited',
            key: 'editer',
        },
        {
            title: 'URL',
            dataIndex: 'url',
            key: 'url',
        }
    ];
    const dataSource = films;
    return(
        <>
            <Button htmlType='button'
                shape='circle'
                size='large'
                type='link'>
                <NavLink to='/'>
                    Перейти на домашнюю страницу
                </NavLink>
            </Button>
            <Table columns={columns}
                dataSource={dataSource}
                pagination={false} />
    </>
    );
}

export default Films;