import React from 'react';
import Chart from '../../Chart';
import Accordion from '../../Accordion';
import '../../../ChromeExtension.css';

const NationalAskingPriceHistoryWidget = () => {

    return(
        <>
            <div className="mx-4 mb-4">
                <Accordion title="National Asking Price History" content={
                    <div className="pt-2">
                        <Chart />
                    </div>
                } />
            </div>
        </>
    );
}

export default NationalAskingPriceHistoryWidget;