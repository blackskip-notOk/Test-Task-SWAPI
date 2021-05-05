import { Button, Pagination, Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Starships.module.css';

const Starships = ({currentPage, requestStarships, starships, count}) => {
        const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Модель',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Производство',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
        },
        {
            title: 'Цена',
            dataIndex: 'cost_in_credits',
            key: 'cost_in_credits',
        },
        {
            title: 'Длина',
            dataIndex: 'length',
            key: 'length',
        },
        {
            title: 'Максимальная скорость в атмосфере',
            dataIndex: 'max_atmosphering_speed',
            key: 'max_atmosphering_speed',
        },
        {
            title: 'Команда',
            dataIndex: 'crew',
            key: 'crew',
        },
        {
            title: 'Пассажиры',
            dataIndex: 'passengers',
            key: 'passengers',
        },
        {
            title: 'Грузоподъемность',
            dataIndex: 'cargo_capacity',
            key: 'cargo_capacity',
        },
        {
            title: 'Расходных материалов',
            dataIndex: 'consumables',
            key: 'consumables',
        },
        {
            title: 'Рейтинг гипердрайва',
            dataIndex: 'hyperdrive_rating',
            key: 'hyperdrive_rating',
        },
        {
            title: 'MGLT',
            dataIndex: 'MGLT',
            key: 'MGLT',
        },
        {
            title: 'Класс корабля',
            dataIndex: 'starship_class',
            key: 'starship_class',
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
    ];
    const dataSource = starships;

    function itemRender(page, type, originalElement) {
        if (type === 'prev') {
          return <button>Previous</button>;
        }
        if (type === 'next') {
          return <button>Next</button>;
        }
        return originalElement;
      }
    const onPageChanged = (page) => {
        requestStarships(page);
    };
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
            <Pagination current={currentPage}
                size='small'
                showSizeChanger={false}
                itemRender={itemRender}
                total={count}
                onChange={onPageChanged} />
    </>
    );
}

export default Starships;