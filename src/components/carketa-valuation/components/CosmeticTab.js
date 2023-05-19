import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import SchematicImg from '../assets/images/schematic.png';
import CosmeticTable from './Table';

const CosmeticTab = () => {
    const [selectedMenu, setSelectedMenu] = useState('front');
    return (
        <>
            <div className="flex justify-center rounded-md" role="group">
                <ButtonGroup  size="small" variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => setSelectedMenu('front')} style={{ borderColor: 'lightGray', color: 'black' , backgroundColor: selectedMenu === 'front' ? 'lightGray' : 'white'}}>FRONT</Button>
                    <Button onClick={() => setSelectedMenu('back')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'back' ? 'lightGray' : 'white'}}>BACK</Button>
                    <Button onClick={() => setSelectedMenu('left')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'left' ? 'lightGray' : 'white'}}>LEFT</Button>
                    <Button onClick={() => setSelectedMenu('right')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'right' ? 'lightGray' : 'white'}}>RIGHT</Button>
                    <Button onClick={() => setSelectedMenu('top')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'top' ? 'lightGray' : 'white'}}>TOP</Button>
                    <Button onClick={() => setSelectedMenu('interior')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'interior' ? 'lightGray' : 'white'}}>INTERIOR</Button>
                </ButtonGroup>
            </div>
            <div className="mb-5" />
            <div className="flex justify-center">
                <img src={SchematicImg} alt="" />
            </div>
            <div className="mb-5" />
            <CosmeticTable title="LINE ITEMS" rows={[
                {
                    id: 1,
                    name: 'Hood scratch',
                    isPassed: false,
                    isFixed: true,
                },
            ]} />
            <div className="mb-20"/>
        </>
    );
}

export default CosmeticTab;