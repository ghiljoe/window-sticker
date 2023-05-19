import React, { useState, useRef, useEffect } from 'react';
import carketaWhiteLogo from './assets/images/carketa-white.png';
import actionAutoUtahImg from './assets/images/actionautoutah.png';
import certificateImg from './assets/images/certificate.jpg';
import sampleVehicleImg from './assets/images/sample-vehicle.jpg';
import alertInfoSelectedIcon from './assets/icons/alert-info-selected.svg';
import alertInfoIcon from './assets/icons/alert-info.svg';
import carketaLogoIcon from './assets/icons/carketa-logo.svg';
import carketaLogoSelectedIcon from './assets/icons/carketa-logo-selected.svg';
import carketaWStickerIcon from './assets/icons/carketa-w-sticker.svg';
import carketaWStickerSelectedIcon from './assets/icons/carketa-w-sticker-selected.svg';
import certificateIcon from './assets/icons/certificate.svg';
import certificateSelectedIcon from './assets/icons/certificate-selected.svg';
import engineIcon from './assets/icons/engine.svg';
import bodyStyleIcon from './assets/icons/body-style.svg';
import exteriorIcon from './assets/icons/exterior.svg';
import interiorIcon from './assets/icons/interior.svg';
import transmissionIcon from './assets/icons/transmission.svg';
import vinIcon from './assets/icons/vin.svg';
import stockNumberIcon from './assets/icons/stock-number.svg';
import mileageIcon from './assets/icons/mileage.svg';
import trimIcon from './assets/icons/trim.svg';
import pinIcon from './assets/icons/pin.svg';
import emailIcon from './assets/icons/email.svg';
import phoneIcon from './assets/icons/phone.svg';
import shareIcon from './assets/icons/share.svg';
import checkIcon from './assets/icons/check.svg'; 
import printIcon from './assets/icons/print.svg';
import selectedSettingsIcon from './assets/icons/selected_settings.svg';
import selectedCosmeticIcon from './assets/icons/selected_cosmetic.svg';
import settingsIcon from './assets/icons/settings.svg';
import cosmeticIcon from './assets/icons/cosmetic.svg';
import { Button, Tabs, Tab, Box } from '@mui/material';
import Accordion from './components/Accordion';
import GoogleMapWithMarker from './components/GoogleMapWithMarker';
import { Carousel } from 'react-carousel-minimal';
import MechanicalTab from './components/MechanicalTab';
import CosmeticTab from './components/CosmeticTab';
import WindowSticker from '../../components/WindowSticker';

import './CarketaValuation.css';

function CarketaValuation() {
  const sectionRef = useRef(null);

    const [isToggle, setIsToggle] = useState(false);

    const [currentSection, setCurrentSection] = useState('vehicle-details');
    const vehicleDetailsRef = useRef(null);
    const vehicleReportsRef = useRef(null);
    const windowStickerRef = useRef(null);
    const checkListCertificateRef = useRef(null);

    const handleScroll = () => {
      const currentScrollPos = sectionRef.current.scrollTop + 500;

      if (currentScrollPos  >= vehicleDetailsRef.current.offsetTop && currentScrollPos < vehicleReportsRef.current.offsetTop) {
        setCurrentSection('vehicle-details');
      } else if (currentScrollPos >= vehicleReportsRef.current.offsetTop && currentScrollPos < windowStickerRef.current.offsetTop) {
        setCurrentSection('vehicle-reports');
      } else if (currentScrollPos >= vehicleReportsRef.current.offsetTop && currentScrollPos < checkListCertificateRef.current.offsetTop) {
        setCurrentSection('window-sticker');
      } else if (currentScrollPos >= checkListCertificateRef.current.offsetTop && currentScrollPos) {
        setCurrentSection('checklist-certificate');
      }
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
      sectionRef.current.addEventListener('scroll', handleScroll);
  
      return () => {
        sectionRef.current.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    const scrollToSection = (sectionRef) => {
        console.log(sectionRef);
        // setCurrentSection(section);
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleSidebar = () => {
        setIsToggle(!isToggle);
        const aside = document.querySelector('aside')
        aside.classList.toggle("sm:block")
        aside.classList.toggle("hidden")
    }

    const data = [
        {
            image: sampleVehicleImg,
        },
        {
            image: sampleVehicleImg,
        },
        {
            image: sampleVehicleImg,
        },
        {
            image: sampleVehicleImg,
        },
    ];

    const vehicleDetailsWidget = (icon, title, desc) => {
        return (
            <div className="flex items-start w-1/4">
                <img className="mr-2" src={icon} alt="" />
                <div>
                    <p className="text-sm">{title}</p>
                    <p className="text-xs gray-400 ">{desc}</p>
                </div>
            </div>
        );
    }  
    const descriptions = ['Anti-Lock Brakes', 'All Wheel Drive', 'Tilt Wheel', 'Power Mirrors', 'Power Seats'];

    const markers = [
        { lat: 40.7608, lng: -111.8910, address: 'Salt Lake City' }, // Salt Lake City
        { lat: 40.6461, lng: -111.4979, address: 'Park City' }, // Park City
        { lat: 40.2338, lng: -111.6585, address: 'Provo' }, // Provo
        { lat: 38.5733, lng: -109.5498, address: 'Moab' }, // Moab
        { lat: 37.0965, lng: -113.5684, address: 'St. George' }, // St. George
    ];

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ pt: 3 }}>
                        <Box>{children}</Box>
                    </Box>
                )}
            </div>
        );
    }

    const tabLabel = (label, src) => {
        return (
            <div className="flex items-center">
                <img src={src} alt=""/>
                <p className="ml-1 font-bold">{label}</p>
            </div>
        );
    }

    const sidebarMenu = (menu, menuRef, icon, selectedIcon, title, subTitle) => {
        return (
            <div className={`border p-4 rounded mb-2 cursor-pointer ${currentSection === menu ? 'bg-green text-white font-medium' : ''}` }  onClick={() => scrollToSection(menuRef)}>
                <div className="flex justify-start" >
                    <img className="py-1 mr-2 " src={currentSection === menu ? selectedIcon : icon} alt="" />
                    <div>
                        <p className="text-sm">{title}</p>
                        <p className={`text-xs ${currentSection === menu ? 'text-white' : 'gray-500'}`}>{subTitle}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-col h-screen ">
                <nav className="flex justify-between h-10 items-center" style={{ backgroundColor: '#393939' }}>
                    <div className="mx-20 sm:mx-4">
                        <img className=" py-2 h-10 " src={carketaWhiteLogo} alt="" />
                        {/* <div>
                            <button onClick={toggleSidebar} className=" hidden sm:flex border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200">toggle</button>
                        </div> */}
                    </div>
                </nav>
                <div className="flex py-4 justify-between items-center mx-20 sm:mx-4">
                    <div>
                        <h1 className="text-lg">2022 Toyota Camry</h1>
                        <p className="text-sm gray-500">4T1C11BK9NU052544</p>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <h1 className="text-xl text-right">$25,978</h1>
                            <p className="text-sm gray-500 text-right">35,045 Miles</p>
                        </div>
                        <Button variant="contained" style={{ backgroundColor: 'rgba(86, 202, 0, 1)' }}>CHECK AVAILABILITY</Button>
                    </div>
                </div>
                <div className="flex flex-1 overflow-hidden mx-20 sm:mx-4 mt-4">
                    <aside className={`mr-2 overflow-y-auto w-1/3 ${isToggle ? 'z-index-20' : 'block sm:hidden'}`}>
                        <Accordion title="Vehicle Documentation" content={
                            <>
                                {sidebarMenu('vehicle-details', vehicleDetailsRef, alertInfoIcon, alertInfoSelectedIcon, 'Vehicle Details', 'View vehicle information')}
                                {sidebarMenu('vehicle-reports', vehicleReportsRef, carketaLogoIcon, carketaLogoSelectedIcon, 'Vehicle Condition Report', 'View vehicle inspection')}
                                {sidebarMenu('window-sticker', windowStickerRef, carketaWStickerIcon, carketaWStickerSelectedIcon, 'Carketa Window Sticker', 'View carketa sticker')}
                                {sidebarMenu('checklist-certificate', checkListCertificateRef, certificateIcon, certificateSelectedIcon, 'Checklist Certificate', 'View vehicle certificate')}
                            </>
                        } />
                        <Accordion title="Dealership Information" content={
                            <div>
                                <img className="mb-2" src={actionAutoUtahImg} alt="" />
                                <p className="gray-500 text-sm mb-2">Action Auto Utah</p>
                                <div className="flex">
                                    <img src={pinIcon} alt="" className="mr-2" />
                                    <p className="gray-400 text-sm mb-1">170 W. State Street LEHI, UT 84043</p>
                                </div>
                                <div className="flex">
                                    <img src={pinIcon} alt="" className="mr-2" />
                                    <p className="gray-400 text-sm mb-1">273 South State St Orem, Ut 84058</p>
                                </div>
                                <div className="flex">
                                    <img src={emailIcon} alt="" className="mr-2" />
                                    <p className="gray-400 text-sm mb-1">sample@email.com</p>
                                </div>
                                <div className="flex">
                                    <img src={phoneIcon} alt="" className="mr-2" />
                                    <p className="gray-400 text-sm mb-1">123 456 7890</p>
                                </div>
                            </div>
                        } />
                    </aside>
                    <main ref={sectionRef}  className=" overflow-y-auto px-4 w-full">
                        <div id="vehicle-details" ref={vehicleDetailsRef} >
                            <div className="mx-4 mb-12 w-full">
                                <Carousel
                                    height="300px"
                                    data={data}
                                    thumbnails
                                    dots={true}
                                    pauseIconColor="white"
                                    pauseIconSize="40px"
                                    slideBackgroundColor="darkgrey"
                                    slideImageFit="fill"

                                />
                            </div>
                            <div className="mb-8">
                                <p className="mb-4 text-md">Vehicle Details</p>
                                <div className="flex justify-between mb-6">
                                    {vehicleDetailsWidget(engineIcon, 'Engine', '2.5-liter Dynamic Force 4-cylinder and a robust 3.5-liter V6')}
                                    {vehicleDetailsWidget(bodyStyleIcon, 'Body Style', 'Sedan')}
                                    {vehicleDetailsWidget(exteriorIcon, 'Exterior Color', 'White')}
                                </div>
                                <div className="flex justify-between mb-6">
                                    {vehicleDetailsWidget(interiorIcon, 'Interior', 'N/A')}
                                    {vehicleDetailsWidget(transmissionIcon, 'Transmission', '10-Speed Automatic w/OD')}
                                    {vehicleDetailsWidget(vinIcon, 'VIN', '4T1C11BK9NU052544')}
                                </div>
                                <div className="flex justify-between">
                                    {vehicleDetailsWidget(stockNumberIcon, 'Stock Number', 'F4225P')}
                                    {vehicleDetailsWidget(mileageIcon, 'Mileage', '35,045 mi')}
                                    {vehicleDetailsWidget(trimIcon, 'Trim', 'XLE')}
                                </div>
                            </div>
                            <div className="mb-8">
                                <p className="mb-4 text-md">Description</p>
                                {
                                    descriptions.map((data) => {
                                        return (
                                            <p className="gray-500 text-sm">-{data}</p>
                                        );
                                    })
                                }
                                <p className="gray-500 text-sm mt-6">
                                    The 2022 Toyota Camry is a midsize sedan that boasts a comfortable and spacious interior, smooth handling, and a range of safety features. It comes with a standard 2.5-liter four-cylinder engine or an optional 3.5-liter V6 engine, both paired with an eight-speed automatic transmission. The Camry is fuel-efficient, with an EPA-estimated rating of up to 28 mpg in the city and 39 mpg on the highway for the four-cylinder engine. It also features a standard 7-inch touchscreen display, Apple CarPlay and Android Auto compatibility, and Toyota Safety Sense 2.5. The Camry is available in several trim levels, including the base LE, SE, XLE, XSE, and TRD.
                              </p>
                            </div>
                            <div className="mb-5">
                                <p className="mb-4 text-md ">Dealership Location</p>
                                <GoogleMapWithMarker markers={markers} zoom={12} />
                            </div>
                        </div>
                        <div id="vehicle-reports" ref={vehicleReportsRef} className="mt-10">
                            <div className="flex justify-between mb-4">
                                <p className="text-16 font-medium">Carekta Inspection</p>
                                <p className="text-16 selected">Show Images</p> 
                            </div>
                            <p className="text-lg text-right">Vehicle Inspection</p>
                            <div className="border-t mt-12 mb-4 border-gray-300 w-full " />
                            <div className="flex justify-between mb-4">
                                <p className="text-16 ">2022 Toyota Camry XLE</p>
                                <div className="flex">
                                  <p className="text-14 mr-4 ">INSPECTION DATE</p> 
                                  <p className="text-14 gray-500">03/01/2023</p> 
                                </div>
                            </div>
                            <div className="flex">
                              <p className="text-14 mr-4 ">VIN</p> 
                              <p className="text-14 gray-500">4T1C11BK9NU052544</p> 
                            </div>
                            <div className="flex">
                              <p className="text-14 mr-4 ">STOCK#</p> 
                              <p className="text-14 gray-500">F4225P</p> 
                            </div>
                            <Box sx={{ width: '100%', mt: '15px' }}>
                              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                  <Tabs sx={{
                                          ".Mui-selected": {
                                          color: `rgba(86, 202, 0, 1) !important`,
                                          },
                                          ".MuiTabs-indicator": {
                                              backgroundColor: 'lightGreen'
                                          }
                                      }} value={value} onChange={handleChange}>
                                      <Tab label={tabLabel('MECHANICAL', value === 0 ? selectedSettingsIcon : settingsIcon)} {...a11yProps(0)} />
                                      <Tab label={tabLabel('COSMETIC', value === 1 ? selectedCosmeticIcon : cosmeticIcon)} {...a11yProps(1)} />
                                  </Tabs>
                              </Box>
                              <TabPanel value={value} index={0}>
                                  <MechanicalTab />
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                  <CosmeticTab />
                              </TabPanel>
                          </Box>
                        </div>
                        <div id="window-sticker" ref={windowStickerRef} className="mt-20 " >
                            <div className="flex justify-between mb-4">
                                <p className="text-16 font-medium">Carketa Window Sticker</p>
                                <p className="text-16 selected">Show Images</p> 
                            </div>
                            <div style={{ width: "1300px", overflowX: "auto" }}>
                                <WindowSticker />
                            </div>
                        </div>
                        <div id="checklist-certificate" ref={checkListCertificateRef} className="mt-20 " >
                            <div className="flex justify-between mb-4">
                                <p className="text-16 font-medium">Checklist Certificate</p>
                                <p className="text-16 selected">Show Images</p> 
                            </div>
                            <div >
                                <img className="" src={certificateImg} alt="" />
                            </div>
                        </div>
                    </main>
                </div>
                <div className="flex justify-center py-2" style={{ backgroundColor: '#393939' }}>
                    <div className="w-1/5 flex flex-col items-center">
                        <img src={shareIcon} alt="" className="h-4 mb-1" />
                        <p className="text-green text-xs">Share</p>
                    </div>
                    <div className="w-1/5 flex flex-col items-center">
                        <img src={checkIcon} alt="" className="h-4 mb-1" />
                        <p className="text-green text-xs ">Check Availability</p>
                    </div>
                    <div className="w-1/5 flex flex-col items-center">
                        <img src={printIcon} alt="" className="h-4 mb-1" />
                        <p className="text-green text-xs "> Print</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};


export default CarketaValuation;
