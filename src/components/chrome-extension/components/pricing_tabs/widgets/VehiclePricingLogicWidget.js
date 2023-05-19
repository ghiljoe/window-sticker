import React from 'react';
import Accordion from '../../Accordion';
import '../../../ChromeExtension.css';
import { TextField, InputAdornment } from '@mui/material';
const VehiclePricingLogicWidget = () => {

    const InputBoxWithPrefixText = (label, prefixText, value) => {
        return (
            <TextField
                size="small"
                label={label}
                defaultValue={value}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{prefixText}</InputAdornment>
                }}
            />
        );
    }

    const InputBoxWithSuffixText = (label, suffixText, value) => {
        return (
            <TextField
                size="small"
                label={label}
                defaultValue={value}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{suffixText}</InputAdornment>
                }}
            />
        );
    }

    return(
        <>
            <div className="mx-4 mb-4">
                <Accordion title="Vehicle Pricing Logic" content={
                    <>
                        <div className="flex justify-center ">
                            <div className="py-2 w-1/3 mx-4">
                                <p className="gray-400 text-14 text-center font-semibold mb-2">Avg. Market Price:</p>
                                <p className="text-center text-sm gray-500">$30,705</p>
                            </div>
                            <div className="py-2 w-1/3 mx-4">
                                <p className="gray-400 text-14 text-center font-semibold mb-2">Avg. Days on Market:</p>
                                <p className="text-center text-sm gray-500">87</p>
                            </div>
                            <div className="py-2 w-1/3 mx-4">
                                <p className="gray-400 text-14 text-center font-semibold mb-2">Search Distance:</p>
                                <p className="text-center text-sm gray-500">$30,705</p>
                            </div>
                        </div>
                        <input step={1} min={0} max={100} type="range" className="w-full h-1 mt-4 bg-green-300 accent-green-400 rounded-lg appearance-none cursor-pointer range-sm " />
                        <div className="flex justify-between">
                            <p className="text-sm gray-500">$30,705</p>
                            <p className="text-sm gray-500">$30,705</p>
                        </div>
                        <div className="    border-t mt-6 mb-4 border-gray-300 w-full " />
                        <div className="flex justify-between">
                            {InputBoxWithPrefixText('Retail', '$', 30995)}
                            <div className="mx-2" />
                            {InputBoxWithPrefixText('Rank (of 8)', '#', 5)}
                            <div className="mx-2" />
                            {InputBoxWithSuffixText('Market %', '%', 101)}
                        </div>
                    </>
                } />
            </div>
        </>
    );
}

export default VehiclePricingLogicWidget;