import React, { useState } from 'react';
import Accordion from '../../Accordion';
import GoogleMapWithMarker from '../../GoogleMapWithMarker';
import '../../../ChromeExtension.css';
import LiveLocalMarketDialog from '../../dialogs/LiveLocalMarketDialog';

const markers = [
    { lat: 40.7608, lng: -111.8910, address: 'Salt Lake City' }, // Salt Lake City
    { lat: 40.6461, lng: -111.4979, address: 'Park City' }, // Park City
    { lat: 40.2338, lng: -111.6585, address: 'Provo' }, // Provo
    { lat: 38.5733, lng: -109.5498, address: 'Moab' }, // Moab
    { lat: 37.0965, lng: -113.5684, address: 'St. George' }, // St. George
  ];


const ComparisonMapWidget = () => {

    const [openReOrderDialog, setOpenReOrderDialog] = useState(false);
    const [ selectedMarker, setSelectedMarker ] = useState(null);

    const handleClickOpenReOrderDialog = () => {
        setOpenReOrderDialog(true);
    };
    
    const onCloseReOrderDialog = (isShowDialog) => {
        setOpenReOrderDialog(isShowDialog);
    }

    const handleMarkerSelect = (data) => {
        console.log('Selected marker data:', data);
        setSelectedMarker(data);
        handleClickOpenReOrderDialog();
    };

    return(
        <>
           {selectedMarker&& <LiveLocalMarketDialog isOpen={openReOrderDialog} onClose={onCloseReOrderDialog} data={selectedMarker}/> }
            <div className="mx-4 mb-4">
                <Accordion title="Comparison Map" content={
                    <div className="w-full pt-2">
                        <GoogleMapWithMarker markers={markers} zoom={6} onMarkerSelect={handleMarkerSelect}/>
                    </div>
                } />
            </div>
        </>
    );
}

export default ComparisonMapWidget;