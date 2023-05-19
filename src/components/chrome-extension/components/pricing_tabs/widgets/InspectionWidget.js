import React from 'react';
import Accordion from '../../Accordion';
import '../../../ChromeExtension.css';

const InspectionWidget = () => {

    return(
        <>
            <div className="mx-4 mb-4">
                <Accordion title="Inspection" content={
                    <>
                        <p className="text-14 selected">Carketa Inspection</p>
                        <p className="text-14 selected">Appraisal Inspection</p>
                        <p className="text-14 selected">NIADA CPO Inspection</p>
                    </>
                } />
            </div>
        </>
    );
}

export default InspectionWidget;