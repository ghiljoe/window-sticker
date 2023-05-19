import React from 'react';
import Accordion from '../../Accordion';
import Carfax from '../../Carfax';
import '../../../ChromeExtension.css';

const CarfaxWidget = () => {

    return (
        <>
            <div className="mx-4 mb-4">
                <Accordion title="CARFAX™" content={
                    <Carfax />
                } />
            </div>
        </>
    );
}

export default CarfaxWidget;