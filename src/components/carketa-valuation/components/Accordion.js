import React, { useState } from "react";
import removeIcon from '../assets/icons/remove.svg';
import '../CarketaValuation.css';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded mb-2 w-full">
            <div
                className=" p-4 cursor-pointer flex justify-between"
            >
                <h2 className="text-14 font-medium">{title}</h2>
                <span className="accordion-status text-sm font-medium font-normal">
                    <div className="flex">
                        <div onClick={toggleAccordion}>
                            {isOpen ? <img  src={removeIcon} alt="" /> : <img  src={removeIcon} alt="" />}
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
