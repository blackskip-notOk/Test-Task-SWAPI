import React from 'react';
import preloader from '../../../image/preloader/loader.gif';
import s from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt='preloader' className={s.img} />
        </div>
    )
}

export default Preloader;