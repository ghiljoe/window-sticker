import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import closeIcon from '../../../chrome-extension/assets/icons/close.svg';
import EditLeadDialog from './EditLeadDialog';
import '../../ChromeExtension.css';

export default function LeadDetailsDialog(props) {

  const { isOpen, onClose } = props;

  const [openEditLeadDialog, setOpenEditLeadDialog] = useState(false);

  const handleClickOpenEditLeadDialog = () => {
    setOpenEditLeadDialog(true);
  };

  const onCloseLeadEditDialog = (isShowDialog) => {
    setOpenEditLeadDialog(isShowDialog);
  }

  const infoField = (field, value, thirdLine, valueColor) => {
      return (
          <div className="py-2">
            <h2 className="text-14 font-base mb-1">{field}:</h2>
            <p className={`text-14 gray-500 mb-1 ${valueColor}`}>{value}</p>
            {thirdLine && <p className="text-14 gray-500 mb-1 text-green">{thirdLine}</p>}
          </div>
      );
  }

  return (
    <div>
      <EditLeadDialog isOpen={openEditLeadDialog} onClose={onCloseLeadEditDialog}/>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={() => onClose(false)}
        sx={{ mt: '80px' }}
      >
        <div className="flex justify-between h-14 items-center mt-4 mx-4 rounded-full">
          <h1 className="text-xl">Prospective Buyer Details</h1>
          <img onClick={() => onClose(false)} src={closeIcon} alt="" className="cursor-pointer"/>
        </div>
        <div className="px-4">
          <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-gray-700 p-3 mt-3 rounded" role="alert">
            <span className="font-normal text-12 gray-500">Added on 12-12-2022 at 09:37pm</span>
          </div>
        </div>
        <div className=" px-4 max-h-screen overflow-y-auto h-full">
            {infoField('Name', 'Replaced Tire')}    
            {infoField('Phone', '123 456 7890', '', 'text-green')}    
            {infoField('Email', 'john.doe@email.com', '', 'text-green')}    
            {infoField('Sales Person', 'N/A')}    
            {infoField('Comments', 'Additional information and photo please.')}    
            <div className="border-t my-4  border-gray-300 w-full " />
            {infoField('Vehicle Information', '2022 Toyota Camry', 'https://link')}
            {infoField('VIN', '4T1C11BK9NU052544')}
            {infoField('Stock #', 'L13033')}
            {infoField('Lead Details', 'https://link', '', 'text-green')}
            {infoField('Notify Throughout Process?', 'Yes')}
            {infoField('Notify When Complete?', 'Yes')}
        </div>
        <DialogActions style={{ display: 'flex' }}>
            <Button onClick={handleClickOpenEditLeadDialog} variant="contained" className="w-full bg-green" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>EDIT</Button>
            <Button variant="outlined" className="w-full border-green" style={{ borderColor: 'red', color: 'red' }}>DELETE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}