import { Button, Table } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Home.module.css';

const Home = ({titles, api}) => {
    const columns = [
        {
            title: 'Номер',
            dataIndex: 'number',
            key: 'number',
            align: 'center',
            className: `${s.numberColumn}`,
            render: text => <span>{text}</span>
        },
        {
            title: 'Название',
            dataIndex: 'notation',
            key: 'notation',
            align: 'center',
            className: `${s.notationColumn}`,
            render: text => <span>{text}</span>
        },
        {
            title: 'АПИ',
            dataIndex: 'api',
            key: 'api',
            align: 'center',
            className: `${s.notationColumn}`,
            render: text => <a href={text} target='_blanc'>{text}</a>
        },
        {
            title: '',
            dataIndex: 'move',
            key: 'move',
            align: 'center',
            className: `${s.notationColumn}`,
        }
    ];

    const dataSource = [
        {
            key: '1',
            number: 1,
            notation: titles[0],
            api: api[0],
            move: <Button type='primary' shape='round'
                size='large' ghost>
                    <NavLink to='/people/' className={s.navlink}
                        activeClassName={s.activeNavlink}>
                        Открыть страницу
                    </NavLink>
                </Button>
        },
        {
            key: '2',
            number: 2,
            notation: titles[1],
            api: api[1],
            move: <Button type='primary' shape='round'
                size='large' ghost>
                <NavLink to='/planets/' className={s.navlink}
                    activeClassName={s.activeNavlink}>
                    Открыть страницу
                </NavLink>
            </Button>
        },
        {
            key: '3',
            number: 3,
            notation: titles[2],
            api: api[2],
            move: <Button type='primary' shape='round'
                size='large' ghost>
                <NavLink to='/films/' className={s.navlink}
                    activeClassName={s.activeNavlink}>
                    Открыть страницу
                </NavLink>
            </Button>
        },
        {
            key: '4',
            number: 4,
            notation: titles[3],
            api: api[3],
            move: <Button type='primary' shape='round'
            size='large' ghost>
                <NavLink to='/species/' className={s.navlink}
                    activeClassName={s.activeNavlink}>
                    Открыть страницу
                </NavLink>
            </Button>
        },
        {
            key: '5',
            number: 5,
            notation: titles[4],
            api: api[4],
            move: <Button type='primary' shape='round'
            size='large' ghost>
                <NavLink to='/vehicles/' className={s.navlink}
                    activeClassName={s.activeNavlink}>
                    Открыть страницу
                </NavLink>
            </Button>
        },
        {
            key: '6',
            number: 6,
            notation: titles[5],
            api: api[5],
            move: <Button type='primary' shape='round'
            size='large' ghost>
                <NavLink to='/starships/' className={s.navlink}
                    activeClassName={s.activeNavlink}>
                    Открыть страницу
                </NavLink>
            </Button>
        },
      ];

    return (
            <Table bordered={true}
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                rowClassName={s.rows}
                className={s.table} />
    );
}

export default Home;