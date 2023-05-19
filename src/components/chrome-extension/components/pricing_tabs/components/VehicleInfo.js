import React from 'react';
import defaultVehicleImg from '../../../assets/images/default_vehicle.jpg';
import '../../../ChromeExtension.css';

const VehicleInfo = () => {

    return (
        <>
            <section className="flex items-center mx-4">
                <div className="w-30">
                    <img className="h-20 mb-2" src={defaultVehicleImg} alt="" />
                </div>
                <div className="flex-1 ml-6">
                    <p className="text-md mb-1 font-semibold">2022 Toyota Camry</p>
                    <p className="text-14 mb-1 gray-400"><span className="gray-500">3N1CN7AP0JL839530 | L13033</span></p>
                </div>
            </section>
        </>
    );
}

export default VehicleInfo;