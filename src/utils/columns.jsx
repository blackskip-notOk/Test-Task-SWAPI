import React from 'react';
import homeStyle from '../components/Home/Home.module.css';
import peopleStyle from '../components/People/People.module.css';
import planetsStyle from '../components/Planets/Planets.module.css';
import commonStyle from '../components/Components.module.css';
import filmsStyle from '../components/Films/Films.module.css';
import speciesStyle from '../components/Species/Species.module.css';
import vehiclesStyle from '../components/Vehicles/Vehicles.module.css';
import starshipsStyle from '../components/Starships/Starships.module.css';
import Filter from '../components/Common/Filter/Filter';

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
                title: <h2 className={commonStyle.tableTh}>Имя</h2>,
                dataIndex: 'name',
                key: 'name',
                className: peopleStyle.nameColumn,
                render: text => <div className={peopleStyle.nameTd}>{text}</div>
            },
            {
                title: <h2 className={commonStyle.tableTh}>Рост</h2>,
                dataIndex: "height",
                key: 'height',
                className: peopleStyle.heightColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Вес</h2>,
                dataIndex: 'mass',
                key: 'mass',
                className: peopleStyle.massColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Цвет волос</h2>,
                dataIndex: 'hair_color',
                key: 'hair_color',
                className: peopleStyle.haircolorColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Цвет кожи</h2>,
                dataIndex: 'skin_color',
                key: 'skin_color',
                className: peopleStyle.skincolorColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Цвет глаз</h2>,
                dataIndex: 'eye_color',
                key: 'eye_color',
                className: peopleStyle.eyecolorColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Год рождения</h2>,
                dataIndex: 'birth_year',
                key: 'birth_year',
                className: peopleStyle.birthyearColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>пол</h2>,
                dataIndex: 'gender',
                key: 'gender',
                className: peopleStyle.genderColumn,
                render: text => <div className={peopleStyle.genderTd}>{text}</div>
            },
            {
                title: <h2 className={commonStyle.tableTh}>родной мир</h2>,
                dataIndex: 'homeworld',
                key: 'home_world',
                className: peopleStyle.homeworldColumn,
                render: text => <div className={peopleStyle.homeworldTd}><a href={text} target='_blanc' className={commonStyle.apiLink}>{text}</a></div>
            },
            {
                title: <h2 className={commonStyle.tableTh}>фильмы</h2>,
                dataIndex: 'films',
                key: 'films',
                className: peopleStyle.filmsColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.filmsTd}><a href={t} target='_blanc' className={commonStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={commonStyle.tableTh}>вид</h2>,
                dataIndex: 'species',
                key: 'species',
                className: peopleStyle.speciesColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.speciesTd}><a href={t} target='_blanc' className={commonStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={commonStyle.tableTh}>транспорт</h2>,
                dataIndex: 'vehicles',
                key: 'vehicles',
                className: peopleStyle.vehiclesColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.vehiclesTd}><a href={t} target='_blanc' className={commonStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={commonStyle.tableTh}>космические корабли</h2>,
                dataIndex: 'starships',
                key: 'starships',
                className: peopleStyle.starshipsColumn,
                render: text => text.map((t, i) => <div key={i} className={peopleStyle.starshipsTd}><a href={t} target='_blanc' className={commonStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={commonStyle.tableTh}>создан</h2>,
                dataIndex: 'created',
                key: 'created',
                className: commonStyle.createdColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>отредактирован</h2>,
                dataIndex: 'edited',
                key: 'editer',
                className: commonStyle.editedColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>url</h2>,
                dataIndex: 'url',
                key: 'url',
                className: commonStyle.urlColumn,
                render: text => <div className={commonStyle.urlTd}><a href={text} target='_blanc' className={commonStyle.apiLink}>{text}</a></div>
            }
        ]
    );
};

export const planetsColumn = (planets, isVisible, getFiltredData,
    requestPlanets, page,  toggleIsVisible) => {
        const onVisibileChange = () => toggleIsVisible(!isVisible);
    return (
        [
            {
                title: <h2 className={commonStyle.tableTh}>Имя</h2>,
                dataIndex: 'name',
                key: 'name',
                className: planetsStyle.nameColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Период вращения
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                    filtredArray='planets'
                                    filtredParam='rotation_period'
                                    getFilteredData={getFiltredData}
                                    requestPlanets={requestPlanets}
                                    page={page} />
                            }
                        </div>,
                dataIndex: "rotation_period",
                key: 'rotation_period',
                className: planetsStyle.rotationColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Орбитальный период
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                    filtredArray='planets'
                                    filtredParam='orbital_period'
                                    isVisible={isVisible}
                                    getFilteredData={getFiltredData}
                                    requestPlanets={requestPlanets}
                                    page={page} />
                            }
                        </div>,
                dataIndex: 'orbital_period',
                key: 'orbital_period',
                className: planetsStyle.orbitalColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Диаметр
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                filtredArray='planets'
                                filtredParam='diameter'
                                isVisible={isVisible}
                                getFilteredData={getFiltredData}
                                requestPlanets={requestPlanets}
                                page={page} />
                            }
                        </div>,
                dataIndex: 'diameter',
                key: 'diameter',
                className: planetsStyle.diameterColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Климат
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                filtredArray='planets'
                                filtredParam='climate'
                                isVisible={isVisible}
                                getFilteredData={getFiltredData}
                                requestPlanets={requestPlanets}
                                page={page} />
                            }
                        </div>,
                dataIndex: 'climate',
                key: 'climate',
                className: planetsStyle.climateColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Гравитация
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                filtredArray='planets'
                                filtredParam='gravity'
                                isVisible={isVisible}
                                getFilteredData={getFiltredData}
                                requestPlanets={requestPlanets}
                                page={page} />
                            }
            </div>,
                dataIndex: 'gravity',
                key: 'gravity',
                className: planetsStyle.gravityColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Местность
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                filtredArray='planets'
                                filtredParam='terrain'
                                isVisible={isVisible}
                                getFilteredData={getFiltredData}
                                requestPlanets={requestPlanets}
                                page={page} />
                            }
                        </div>,
                dataIndex: 'terrain',
                key: 'terrain',
                className: planetsStyle.terrainColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Поверхность воды
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                filtredArray='planets'
                                filtredParam='surface_water'
                                isVisible={isVisible}
                                getFilteredData={getFiltredData}
                                requestPlanets={requestPlanets}
                                page={page} />
                            }
                        </div>,
                dataIndex: 'surface_water',
                key: 'surface_water',
                className: planetsStyle.waterColumn,
            },
            {
                title: <div className={commonStyle.title}>
                            <h2 className={commonStyle.tableTh}>
                                Популяция
                            </h2>
                            <div onClick={onVisibileChange} className={`${'fas fa-filter'} ${commonStyle.filter}`}></div>
                            {isVisible && <Filter array={planets}
                                filtredArray='planets'
                                filtredParam='population'
                                isVisible={isVisible}
                                getFilteredData={getFiltredData}
                                requestPlanets={requestPlanets}
                                page={page} />
                            }
                        </div>,
                dataIndex: 'population',
                key: 'population',
                className: planetsStyle.populationColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Резиденты</h2>,
                dataIndex: 'residents',
                key: 'residents',
                className: planetsStyle.residentsColumn,
                render: text => text.map((t, i) => <div key={i} className={planetsStyle.residentsTd}><a href={t} target='_blanc' className={commonStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={commonStyle.tableTh}>Фильмы</h2>,
                dataIndex: 'films',
                key: 'films',
                className: planetsStyle.filmsColumn,
                render: text => text.map((t, i) => <div key={i} className={planetsStyle.filmsTd}><a href={t} target='_blanc' className={commonStyle.apiLink}>{t}</a></div>)
            },
            {
                title: <h2 className={commonStyle.tableTh}>создан</h2>,
                dataIndex: 'created',
                key: 'created',
                className: commonStyle.createdColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>отредактирован</h2>,
                dataIndex: 'edited',
                key: 'editer',
                className: commonStyle.editedColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>url</h2>,
                dataIndex: 'url',
                key: 'url',
                className: commonStyle.urlColumn,
                render: text => <div className={commonStyle.urlTd}><a href={text} target='_blanc' className={commonStyle.apiLink}>{text}</a></div>
            }
        ]
    );
};

export const onChange = (filters, extra) => {
    console.log(filters, extra);
}

export const filmsColumns = () => {
    return (
        [
            {
                title: <h2 className={commonStyle.tableTh}>Название</h2>,
                dataIndex: 'title',
                key: 'title',
                className: filmsStyle.nameColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Эпизод</h2>,
                dataIndex: "episode_id",
                key: 'episode_id',
                className: filmsStyle.episodeColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Начальные титры</h2>,
                dataIndex: 'opening_crawl',
                key: 'opening_crawl',
                className: filmsStyle.crawlColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Режиссер</h2>,
                dataIndex: 'director',
                key: 'director',
                className: filmsStyle.directorColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Продюссер</h2>,
                dataIndex: 'producer',
                key: 'producere',
                className: filmsStyle.producerColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Дата выхода</h2>,
                dataIndex: 'release_date',
                key: 'release_datey',
                className: filmsStyle.releaseColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>создан</h2>,
                dataIndex: 'created',
                key: 'created',
                className: commonStyle.createdColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>отредактирован</h2>,
                dataIndex: 'edited',
                key: 'editer',
                className: commonStyle.editedColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>url</h2>,
                dataIndex: 'url',
                key: 'url',
                className: commonStyle.urlColumn,
                render: text => <div className={commonStyle.urlTd}><a href={text} target='_blanc' className={commonStyle.apiLink}>{text}</a></div>
            }
        ]
    );
};

export const speciesColumns = () => {
    return (
        [
            {
                title: <h2 className={commonStyle.tableTh}>Название</h2>,
                dataIndex: 'name',
                key: 'name',
                className: speciesStyle.nameColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Классификация</h2>,
                dataIndex: 'classification',
                key: 'classification',
                className: speciesStyle.classColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>обозначение</h2>,
                dataIndex: 'designation',
                key: 'designation',
                className: speciesStyle.designationColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>средний рост</h2>,
                dataIndex: 'average_height',
                key: 'average_height',
                className: speciesStyle.heightColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>цвет кожи</h2>,
                dataIndex: 'skin_colors',
                key: 'skin_colors',
                className: speciesStyle.scinColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>цвет волос</h2>,
                dataIndex: 'hair_colors',
                key: 'hair_colors',
                className: speciesStyle.hairColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>цвет глаз</h2>,
                dataIndex: 'eye_colors',
                key: 'eye_colors',
                className: speciesStyle.eyeColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>средняя продолжительность жизни</h2>,
                dataIndex: 'average_lifespan',
                key: 'average_lifespan',
                className: speciesStyle.lifespanColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>родная планета</h2>,
                dataIndex: 'homeworld',
                key: 'homeworld',
                className: speciesStyle.homeworldColumn,
                render: text => <div className={speciesStyle.homeworldTd}><a href={text} target='_blanc' className={commonStyle.apiLink}>{text}</a></div>
            },
            {
                title: <h2 className={commonStyle.tableTh}>язык</h2>,
                dataIndex: 'language',
                key: 'language',
                className: speciesStyle.languageColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>создан</h2>,
                dataIndex: 'created',
                key: 'created',
                className: commonStyle.createdColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>отредактирован</h2>,
                dataIndex: 'edited',
                key: 'editer',
                className: commonStyle.editedColumn,
            },
        ]
    );
};

export const vehiclesColumn = () => {
    return (
        [
            {
                title: <h2 className={commonStyle.tableTh}>Имя</h2>,
                dataIndex: 'name',
                key: 'name',
                className: vehiclesStyle.nameColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Модель</h2>,
                dataIndex: 'model',
                key: 'model',
                className: vehiclesStyle.modelColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Производство</h2>,
                dataIndex: 'manufacturer',
                key: 'manufacturer',
                className: vehiclesStyle.manufactureColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Цена</h2>,
                dataIndex: 'cost_in_credits',
                key: 'cost_in_credits',
                className: vehiclesStyle.costColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Длина</h2>,
                dataIndex: 'length',
                key: 'length',
                className: vehiclesStyle.lengthColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Максимальная скорость в атмосфере</h2>,
                dataIndex: 'max_atmosphering_speed',
                key: 'max_atmosphering_speed',
                className: vehiclesStyle.speedColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Команда</h2>,
                dataIndex: 'crew',
                key: 'crew',
                className: vehiclesStyle.crewColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Пассажиры</h2>,
                dataIndex: 'passengers',
                key: 'passengers',
                className: vehiclesStyle.passengersColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Грузоподъемность</h2>,
                dataIndex: 'cargo_capacity',
                key: 'cargo_capacity',
                className: vehiclesStyle.cargoColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Расходных материалов</h2>,
                dataIndex: 'consumables',
                key: 'consumables',
                className: vehiclesStyle.consumablesColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Класс транспорта</h2>,
                dataIndex: 'vehicle_class',
                key: 'vehicle_class',
                className: vehiclesStyle.classColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>создан</h2>,
                dataIndex: 'created',
                key: 'created',
                className: commonStyle.createdColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>отредактирован</h2>,
                dataIndex: 'edited',
                key: 'editer',
                className: commonStyle.editedColumn,
            },
        ]
    );
};

export const starshipsColumns = () => {
    return (
        [
            {
                title: <h2 className={commonStyle.tableTh}>Имя</h2>,
                dataIndex: 'name',
                key: 'name',
                className: starshipsStyle.nameColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Модель</h2>,
                dataIndex: 'model',
                key: 'model',
                className: starshipsStyle.modelColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Производство</h2>,
                dataIndex: 'manufacturer',
                key: 'manufacturer',
                className: starshipsStyle.manufactureColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Цена</h2>,
                dataIndex: 'cost_in_credits',
                key: 'cost_in_credits',
                className: starshipsStyle.costColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Длина</h2>,
                dataIndex: 'length',
                key: 'length',
                className: starshipsStyle.lengthColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Максимальная скорость в атмосфере</h2>,
                dataIndex: 'max_atmosphering_speed',
                key: 'max_atmosphering_speed',
                className: starshipsStyle.speedColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Команда</h2>,
                dataIndex: 'crew',
                key: 'crew',
                className: starshipsStyle.crewColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Пассажиры</h2>,
                dataIndex: 'passengers',
                key: 'passengers',
                className: starshipsStyle.passengersColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Грузоподъемность</h2>,
                dataIndex: 'cargo_capacity',
                key: 'cargo_capacity',
                className: starshipsStyle.cargoColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Расходных материалов</h2>,
                dataIndex: 'consumables',
                key: 'consumables',
                className: starshipsStyle.consumablesColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Рейтинг гипердрайва</h2>,
                dataIndex: 'hyperdrive_rating',
                key: 'hyperdrive_rating',
                className: starshipsStyle.hyperdriveColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>MGLT</h2>,
                dataIndex: 'MGLT',
                key: 'MGLT',
                className: starshipsStyle.mgltColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>Класс корабля</h2>,
                dataIndex: 'starship_class',
                key: 'starship_class',
                className: starshipsStyle.classColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>создан</h2>,
                dataIndex: 'created',
                key: 'created',
                className: commonStyle.createdColumn,
            },
            {
                title: <h2 className={commonStyle.tableTh}>отредактирован</h2>,
                dataIndex: 'edited',
                key: 'editer',
                className: commonStyle.editedColumn,
            },
        ]
    );
};