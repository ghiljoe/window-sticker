import React from 'react';
import defaultVehicleImg from '../assets/images/default_vehicle.jpg';
import uploadPhoto from '../assets/images/upload_photo.png';
import { Button } from '@mui/material';

const VehicleInfo = () => {

    const buttonStyle = {
        borderStyle: 'dashed',
        borderWidth: '1px',
        color: 'gray',
        borderColor: 'gray',
        width: '100%',
        fontSize: '10px'
    };

    return (
        <>
            <section className="flex mx-4">
                <div className="w-30">
                    <img className=" mb-2" src={defaultVehicleImg} alt="" />
                    {/* <img className="w-full" src={uploadPhoto} alt="" /> */}
                    <Button size="small" variant="outlined" style={buttonStyle}>
                        Upload Photos
                    </Button>
                </div>
                <div className="flex-1 ml-6">
                    <p className="text-md mb-1 font-semibold">2022 Toyota Camry</p>
                    <p className="text-14 mb-1 gray-400">VIN: <span className="gray-500">4T1C11BK9NU052544</span></p>
                    <p className="text-14 mb-1 gray-400">SN: <span className="gray-500">L13033</span></p>
                    <p className="text-14 mb-1 gray-400">Mileage: <span className="gray-500">35242 mi</span></p>
                    <p className="text-14 gray-400">OEM Sticker: <span className="selected cursor-pointer">Preview</span></p>
                </div>
            </section>
        </>
    );
}

export default VehicleInfo;