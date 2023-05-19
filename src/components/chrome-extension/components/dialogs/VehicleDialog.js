import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import filterIcon from '../../../chrome-extension/assets/icons/filter.svg';
import closeIcon from '../../../chrome-extension/assets/icons/close.svg';
import '../../ChromeExtension.css';

export default function VehicleDialog(props) {

  const { isOpen, onClose } = props;

  const vehiclesData1 = [
    {
      id: 1,
      fullName: '2022 Toyota Camry',
      name: '4T1C11BK9NU052544',
      date: '2/22/2023',
    },
    {
      id: 2,
      fullName: '2022 Toyota Camry',
      name: '4T1C11BK9NU052544',
      date: '2/22/2023',
    },
    {
      id: 2,
      fullName: '2022 Toyota Camry',
      name: '4T1C11BK9NU052544',
      date: '2/22/2023',
    },
    {
      id: 2,
      fullName: '2022 Toyota Camry',
      name: '4T1C11BK9NU052544',
      date: '2/22/2023',
    },
    {
      id: 2,
      fullName: '2022 Toyota Camry',
      name: '4T1C11BK9NU052544',
      date: '2/22/2023',
    },
    {
      id: 2,
      fullName: '2022 Toyota Camry',
      name: '4T1C11BK9NU052544',
      date: '2/22/2023',
    },
    {
      id: 2,
      fullName: '2022 Toyota Camry',
      name: '4T1C11BK9NU052544',
      date: '2/22/2023',
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
          <h1 className="text-xl">Vehicle List</h1>
          <img onClick={() => onClose(false)} src={closeIcon} alt="" className="cursor-pointer"/>
        </div>
        <div className="p-4 ">
          <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-gray-700 p-3 mt-3 rounded" role="alert">
            <span className="font-normal text-12 gray-500">John Doe's Vehicles</span>
          </div>
          <div className="flex justify-between ">
            <p>Vehicles <span className="text-red-500">(2)</span></p>
            <img src={filterIcon} alt="" />
          </div>
        </div>
        <div className=" p-4 max-h-screen overflow-y-auto h-full">
            {
              vehiclesData1.map(({ id, fullName, name, date }) => {
                return (
                  <div key={id} className="">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-16 font-medium mb-1">{fullName}</h2>
                        <p className="text-14 gray-500 mb-1">{name}</p>
                        <p className="text-14 gray-500 mb-1">{date}</p>
                      </div>
                      <Button variant="contained" className="w-1/4 h-1/2 bg-green" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>VIEW</Button>
                    </div>
                    <div className="border-t my-4  border-gray-300 w-full " />
                  </div>
                );
              })
            }
          </div>
      </Dialog>
    </div>
  );
}