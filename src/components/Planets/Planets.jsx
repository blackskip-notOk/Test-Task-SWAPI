import { Button, Pagination, Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Planets.module.css';

const Planets = ({currentPage, requestPlanets, planets, count}) => {
        const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            // key: 'name',
            className: `${s.nameColumn}`,
        },
        {
            title: 'Период вращения',
            dataIndex: "rotation_period",
            // key: 'rotation_period',
            filters: [
                {text: '12', value: '12'},
                {text: '18', value: '18'},
                {text: '23', value: '23'},
                {text: '24', value: '24'},
                {text: '26', value: '26'}
            ],
            onFilter: (value, record) => record.rotation_period.indexOf(value) === 0,
        },
        {
            title: 'Орбитальный период',
            dataIndex: 'orbital_period',
            // key: 'orbital_period',
        },
        {
            title: 'Диаметр',
            dataIndex: 'diameter',
            // key: 'diameter',
        },
        {
            title: 'Климат',
            dataIndex: 'climate',
            // key: 'climate',
            filters: [
                {text: 'arid', value: 'arid'},
                {text: 'temperate', value: 'temperate'},
                {text: 'tropical', value: 'tropical'},
                {text: 'frozen', value: 'frozen'},
                {text: 'murky', value: 'murky'},
                {text: 'windy', value: 'windy'},
                {text: 'hot', value: 'hot'},
                {text: 'artificial', value: 'artificial'},
                {text: 'frigid', value: 'frigid'},
                {text: 'humid', value: 'humid'},
                {text: 'moist', value: 'moist'},
                {text: 'polluted', value: 'polluted'},
                {text: 'unknown', value: 'unknow'},
                {text: 'superheated', value: 'superheated'},
                {text: 'tropical', value: 'tropical'},
                {text: 'subartic', value: 'subartic'},
                {text: 'rocky', value: 'rocky'},
                {text: 'rocky', value: 'rocky'},

            ],
            onFilter: (value, record) => record.climate.indexOf(value) === 0,
        },
        {
            title: 'Гравитация',
            dataIndex: 'gravity',
            // key: 'gravity',
            filters: [
                {text: '1 standard', value: '1 standart'},
                {text: '1.1 standard', value: '1.1 standart'},
                {text: 'N/A', value: 'N/A'},
                {text: '1.5 (surface), 1 standard (Cloud City)', value: '1.5 (surface), 1 standard (Cloud City)'},
                {text: '0.85 standard', value: '0.85 standart'},
                {text: '0.9 standard', value: '0.9 standart'},
                {text: '0.56 standard', value: '0.56 standart'},
                {text: '0.75 standard', value: '0.75 standart'},
                {text: 'unknown', value: 'unknown'},
                {text: '0.62 standard', value: '0.62 standart'},
                {text: '1.56', value: '1.56'},
                {text: '0.98', value: '0.98'},
                {text: '0.62 standard', value: '0.62 standart'},
            ],
            onFilter: (value, record) => record.gravity.indexOf(value) === 0,
        },
        {
            title: 'Местность',
            dataIndex: 'terrain',
            // key: 'terrain',
        },
        {
            title: 'Поверхность воды',
            dataIndex: 'surface_water',
            // key: 'surface_water',
        },
        {
            title: 'Популяция',
            dataIndex: 'population',
            // key: 'population',
        },
        {
            title: 'Резиденты',
            dataIndex: 'residents',
            // key: 'residents',
        },
        {
            title: 'Фильмы',
            dataIndex: 'films',
            // key: 'films',
        },
        {
            title: 'Создан',
            dataIndex: 'created',
            // key: 'created',
        },
        {
            title: 'Отредактирован',
            dataIndex: 'edited',
            // key: 'editer',
        },
        {
            title: 'URL',
            dataIndex: 'url',
            // key: 'url',
        }
    ];
    const dataSource = planets;

    function itemRender(page, type, originalElement) {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      }
    const onPageChanged = (page) => {
        requestPlanets(page);
    };
    const onChange = (filters, extra) => {
        console.log(filters, extra);
    }
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
                onChange={onChange}
                pagination={false} />
            <Pagination current={currentPage}
                size='small'
                showSizeChanger={false}
                itemRender={itemRender}
                total={count}
                onChange={onPageChanged} />
    </>
    );
}

export default Planets;