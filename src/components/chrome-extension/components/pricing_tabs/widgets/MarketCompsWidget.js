import React from 'react';
import Table from '../../Table';
import Accordion from '../../Accordion';
import '../../../ChromeExtension.css';

const MarketCompsWidget = () => {

    return(
        <>
            <div className="mx-4 mb-4">
                <Accordion title="Market Comps" content={
                    <>
                        <div className="mb-4">
                            <input step={1} min={0} max={100} type="range" className="w-full h-1 mt-4 bg-green-300 accent-green-400 rounded-lg appearance-none cursor-pointer range-sm " />
                        </div>
                        <Table />
                    </>
                } isMarketComps/>
            </div>
        </>
    );
}

export default MarketCompsWidget;