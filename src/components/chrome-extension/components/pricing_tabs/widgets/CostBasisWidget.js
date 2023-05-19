import React from 'react';
import Accordion from '../../Accordion';
import '../../../ChromeExtension.css';
import { TextField, InputAdornment } from '@mui/material';

const CostBasisWidget = () => {

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
                <Accordion title="Cost Basis" content={
                    <div className="pt-2">
                        <div className="flex justify-between">
                            {InputBoxWithPrefixText('Unit Cost', '$', 30574)}
                            <div className="mx-2" />
                            {InputBoxWithPrefixText('Unit Cost', '#', 2921)}
                            <div className="mx-2" />
                            {InputBoxWithSuffixText('Adj CTM %', '%', 95)}
                        </div>
                        <p className="font-medium text-14 mt-4">Ranking Notes</p>
                        <div className="bg-green-100 border-l-4 border-green-500 text-gray-700 p-3 mt-3 rounded" role="alert">
                            <span className="font-bold text-12">Price rank:</span><span className="text-12"> <span> Increase by <span className="font-bold">$176</span> to <span className="font-bold">$120,171</span> and stay at price rank <span className="font-bold">5/8</span></span></span>
                        </div>
                    </div>
                } />
            </div>
        </>
    );
}

export default CostBasisWidget;