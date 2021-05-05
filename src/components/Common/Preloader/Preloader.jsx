import React from 'react';
import preloader from '../../../image/preloader/appLoader.gif';

const Preloader = (props) => {
    return (
        <div className={props.className}>
            <img src={preloader} alt='preloader' className={props.imgClass} />
        </div>
    )
}

export default Preloader;