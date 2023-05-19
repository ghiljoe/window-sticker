import React from "react";
import checkIcon from '../assets/icons/check.svg';
import '../ChromeExtension.css';

const Recon = () => {

    const fixedOrReplacedItems = [
        {
            name: 'Passenger Back Tire',
            detail: 'Replaced Tire',
        },
        {
            name: 'Driver Front Tire',
            detail: 'Replaced Tire',
        },
        {
            name: 'Passenger Front Tire',
            detail: 'Replaced Tire',
        },
        {
            name: 'Front Passenger Door',
            detail: 'Repair and Repainted',
        },
        {
            name: 'Driver Back Tire',
            detail: 'Replaced Tire',
        },
        {
            name: 'Front Bumper',
            detail: 'Fixed',
        },

    ];

    const fixedOrReplacedItemsWidget = () => {
        return (
            <>
                {
                    fixedOrReplacedItems.length !== 0 ? fixedOrReplacedItems.map((fixedOrReplacedItem) => {
                        return (
                            <div key={fixedOrReplacedItem.name} className="flex justify-start mb-1">
                                <p className="text-xs w-44 gray-400">{fixedOrReplacedItem.name}: </p>
                                <div className="flex">
                                    <img className="mr-2 " src={checkIcon} alt="" /> <span className="text-xs gray-500"> {fixedOrReplacedItem.detail}</span>
                                </div>
                            </div>
                        );
                    }) : <p className="text-xs gray-500 ">N/A</p>
                }
            </>
        );
    }

    const linearRatingBar = (percent)=> {
        return (
          <div className="flex mt-2">
            <div className="w-full h-3.5 mb-3 bg-green-80 rounded-full">
              <div className="bg-green h-3.5 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
          </div>
        );
      }

    return (
        <>
            <section className="mx-4 rounded shadow-md">
                <div className="rounded-t h-10 items-center flex bg-gray-300 mb-1">
                    <p className="ml-6 gray-400 font-medium" >FIXED OR REPLACED ITEMS</p>
                </div>
                <div className="py-2 ml-6">
                    {fixedOrReplacedItemsWidget()}
                </div>
            </section>
            <div className="mb-4" />
            <section className="mx-4 rounded shadow-md">
                <div className="rounded-t h-10 items-center flex bg-gray-300">
                    <p className="ml-6 gray-400 font-medium" >RECONDITIONING EXPENSES</p>
                </div>
                <div className="h-10 flex items-center">
                    <p className="ml-6 text-14 gray-500">Overall: <span className="selected">$1,200.00</span></p>
                </div>
            </section>
            <div className="mb-4" />
            <section className="mx-4 rounded shadow-md">
                <div className="rounded-t h-10 items-center flex bg-gray-300">
                    <p className="ml-6 gray-400 font-medium" >WORKFLOW PROGRESS</p>
                </div>
                <div className="p-2">
                    <div className="p-2 rounded shadow-md px-4">
                        <div className="flex justify-start mb-1">
                            <p className="text-xs w-44 gray-400">Workflow: </p>
                            <span className="text-xs selected"> Action Recon Process</span>
                        </div>
                        <div className="flex justify-start mb-1">
                            <p className="text-xs w-44 gray-400">Current Step: </p>
                            <span className="text-xs selected"> Mechanic</span>
                        </div>
                        <div className="flex justify-between mt-4">
                            <p className="text-xs w-44 gray-400">Completion Percentage </p>
                            <span className="text-xs"> 5%</span>
                        </div>
                        {linearRatingBar(5)}
                    </div>
                </div>
                <div className="p-2">
                    <div className="p-2 rounded shadow-md px-4">
                        <div className="flex justify-start mb-1">
                            <p className="text-xs w-44 gray-400">Workflow: </p>
                            <span className="text-xs selected"> Carketa Best Practice</span>
                        </div>
                        <div className="flex justify-start mb-1">
                            <p className="text-xs w-44 gray-400">Current Step: </p>
                            <span className="text-xs selected"> Body Work</span>
                        </div>
                        <div className="flex justify-between mt-4">
                            <p className="text-xs w-44 gray-400">Completion Percentage </p>
                            <span className="text-xs"> 50%</span>
                        </div>
                        {linearRatingBar(50)}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Recon;