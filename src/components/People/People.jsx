import { Button, Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator/Paginator';
import s from './People.module.css';

const People = ({currentPage, portionSize, pageSize,
    requestPeople, people, pages, portionCount}) => {
    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            className: `${s.nameColumn}`,
            render: text => <span>{text}</span>
        },
        {
            title: 'Рост',
            dataIndex: "height",
            key: 'height',
        },
        {
            title: 'Вес',
            dataIndex: 'mass',
            key: 'mass',
        },
        {
            title: 'Цвет волос',
            dataIndex: 'hair_color',
            key: 'hair_color',
        },
        {
            title: 'Цвет кожи',
            dataIndex: 'skin_color',
            key: 'skin_color',
        },
        {
            title: 'Цвет глаз',
            dataIndex: 'eye_color',
            key: 'eye_color',
        },
        {
            title: 'Год рождения',
            dataIndex: 'birth_year',
            key: 'birth_year',
        },
        {
            title: 'Пол',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Родной мир',
            dataIndex: 'homeworld',
            key: 'home_world',
        },
        {
            title: 'Фильмы',
            dataIndex: 'films',
            key: 'films',
        },
        {
            title: 'Вид',
            dataIndex: 'species',
            key: 'species',
        },
        {
            title: 'Транспорт',
            dataIndex: 'vehicles',
            key: 'vehicles',
        },
        {
            title: 'Космические корабли',
            dataIndex: 'starships',
            key: 'starships',
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
    const dataSource = people;

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
            <Paginator currentPage={currentPage}
                    pages={pages}
                    portionCount={portionCount}
                    portionSize={portionSize}
                    requestPeople={requestPeople}
                    pageSize={pageSize} />
    </>
    );
}

export default People;