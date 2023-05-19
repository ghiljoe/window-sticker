import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import reorderIcon from '../../../chrome-extension/assets/icons/reorder.svg';
import closeIcon from '../../../chrome-extension/assets/icons/close.svg';
import { Draggable } from 'react-drag-reorder';
import '../../ChromeExtension.css';

export default function ReorderDialog(props) {

    const { isOpen, onClose, onItemsChange} = props;
    const [items, setItems] = useState();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('item-ordering'));

        setItems(items);
      }, [])
      

    const getChangedPos = (currentPos, newPos) => {
        const newitems = [...items];
        const [removed] = newitems.splice(currentPos, 1);
        newitems.splice(newPos, 0, removed);
        setItems(newitems);
    };

    const saveReOrderedItems = () => {
        onItemsChange(items);
        localStorage.setItem('item-ordering', JSON.stringify(items));
    }
 
    return (
        <div>
            <Dialog
                fullScreen
                open={isOpen}
                onClose={() => onClose(false)}
                sx={{ mt: '80px' }}
            >
                <div className="flex justify-between h-14 items-center mt-4 mx-4 rounded-full">
                    <h1 className="text-xl">Reorder Items</h1>
                    <img onClick={() => onClose(false)} src={closeIcon} alt="" className="cursor-pointer" />
                </div>
                <div className="px-4 max-h-screen overflow-y-auto h-full mt-6">
                    <div className="flex-container">
                        <div className="row">
                            <div className="mb-2 mx-4 rounded py-2" style={{ backgroundColor: '#56CA00', opacity: 0.6 }}>
                                <div className="flex mx-4 pt-1">
                                    <img className="mr-4" src={reorderIcon} alt="" />
                                    <p className="text-14 text-white">Vehicle Details</p>
                                </div>
                            </div>
                            <Draggable onPosChange={getChangedPos}>
                                {items && items.map((word, idx) => {
                                    return (
                                        <div id={idx} className="mb-2 mx-4 rounded py-2" style={{ backgroundColor: '#56CA00' }}>
                                            <div className="flex mx-4 pt-1">
                                                <img className="mr-4" src={reorderIcon} alt="" />
                                                <p className="text-14 text-white">{word}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Draggable>
                        </div>
                    </div>
                </div>
                <DialogActions style={{ display: 'flex' }}>
                    <Button onClick={() => saveReOrderedItems()} variant="contained" className="w-full bg-green" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>SAVE</Button>
                    <Button onClick={() => onClose(false)} variant="outlined" className="w-full border-green" style={{ borderColor: 'red', color: 'red' }}>CANCEL</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}