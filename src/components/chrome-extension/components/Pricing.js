import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PricingTab from '../components/pricing_tabs/PricingTab';
import CommentsTab from '../components/pricing_tabs/CommentsTab';
import UploadsTab from '../components/pricing_tabs/UploadsTab';
import ActivityTab from '../components/pricing_tabs/ActivityTab';

import '../ChromeExtension.css';

const Pricing = () => {
    const [selectedMenu, setSelectedMenu] = useState('pricing');

    const selectedMenuWidget = () => {
        switch (selectedMenu) {
            case 'pricing':
                return (
                    <PricingTab />
                );
            case 'comments':
                return (
                    <CommentsTab />
                );
            case 'uploads':
                return (
                    <UploadsTab />
                );
            case 'activity':
                return (
                    <ActivityTab />
                );
            default:
                return (
                    <PricingTab />
                );
        }
    }

    return (
        <>
            <div className="flex justify-center rounded-md" role="group">
                <ButtonGroup  size="small" variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => setSelectedMenu('pricing')} style={{ borderColor: 'lightGray', color: 'black' , backgroundColor: selectedMenu === 'pricing' ? 'lightGray' : 'white'}}>PRICING</Button>
                    <Button onClick={() => setSelectedMenu('comments')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'comments' ? 'lightGray' : 'white'}}>COMMENTS</Button>
                    <Button onClick={() => setSelectedMenu('uploads')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'uploads' ? 'lightGray' : 'white'}}>UPLOADS</Button>
                    <Button onClick={() => setSelectedMenu('activity')} style={{ borderColor: 'lightGray', color: 'black', backgroundColor: selectedMenu === 'activity' ? 'lightGray' : 'white'}}>ACTIVITY</Button>
                </ButtonGroup>
            </div>
            <div className="mb-4" />
            {selectedMenuWidget()}
        </>
    );
}

export default Pricing;