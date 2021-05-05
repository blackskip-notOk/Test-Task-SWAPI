import { Button, Pagination, Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Species.module.css';

const Species = ({currentPage, requestSpecies, species, count}) => {
        const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '',
            dataIndex: 'classification',
            key: 'classification',
        },
        {
            title: '',
            dataIndex: 'designation',
            key: 'designation',
        },
        {
            title: '',
            dataIndex: 'average_height',
            key: 'average_height',
        },
        {
            title: '',
            dataIndex: 'skin_colors',
            key: 'skin_colors',
        },
        {
            title: '',
            dataIndex: 'hair_colors',
            key: 'hair_colors',
        },
        {
            title: '',
            dataIndex: 'eye_colors',
            key: 'eye_colors',
        },
        {
            title: '',
            dataIndex: 'average_lifespan',
            key: 'average_lifespan',
        },
        {
            title: '',
            dataIndex: 'homeworld',
            key: 'homeworld',
        },
        {
            title: '',
            dataIndex: 'language',
            key: 'language',
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
    const dataSource = species;

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
        requestSpecies(page);
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

export default Species;