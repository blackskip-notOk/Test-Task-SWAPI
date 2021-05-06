import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import homeStyle from '../components/Home/Home.module.css';

export const homeTableData = (titles, api) => {
    return (
        [
            {
                key: '1',
                number: 1,
                notation: titles[0],
                api: api[0],
                move: <Button className={homeStyle.button}>
                    <NavLink to='/people/' className={homeStyle.navlink}>
                        Открыть страницу
                    </NavLink>
                </Button>
            },
            {
                key: '2',
                number: 2,
                notation: titles[1],
                api: api[1],
                move: <Button className={homeStyle.button}>
                    <NavLink to='/planets/' className={homeStyle.navlink}>
                        Открыть страницу
                    </NavLink>
                </Button>
            },
            {
                key: '3',
                number: 3,
                notation: titles[2],
                api: api[2],
                move: <Button className={homeStyle.button}>
                    <NavLink to='/films/' className={homeStyle.navlink}>
                        Открыть страницу
                    </NavLink>
                </Button>
            },
            {
                key: '4',
                number: 4,
                notation: titles[3],
                api: api[3],
                move: <Button className={homeStyle.button}>
                    <NavLink to='/species/' className={homeStyle.navlink}>
                        Открыть страницу
                    </NavLink>
                </Button>
            },
            {
                key: '5',
                number: 5,
                notation: titles[4],
                api: api[4],
                move: <Button className={homeStyle.button}>
                    <NavLink to='/vehicles/' className={homeStyle.navlink}>
                        Открыть страницу
                    </NavLink>
                </Button>
            },
            {
                key: '6',
                number: 6,
                notation: titles[5],
                api: api[5],
                move: <Button className={homeStyle.button}>
                    <NavLink to='/starships/' className={homeStyle.navlink}>
                        Открыть страницу
                    </NavLink>
                </Button>
            },
        ]
    );
};

export const homeTitle = () => <h2 className={homeStyle.tableTitle}>Домашняя страница</h2>;