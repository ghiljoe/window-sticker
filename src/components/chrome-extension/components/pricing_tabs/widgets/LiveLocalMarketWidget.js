import React from 'react';
import Accordion from '../../Accordion';
import '../../../ChromeExtension.css';
import { TextField, MenuItem } from '@mui/material';
import infoIcon from '../../../assets/icons/info.svg';

const currencies = [
    {
        value: '500',
    },
    {
        value: '400',
    },
    {
        value: '300',
    },
    {
        value: '200',
    },
];

const LiveLocalMarketWidget = () => {

    const linearRatingBar = (trim, percent, innerBgColor, outerBgColor, textColor, rowsCount) => {
        return (
            <div className="flex mt-2">
                <div className={`flex justify-between w-full relative p-6  rounded ${innerBgColor}`}>
                    <div className={`z-10 text-left absolute top-0 left-0 w-full ml-2 h-full flex flex-col justify-center ${textColor}`}>
                        <p className="font-semibold text-14">{trim}</p>
                        {rowsCount ? <p className="text-12 gray-500">Avg. $20,423 | 74 days</p> : <></>}
                    </div>
                    <div className={`z-10 text-right absolute top-1 right-2 ml-2 h-full flex flex-col ${textColor}`}>
                        {rowsCount ? <div className="flex items-center rounded p-2 bg-gray-900 ">
                            <span className="text-white font-semibold">{rowsCount}</span>
                        </div> : <></>}
                    </div>
                <div className={`text-left h-full absolute top-0 left-0 w-full rounded  ${outerBgColor}`} style={{ width: `${percent}%` }}> </div>

                </div>

            </div>
        );
    }
    
    return (
        <>
            <div className="mx-4 mb-4">
                <Accordion title="Live Local Market" content={
                    <div className="pt-2">
                        <div className="flex justify-between items-center ">
                            <p className="font-medium text-16">2022 Toyota Camry</p>
                            <p className="text-14 gray-500">Feb 9th data</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <TextField
                                size="small"
                                className="w-1/2"
                                id="outlined-select-currency"
                                select
                                label="Radius (mi)"
                                defaultValue="500"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <span className="text-14 gray-500 ml-8">7 vehicles</span>
                        </div>
                        <section className="rounded mt-4">
                            <div className="rounded p-4 bg-gray-200">
                                <p className="gray-400 font-medium text-14" >Summary Values</p>
                                <div className="flex justify-between mt-2">
                                    <div className="w-1/2">
                                        <div className="flex">
                                            <p className="text-12 gray-500 mr-1 mb-1">Mileage adjusted price </p>
                                            <img className="" src={infoIcon} alt="" />
                                        </div>
                                        <p className="text-14 gray-400 font-semibold">$23,000</p>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="flex">
                                            <p className="text-12 gray-500 mr-1 mb-1">Average asking price</p>
                                            <img className="" src={infoIcon} alt="" />
                                        </div>
                                        <p className="text-14 gray-400 font-semibold">$20,875</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="w-1/2">
                                        <div className="flex">
                                            <p className="text-12 gray-500 mr-1 mb-1">Avg mileage</p>
                                            <img className="" src={infoIcon} alt="" />
                                        </div>
                                        <p className="text-14 gray-400 font-semibold">68,862</p>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="flex">
                                            <p className="text-12 gray-500 mr-1 mb-1">Median days on lot</p>
                                            <img className="" src={infoIcon} alt="" />
                                        </div>
                                        <p className="text-14 gray-400 font-semibold">36</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="rounded mt-4">
                            <div className="rounded p-4 bg-gray-200">
                                <p className="gray-400 font-medium text-14 mb-4" >Trims</p>
                                {linearRatingBar('LE', 100, 'bg-gray-300', 'bg-gray-300', '', 534)}
                                {linearRatingBar('L', 60, 'bg-red-300', 'bg-red-400', 'text-white', 0)}
                                {linearRatingBar('SE', 100, 'bg-gray-300', 'bg-gray-300', '', 499)}
                                {linearRatingBar('XLE', 30, 'bg-gray-300', 'bg-gray-300', '', 137)}
                                {linearRatingBar('HYBRID', 10, 'bg-gray-300', 'bg-gray-300', '', 14)}
                                {linearRatingBar('XSE', 70, 'bg-gray-300', 'bg-gray-300', '', 296)}
                            </div>
                        </section>
                    </div>
                } />
            </div>
        </>
    );
}

export default LiveLocalMarketWidget;