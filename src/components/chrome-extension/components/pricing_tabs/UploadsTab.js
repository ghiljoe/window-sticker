import React from 'react';
import VehicleInfo from '../../components/pricing_tabs/components/VehicleInfo';
import Accordion from '../Accordion';
import DragAndDropFile from './components/DragAndDropFile';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import '../../ChromeExtension.css';

const UploadsTab = () => {
    return (
        <>
            <VehicleInfo />
            <div className="mb-4" />
            <div className="mx-4">
                <Accordion title="Uploads" content={
                    <>
                        <div className="flex justify-between items-center gray-500 mb-1 mt-2">
                            <FormControlLabel control={<Checkbox defaultChecked={false} size="small" />} label="Select" />
                            <p className="text-sm gray-500 cursor-pointer">Remove</p>
                        </div>
                        <div className="cursor-pointer">
                            <DragAndDropFile />
                        </div>
                        <p className="text-14 gray-500 mt-4">No uploads added</p>
                    </>
                } />
            </div>
        </>
    );
}

export default UploadsTab;


