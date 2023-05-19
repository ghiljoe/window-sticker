import React from 'react';
import redWarningIcon from '../assets/icons/red_warning.svg';
import orangeWarningIcon from '../assets/icons/orange_warning.svg';
import checkIcon from '../assets/icons/square_check.svg';

const Table = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs uppercase bg-green-500 text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            PRICE
                        </th>
                        <th scope="col" className="px-2 py-3">
                            <div className="flex items-center">
                                DOM
                        <a><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                MI
                        <a><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                DIST
                        <a><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only"></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b text-black" style={{ backgroundColor: '#56CA0033' }}>
                        <th scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap" >
                            <div className="flex items-center justify-center">
                                <img src={checkIcon} alt="" className="mr-2"/>
                                <span>$23,829</span>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            13
                        </td>
                        <td className="px-6 py-4">
                            20,184
                        </td>
                        <td className="px-6 py-4">
                            $17.27
                        </td>
                        <td className="px-6 py-4">
                            <div class="h-4 w-4 rounded-full bg-blue-500"></div>
                        </td>
                    </tr>
                    <tr className=" border-b text-black" style={{ backgroundColor: '#56CA000D' }}>
                        <th scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                                <img src={orangeWarningIcon} alt="" className="mr-2"/>
                                <span>$23,829</span>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            13
                        </td>
                        <td className="px-6 py-4">
                            20,184
                        </td>
                        <td className="px-6 py-4">
                            $17.27
                        </td>
                        <td className="px-6 py-4">
                            -
                        </td>
                    </tr>
                    <tr className=" border-b text-black" style={{ backgroundColor: '#56CA000D' }}>
                        <th scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                                <img src={redWarningIcon} alt="" className="mr-2"/>
                                <span>$23,829</span>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            13
                        </td>
                        <td className="px-6 py-4">
                            20,184
                        </td>
                        <td className="px-6 py-4">
                            $17.27
                        </td>
                        <td className="px-6 py-4">
                            <div class="h-4 w-4 rounded-full bg-gray-300"></div>
                        </td>
                    </tr>
                    <tr className=" border-b text-black" style={{ backgroundColor: '#56CA000D' }}>
                        <th scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                                <img src={checkIcon} alt="" className="mr-2"/>
                                <span>$23,829</span>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            13
                        </td>
                        <td className="px-6 py-4">
                            20,184
                        </td>
                        <td className="px-6 py-4">
                            $17.27
                        </td>
                        <td className="px-6 py-4">
                            <div class="h-4 w-4 rounded-full bg-green-500"></div>
                        </td>
                    </tr>
                    <tr className=" border-b text-black">
                        <th scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                                <img src={checkIcon} alt="" className="mr-2"/>
                                <span>$23,829</span>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            13
                        </td>
                        <td className="px-6 py-4">
                            20,184
                        </td>
                        <td className="px-6 py-4">
                            $17.27
                        </td>
                        <td className="px-6 py-4">
                            <div class="h-4 w-4 rounded-full bg-red-500"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;