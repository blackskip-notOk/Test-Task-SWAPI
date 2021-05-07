import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './HomePageButton.module.css';

const HomePageButton = (props) => {
    return (
        <Button htmlType='button' type='link' className={s.homeButton}>
            <NavLink to='/' className={s.homeLink}>
                Перейти на домашнюю страницу
            </NavLink>
        </Button>
    );
}

export default HomePageButton;

