import React, { useState, useEffect } from 'react';
import reorder1Icon from '../../assets/icons/reorder1.svg';
import { Carousel } from 'react-carousel-minimal';
import Accordion from '../Accordion';
import DragAndDropFile from './components/DragAndDropFile';
import Button from '@mui/material/Button';
import '../../ChromeExtension.css';
import ReorderDialog from '../dialogs/ReOrderDialog';
import CarfaxWidget from './widgets/CarfaxWidget';
import InspectionWidget from './widgets/InspectionWidget';
import VehiclePricingLogicWidget from './widgets/VehiclePricingLogicWidget';
import ComparisonMapWidget from './widgets/ComparisonMapWidget';
import CostBasisWidget from './widgets/CostBasisWidget';
import MarketCompsWidget from './widgets/MarketCompsWidget';
import LiveLocalMarketWidget from './widgets/LiveLocalMarketWidget';
import NationalAskingPriceHistoryWidget from './widgets/NationalAskingPriceHistoryWidget';
import BlackBookWidget from './widgets/BlackBookWidget';


const Pricing = () => {

    const [openReOrderDialog, setOpenReOrderDialog] = useState(false);

    const [widgets, setwidgets] = useState();


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('item-ordering'));

        if (!items) {
            const defaultItems = ["Carfax", "Inspection", "Pricing Logic", "Cost Basis", "Comparison Map", "Market Comps", "National Asking Price History", "Live Local Market", "Blackbook"];
            localStorage.setItem('item-ordering', JSON.stringify(defaultItems));
            setwidgets(defaultItems);
        } else {
            setwidgets(items);
        }
     
      }, []);

    const handleItemsChange = (newItems) => {
        setwidgets(newItems);
    };

    const handleClickOpenReOrderDialog = () => {
        setOpenReOrderDialog(true);
      };
    
    const onCloseReOrderDialog = (isShowDialog) => {
        setOpenReOrderDialog(isShowDialog);
    }

    const data = [
        {
            image: 'https://dealerscloud.blob.core.windows.net/actionauto/WAUC4AFR7GA028361/800/1.jpg?v=020230421185857',
        },
        {
            image: 'https://dealerscloud.blob.core.windows.net/actionauto/WAUC4AFR7GA028361/800/1.jpg?v=020230421185857',
        },
        {
            image: 'https://dealerscloud.blob.core.windows.net/actionauto/WAUC4AFR7GA028361/800/1.jpg?v=020230421185857',
        },
        {
            image: 'https://dealerscloud.blob.core.windows.net/actionauto/WAUC4AFR7GA028361/800/1.jpg?v=020230421185857',
        },
    ];

    return (
        <>
            <ReorderDialog isOpen={openReOrderDialog} onClose={onCloseReOrderDialog} onItemsChange={handleItemsChange}/>
            <div className="mx-4 mb-4">
                <Carousel
                    data={data}
                    // time={2000}
                    // automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="fill"
                />
            </div>
            <div className="mx-4 mb-4 cursor-pointer">
                <DragAndDropFile />
            </div>
            <div className="mx-4 mb-4">
                <div className="flex ">
                    <Button onClick={handleClickOpenReOrderDialog} startIcon={<img src={reorder1Icon} alt=""/>} variant="outlined" className="w-full border-green" style={{ borderColor: '#56CA0080', color: '#56CA00' }}>REORDER</Button>
                </div>
            </div>
            <div className="mx-4 mb-4">
                <Accordion title="2022 Toyota Camry" content={
                    <>
                        <p className="text-14 gray-500">3N1CN7AP0JL839530</p>
                        <p className="text-14 gray-500">Premium Sedan Premium Unleaded</p>
                        <p className="text-14 gray-500">24,649 mi</p>
                        <p className="text-14 gray-500">$30,995</p>
                        <div className="border-t my-3  border-gray-300 w-full " />
                        <p className="text-14 gray-500">Action Auto Utah Orem</p>
                        <p className="text-14 gray-500">Original Cost: <span className="selected">$0.00</span></p>
                        <p className="text-14 gray-500">OEM Sticker: <span className="selected cursor-pointer">Preview</span></p>
                    </>
                } />
            </div>
            {widgets && widgets.map((item, index) => {
                switch (item) {
                case 'Carfax':
                    return <CarfaxWidget key={index} />;
                case 'Inspection':
                    return <InspectionWidget key={index} />;
                case 'Pricing Logic':
                    return <VehiclePricingLogicWidget key={index} />;
                case 'Cost Basis':
                    return <CostBasisWidget key={index} />;
                case 'Comparison Map':
                    return <ComparisonMapWidget key={index} />;
                case 'Market Comps':
                    return <MarketCompsWidget key={index} />;
                case 'National Asking Price History':
                    return <NationalAskingPriceHistoryWidget key={index} />;
                case 'Live Local Market':
                    return <LiveLocalMarketWidget key={index} />;
                case 'Blackbook':
                    return <BlackBookWidget key={index} />;
                default:
                    return <></>;
                }
            })}
          
        </>
    );
}

export default Pricing;