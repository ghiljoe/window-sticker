import React from "react";
import GoogleMapWithMarker from './GoogleMapWithMarker';

import '../ChromeExtension.css';

const Overview = () => {

    const markers = [
        { lat: 40.7608, lng: -111.8910 }, // Salt Lake City
    ];


    return (
        <>
            <section className="mx-4 rounded shadow-md">
                <div className="rounded-t h-10 items-center flex bg-gray-300">
                    <p className="ml-6 gray-400 font-medium" >DAYS IN INVENTORY</p>
                </div>
                <div className="h-10 flex items-center">
                    <p className="ml-6 gray-500">32 Days</p>
                </div>
            </section>
            <div className="mb-4" />
            <section className="mx-4 rounded shadow-md">
                <div className="rounded-t h-10 items-center flex bg-gray-300">
                    <p className="ml-6 gray-400 font-medium" >CURRENT STATUS</p>
                </div>
                <div className="h-10 flex items-center">
                    <p className="ml-6 gray-500">Frontline Ready</p>
                </div>
            </section>
            <div className="mb-4" />
            <section className="mx-4 rounded shadow-md">
                <div className="rounded-t h-10 items-center flex bg-gray-300">
                    <p className="ml-6 gray-400 font-medium" >LAST SCANNED LOCATION VIA GPS TRACKING</p>
                </div>
                <div className="w-full p-4">
                    <GoogleMapWithMarker markers={markers} zoom={12} onMarkerSelect={null} />
                </div>
            </section>
        </>
    );
}

export default Overview;