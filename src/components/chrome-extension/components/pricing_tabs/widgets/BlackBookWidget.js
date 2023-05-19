import React from 'react';
import { Button } from '@mui/material';
import Accordion from '../../Accordion';
import '../../../ChromeExtension.css';
import blackBookLogo from '../../../assets/images/blackbook_logo.png';

const BlackBookWidget = () => {

    return(
        <>
            <div className="mx-4 mb-4">
                <Accordion title={<img className="" src={blackBookLogo} alt="" />} content={
                    <div className="">
                    <p className="text-14 gray-500">
                            Black Book provides a method for dealers to check the value of a trade-in, look at wholesale prices at auctions, and help determine what to charge for a used car or truck.
                    </p>
                    <div className="flex justify-between mt-4">
                            <Button variant="contained" className="w-full bg-green" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>SUBSCRIBE</Button>
                            <div className="mx-4" />
                            <Button variant="outlined" className="w-full border-green" style={{ borderColor: 'rgba(86, 202, 0, 1)', color: 'rgba(86, 202, 0, 1)' }}>VIEW DETAILS</Button>
                    </div>
                    </div>
                } />
            </div>
        </>
    );
}

export default BlackBookWidget;