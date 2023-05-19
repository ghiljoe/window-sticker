import React from 'react';
import VehicleInfo from '../../components/pricing_tabs/components/VehicleInfo';
import Accordion from '../Accordion';
import sendIcon from '../../assets/icons/send.svg';

const CommentsTab = () => {
    return (
        <>
            <VehicleInfo />
            <div className="mb-4" />
            <div className="mx-4">
                <Accordion title="Comments" content={
                    <div className="rounded bg-gray-200  bg-white h-full">
                            <div className="h-96 bg-gray-200 rounded-lg shadow-lg p-4">
                                <div className="h-72 overflow-y-scroll flex flex-col space-y-2">
                                    <div className="flex justify-end items-start space-x-2">
                                        <div className="bg-green-400 shadow-sm rounded-lg p-2 text-white self-end">
                                            <p>How can we help? We're here for you!</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start space-x-2">
                                        <img src="https://picsum.photos/50" alt="Sender Avatar" className="w-10 h-10 rounded-full" />
                                        <div className="bg-white shadow-sm rounded-lg p-2">
                                            <p>Hey John, I am looking for the best admin template. Could you please help me to find it out?</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start space-x-2">
                                        <img src="https://picsum.photos/50" alt="Sender Avatar" className="w-10 h-10 rounded-full" />
                                        <div className="bg-white shadow-sm rounded-lg p-2">
                                            <p>It should be MUI v5 compatible.</p>
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-end items-start space-x-2">
                                        <div className="bg-blue-500 shadow-sm rounded-lg p-2 text-white self-end">
                                            <p>No, that's all for now. Thanks!</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="flex justify-end items-start space-x-2">
                                        <div className="bg-blue-500 shadow-md rounded-lg p-2 text-white self-end">
                                            <p>No, that's all for now. Thanks!</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-start space-x-2">
                                        <div className="bg-blue-500 shadow-md rounded-lg p-2 text-white self-end">
                                            <p>No, that's all for now. Thanks!</p>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="flex justify-end items-start mt-2">
                                    <div className="flex-1">
                                        <input type="text" className="w-full border rounded-md p-2" placeholder="Type your message here..." />
                                    </div>
                                    <button className="bg-green-500 rounded-md text-white px-4 py-2 ml-2">
                                        <img src={sendIcon} alt=""/>
                                    </button>
                                </div>
                            </div>
                    </div>
                } />
            </div>
        </>
    );
}

export default CommentsTab;


