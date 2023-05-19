import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import closeIcon from '../../../chrome-extension/assets/icons/close.svg';
import { TextField, Checkbox, MenuItem } from '@mui/material';
import '../../ChromeExtension.css';

export default function AddLeadDialog(props) {

  const { isOpen, onClose } = props;

  const salesPersons = [
    {
        value: 'Admin Sales',
    },
    {
        value: 'Dev',
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
          <h1 className="text-xl">Add Lead</h1>
          <img onClick={() => onClose(false)} src={closeIcon} alt="" className="cursor-pointer"/>
        </div>
        <div className="px-4">
          <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-gray-700 p-3 mt-3 rounded" role="alert">
            <span className="font-normal text-12 gray-500">Add lead for 2022 Toyota Camry</span>
          </div>
        </div>
        <div className=" px-4 max-h-screen overflow-y-auto h-full">
            <div className="mt-6"/>
            <TextField size="small"  label="First Name" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField size="small" placeholder="Doe" label="Last Name" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField size="small" placeholder="123 456 7890" label="Phone" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField size="small" placeholder="john.doe@email.com" label="Email" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-6"/>
            <TextField
                size="small"
                className="w-full"
                select
                label="Sales Person"
                defaultValue="Admin Sales"
            >
                {salesPersons.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>
            <div className="mt-6"/>
            <TextField size="small" placeholder="https://link" label="Lead Details" variant="outlined" style={{ width: '100%' }} />
            <div className="mt-4"/>
            <div>
                <label className="block mb-2 text-sm ml-1 text-gray-900">Comments </label>
                <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your thoughts here..." defaultValue="Additional information and photo please."></textarea>
            </div>
            <div className="mt-4"/>
            <div className="flex items-center mb-4">
                <Checkbox color="success"  defaultChecked={true} size="medium"/>
                <label className="text-14">Notify throughout process and notify when complete</label>
            </div>
        </div>
        <DialogActions style={{ display: 'flex' }}>
            <Button variant="contained" className="w-full bg-green" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>SAVE</Button>
            <Button variant="outlined" className="w-full border-green" style={{ borderColor: 'red', color: 'red' }}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}