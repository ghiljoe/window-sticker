import React, { useState } from "react";
import removeIcon from '../assets/icons/remove.svg';
import settingsIcon from '../assets/icons/settings.svg';
import '../ChromeExtension.css';
import FilterListingDialog from "./dialogs/FilterListingDialog";

const Accordion = ({ title, content, isMarketComps }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [openFilterListingDialog, setOpenFilterListingDialog] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOpenFilterListingDialog = () => {
        setOpenFilterListingDialog(true);
      };
    
    const onCloseFilterListingDialog = (isShowDialog) => {
        setOpenFilterListingDialog(isShowDialog);
    }

    return (
        <div className="border rounded shadow-md mb-2">
            <FilterListingDialog isOpen={openFilterListingDialog} onClose={onCloseFilterListingDialog}/>
            <div
                className=" p-4 cursor-pointer flex justify-between"
            >
                <h2 className="text-16 font-medium">{title}</h2>
                <span className="accordion-status text-sm font-medium font-normal">
                    <div className="flex">
                        {isMarketComps && <img onClick={handleClickOpenFilterListingDialog} className="mr-4"  src={settingsIcon} alt="" /> }
                        <div onClick={toggleAccordion}>
                            {isOpen ? <img  src={removeIcon} alt="" /> : <img className="h-12 sm:h-6" src={removeIcon} alt="" />}
                        </div>
                    </div>
                </span>
            </div>
            {isOpen && (
                <div className="bg-white px-4 pb-4">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Accordion;
