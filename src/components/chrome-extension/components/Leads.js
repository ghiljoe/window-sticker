import React, { useState } from 'react';
import filterIcon from '../../chrome-extension/assets/icons/filter.svg';
import starIcon from '../../chrome-extension/assets/icons/star.svg';
import Button from '@mui/material/Button';
import VehicleDialog from '../components/dialogs/VehicleDialog';
import LeadDetailsDialog from '../components/dialogs/LeadDetailsDialog';
import AddLeadDialog from '../components/dialogs/AddLeadDialog';

const Leads = () => {
    const [open, setOpen] = useState(false);
    const [openLeadDialog, setOpenLeadDialog] = useState(false);
    const [openAddLeadDialog, setOpenAddLeadDialog] = useState(false);

    const buttonStyle = {
        borderStyle: 'dashed',
        borderWidth: '1px',
        color: 'gray',
        borderColor: 'gray',
        width: '100%',
    };

    const leadsData = [
        {
            id: 1,
            fullName: 'John Doe',
            name: 'Action Auto Sales and Finance',
            engagements: 2,
            vehicles: 2,
        },
        {
            id: 2,
            fullName: 'John Doe',
            name: 'Action Auto Sales and Finance',
            engagements: 1,
            vehicles: 1,
        }
    ];

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const onClose = (isShowDialog) => {
        setOpen(isShowDialog);
    }

    const handleClickOpenLeadDialog = () => {
        setOpenLeadDialog(true);
      };
    
    const onCloseLeadDialog = (isShowDialog) => {
        setOpenLeadDialog(isShowDialog);
    }

    const handleClickOpenAddLeadDialog = () => {
        setOpenAddLeadDialog(true);
      };
    
    const onCloseAddLeadDialog = (isShowDialog) => {
        setOpenAddLeadDialog(isShowDialog);
    }

    const leadsListWidget = () => {
        return (
            <>
                {
                    leadsData.map(({ id, fullName, name, vehicles, engagements }) => {
                        return (
                            <div key={id}>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="flex items-center mb-1">
                                            <img src={starIcon} alt=""/>
                                            <h2 className="text-16 font-medium ml-2">{fullName}</h2>
                                        </div>
                                        <p className="text-14 gray-500 mb-1">{name}</p>
                                        <p className="text-14 gray-500 mb-1">{engagements} Engagements <span onClick={handleClickOpen} className="cursor-pointer selected ml-2">{vehicles} Vehicles</span></p>
                                    </div>
                                    <Button onClick={handleClickOpenLeadDialog} variant="contained" className="w-1/4 h-1/2 bg-green" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>VIEW</Button>
                                </div>
                                <div className="border-t my-4  border-gray-300 w-full " />
                            </div>
                        );
                    })
                }
            </>
        );
    }

    return (
        <div className="mx-4">
            <AddLeadDialog isOpen={openAddLeadDialog} onClose={onCloseAddLeadDialog}/>
            <VehicleDialog isOpen={open} onClose={onClose}/>
            <LeadDetailsDialog isOpen={openLeadDialog} onClose={onCloseLeadDialog}/>
            <div className="flex justify-between">
                <p>Leads <span className="text-red-500">(2)</span></p>
                <img className="cursor-pointer" src={filterIcon} alt=""/>
            </div>
            <div className="mt-6"/>
            <Button onClick={handleClickOpenAddLeadDialog} variant="outlined" style={buttonStyle}>
                ADD LEADS
            </Button>
            <div className="mt-6"/>
            {
                leadsListWidget()
            }
        </div>
    );
}

export default Leads;