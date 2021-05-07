import React from 'react';
import homeStyle from '../components/Home/Home.module.css';
import peopleStyle from '../components/People/People.module.css';

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
};

export const peopleColumns = () => {
    return (
        [
            {
                title: <h2 className={peopleStyle.tableTh}>Имя</h2>,
                dataIndex: 'name',
                key: 'name',
                align: 'center',
                className: peopleStyle.nameColumn,
                render: text => <div className={peopleStyle.nameTd}>{text}</div>
            },
            {
                title: <h2 className={peopleStyle.tableTh}>Рост</h2>,
                dataIndex: "height",
                key: 'height',
                className: peopleStyle.heightColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>Вес</h2>,
                dataIndex: 'mass',
                key: 'mass',
                className: peopleStyle.massColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>Цвет волос</h2>,
                dataIndex: 'hair_color',
                key: 'hair_color',
                className: peopleStyle.haircolorColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>Цвет кожи</h2>,
                dataIndex: 'skin_color',
                key: 'skin_color',
                className: peopleStyle.skincolorColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>Цвет глаз</h2>,
                dataIndex: 'eye_color',
                key: 'eye_color',
                className: peopleStyle.eyecolorColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>Год рождения</h2>,
                dataIndex: 'birth_year',
                key: 'birth_year',
                className: peopleStyle.birthyearColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>пол</h2>,
                dataIndex: 'gender',
                key: 'gender',
                className: peopleStyle.genderColumn,
                render: text => <div className={peopleStyle.genderTd}>{text}</div>
            },
            {
                title: <h2 className={peopleStyle.tableTh}>родной мир</h2>,
                dataIndex: 'homeworld',
                key: 'home_world',
                className: peopleStyle.homeworldColumn,
                render: text => <div className={peopleStyle.homeworldTd}><a href={text} target='_blanc' className={peopleStyle.apiLink}>{text}</a></div>
            },
            {
                title: <h2 className={peopleStyle.tableTh}>фильмы</h2>,
                dataIndex: 'films',
                key: 'films',
                className: peopleStyle.filmsColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.filmsTd}><a href={t} target='_blanc' className={peopleStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={peopleStyle.tableTh}>вид</h2>,
                dataIndex: 'species',
                key: 'species',
                className: peopleStyle.speciesColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.speciesTd}><a href={t} target='_blanc' className={peopleStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={peopleStyle.tableTh}>транспорт</h2>,
                dataIndex: 'vehicles',
                key: 'vehicles',
                className: peopleStyle.vehiclesColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.vehiclesTd}><a href={t} target='_blanc' className={peopleStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={peopleStyle.tableTh}>космические корабли</h2>,
                dataIndex: 'starships',
                key: 'starships',
                className: peopleStyle.starshipsColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.starshipsTd}><a href={t} target='_blanc' className={peopleStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={peopleStyle.tableTh}>создан</h2>,
                dataIndex: 'created',
                key: 'created',
                className: peopleStyle.createdColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>отредактирован</h2>,
                dataIndex: 'edited',
                key: 'editer',
                className: peopleStyle.editedColumn,
            },
            {
                title: <h2 className={peopleStyle.tableTh}>url</h2>,
                dataIndex: 'url',
                key: 'url',
                className: peopleStyle.urlColumn,
                render: text => <div className={peopleStyle.urlTd}><a href={text} target='_blanc' className={peopleStyle.apiLink}>{text}</a></div>
            }
        ]
    );
}