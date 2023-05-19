import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import closeIcon from '../../../chrome-extension/assets/icons/close.svg';
import sampleWhiteCarImg from '../../../chrome-extension/assets/images/sample_white_car.jpg';
import pinIcon from '../../../chrome-extension/assets/icons/pin.svg';
import newTabIcon from '../../../chrome-extension/assets/icons/new_tab.svg';
import '../../ChromeExtension.css';

export default function LiveLocalMarketDialog(props) {

    const { isOpen, onClose, data } = props;

    const tableData = [
        {
            id: 1,
            date: '1/21/23',
            price: '$35,995',

        },
        {
            id: 2,
            date: '1/26/23',
            midPrice: '-$995',
            price: '$35,000',

        },
        {
            id: 3,
            date: '2/3/23',
            midPrice: '-$1,000',
            price: '$34,000',

        },
        {
            id: 4,
            date: '2/10/23',
            midPrice: '-$1,000',
            price: '$32,000',

        },
        {
            id: 5,
            date: '2/13/23',
            midPrice: '-$1,005',
            price: '$30,995',

        },
    ];
    const table = () => {
        return (
            <>
                {
                    tableData.map(({ id , date, price, midPrice}) => {
                        return (
                            <div key={id}>
                                <div className="border-t my-  border-gray-300 w-full " />
                                <div className="flex justify-between my-1">
                                    <p className="text-14 gray-500">{date}</p>
                                    <p className="text-14 text-red-500">{midPrice}</p>
                                    <p className="text-14 gray-400">{price}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );

    }

    return (
        <div>
            <Dialog
                fullScreen
                open={isOpen}
                onClose={() => onClose(false)}
                sx={{ mt: '80px' }}
            >
                <div className="flex justify-between h-14 items-center mt-4 mx-4 rounded-full">
                    <h1 className="text-xl">Live Local Market</h1>
                    <img onClick={() => onClose(false)} src={closeIcon} alt="" className="cursor-pointer" />
                </div>
                <div className="px-4 max-h-screen overflow-y-auto h-full mt-6">
                    <img className="mb-6" src={sampleWhiteCarImg} alt="" />
                    <h2 className="text-16 font-medium">Mark Miller Toyota</h2>
                    <p className="text-14 gray-500">Salt Lake City, UT - 983 miles away</p>
                    <div className="flex items-center">
                        <img src={pinIcon} alt="" />
                        <p className="text-14 gray-500">Live Local Market: </p>
                        <p className="text-14 gray-500 font-semibold">On the lot</p>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <p className="text-14 gray-400 mr-1">View listing on dealer website </p>
                        <img className="h-4" src={newTabIcon} alt="" />
                    </div>
                    <div className="border-t my-3  border-gray-300 w-full " />
                    <h2 className="text-14 font-medium">2022 Toyota Camry</h2>
                    <p className="text-14 gray-500">90D</p>
                    <p className="text-14 gray-500">24,649 miles</p>
                    <p className="text-14 gray-500">Premium Sedan Premium Unleaded</p>
                    <p className="text-14 gray-500">White Exterior</p>
                    <p className="text-14 gray-500">Black Exterior</p>

                    <h2 className="text-14 font-medium mt-4">Asking price $30,995</h2>
                    <h2 className="text-14 font-medium mb-2">5 price changes</h2>
                    {table()}
                    <div className="mb-10"/>
                </div>
            </Dialog>
        </div>
    );
}