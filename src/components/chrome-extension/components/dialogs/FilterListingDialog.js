import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import closeIcon from '../../../chrome-extension/assets/icons/close.svg';
import { TextField, Checkbox, MenuItem } from '@mui/material';
import '../../ChromeExtension.css';

export default function FilterListingDialog(props) {

  const { isOpen, onClose } = props;

  const salesPersons = [
    {
        value: 'Yes',
    },
    {
        value: 'No',
    },
];

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={() => onClose(false)}
        sx={{ mt: '80px' }}
      >
        <div className="flex justify-between h-14 items-center mt-4 mx-4 rounded-full">
          <h1 className="text-xl">Filter Listing</h1>
          <img onClick={() => onClose(false)} src={closeIcon} alt="" className="cursor-pointer"/>
        </div>
        <div className="px-4">
          <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-gray-700 p-3 mt-3 rounded" role="alert">
            <span className="font-normal text-12 gray-500">Adjust zip code, radius and trims</span>
          </div>
        </div>
        <div className=" px-4 max-h-screen overflow-y-auto h-full">
            <div className="mt-6"/>
            <TextField size="small" label="Zip Code" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField size="small" placeholder="Radius" label="Radius" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField size="small" placeholder="Min Mileage" label="Min Mileage" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField size="small" placeholder="Max Mileage" label="Max Mileage" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField
                size="small"
                className="w-full"
                select
                label="All Trims"
                defaultValue="Yes"
            >
                {salesPersons.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>
        </div>
        <DialogActions style={{ display: 'flex' }}>
            <Button variant="contained" className="w-full bg-green" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>SAVE</Button>
            <Button variant="outlined" className="w-full border-green" style={{ borderColor: 'red', color: 'red' }}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}