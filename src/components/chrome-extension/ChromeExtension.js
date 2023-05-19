import React, { useEffect, useState } from "react";
import newTabIcon from './assets/icons/new_tab.svg';
import overviewIcon from './assets/icons/overview.svg';
import reconIcon from './assets/icons/recon.svg';
import inspectionIcon from './assets/icons/inspection.svg';
import pricingIcon from './assets/icons/pricing.svg';
import leadsIcon from './assets/icons/leads.svg';
import arrowUpIcon from './assets/icons/arrow_up.svg';
//selected icons
import selectedOverviewIcon from './assets/icons/selected_overview.svg';
import selectedReconIcon from './assets/icons/selected_recon.svg';
import selectedInspectionIcon from './assets/icons/selected_inspection.svg';
import selectedPricingIcon from './assets/icons/selected_pricing.svg';
import selectedLeadsIcon from './assets/icons/selected_leads.svg';

import carketaLogoWhite from './assets/images/carketa-logo-white.png';

import './ChromeExtension.css';
import Overview from './components/Overview';
import Recon from './components/Recon';
import VehicleInfo from './components/VehicleInfo';
import Pricing from './components/Pricing';
import Inspection from './components/Inspection';
import Leads from "./components/Leads";

const ChromeExtension = () => {
    const [selectedMenu, setSelectedMenu] = useState('overview');
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);


    const onSelectMenu = (menu) => {
        setSelectedMenu(menu);
    }

    const selectedMenuWidget = () => {
        switch (selectedMenu) {
            case 'overview':
                return (
                    <Overview />
                );
            case 'recon':
                return (
                    <Recon />
                );
            case 'pricing':
                return (
                    <Pricing />
                );
            case 'inspection':
                return (
                    <Inspection />
                );
            case 'leads':
                return (
                    <Leads />
                );
            default:
                return (
                    <Overview />
                );
        }
    }

    const handleScroll = () => {

        const currentScrollPos = window.scrollY;
    
        if( currentScrollPos > 700){
            setVisible(false)
        } else {
            setVisible(true)
        }
        
    
        setPrevScrollPos(currentScrollPos)
    }

    useEffect( () => {
        window.scrollTo(0, 0)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            { selectedMenu === 'pricing' && <div className={`bg-stone-800 h-14 sticky ${visible ? 'hidden' : 'fixed top-0 w-full z-20'} `}>
                <div className="flex justify-between mx-4 py-2">
                    <div>
                        <p className="text-14 text-white">2005 - CHRYSLER - Town & Country</p>
                        <p className="text-14 text-white">3N1CN7AP0JL839530</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-14 text-white pr-1">21,042 mi </p>
                        <img onClick={() => window.scrollTo(0, 0)} className="h-4 cursor-pointer" src={arrowUpIcon} alt="" />
                    </div>
                </div>
            </div>}
            <div className=" my-8  ">
                <section className="flex mx-4 justify-between items-center">
                    <div>
                        <img className="h-8" src={carketaLogoWhite} alt="" />
                    </div>
                    <div onClick={() => window.open('https://next.carketa.app/organization', '_blank')} className="flex items-center cursor-pointer">
                        <span className="mr-2 text-gray-500 text-md">Open Carketa </span>
                        <img className="w-4 h-4" src={newTabIcon} alt="" />
                    </div>
                </section>
                <div className="my-4" />
                <section className="bg-stone-800">
                    <div className="flex justify-between">
                        <button onClick={() => onSelectMenu('overview')} className="py-2 w-24">
                            <div className="flex justify-center pb-1">
                                <img className="h-12 sm:h-6" src={selectedMenu === 'overview' ? selectedOverviewIcon : overviewIcon} alt="" />
                            </div>
                            <p className={selectedMenu === 'overview' ? 'selected text-center text-xs' : `text-center text-xs text-white`}>Overview</p>
                        </button>
                        <button onClick={() => onSelectMenu('recon')} className="py-2 w-24">
                            <div className="flex justify-center pb-1">
                                <img className="h-12 sm:h-6" src={selectedMenu === 'recon' ? selectedReconIcon : reconIcon} alt="" />
                            </div>
                            <p className={selectedMenu === 'recon' ? 'selected text-center text-xs' : `text-center text-xs text-white`}>Recon</p>
                        </button>

                        <button onClick={() => onSelectMenu('pricing')} className="py-2 w-24">
                            <div className="flex justify-center pb-1">
                                <img className="h-12 sm:h-6" src={selectedMenu === 'pricing' ? selectedPricingIcon : pricingIcon} alt="" />
                            </div>
                            <p className={selectedMenu === 'pricing' ? 'selected text-center text-xs' : `text-center text-xs text-white`}>Pricing</p>
                        </button>

                        <button onClick={() => onSelectMenu('inspection')} className="py-2 w-24">
                            <div className="flex justify-center pb-1">
                                <img className="h-12 sm:h-6" src={selectedMenu === 'inspection' ? selectedInspectionIcon : inspectionIcon} alt="" />
                            </div>
                            <p className={selectedMenu === 'inspection' ? 'selected text-center text-xs' : `text-center text-xs text-white`}>Inspection</p>
                        </button>
                        <button onClick={() => onSelectMenu('leads')} className="py-2 w-24">
                            <div className="flex justify-center pb-1">
                                <img className="h-12 sm:h-6" src={selectedMenu === 'leads' ? selectedLeadsIcon : leadsIcon} alt="" />
                            </div>
                            <p className={selectedMenu === 'leads' ? 'selected text-center text-xs' : `text-center text-xs text-white`}>Leads</p>
                        </button>
                    </div>
                </section>
                <div className="mb-4" />
                {selectedMenu !== 'pricing' ? <VehicleInfo /> : <></>}
                <div className="mb-4" />
                {selectedMenuWidget()}
            </div>
        </>
    );
};

export default ChromeExtension;