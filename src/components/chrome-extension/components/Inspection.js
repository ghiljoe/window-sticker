import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import settingsIcon from '../assets/icons/settings.svg';
import cosmeticIcon from '../assets/icons/cosmetic.svg';
import selectedSettingsIcon from '../assets/icons/selected_settings.svg';
import selectedCosmeticIcon from '../assets/icons/selected_cosmetic.svg';
import '../ChromeExtension.css';
import MechanicalTab from './inspection_tabs/MechanicalTab';
import CosmeticTab from './inspection_tabs/CosmeticTab';

const Inspection = () => {
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
    return (
        <div className="mx-4">
            <div className="flex items-center mb-4 pt-1">
                <p className="text-14 font-medium mr-3">INSPECTION DATE</p>
                <p className="text-14 gray-500">03/01/2023</p>
            </div>
            <Box sx={{ width: '100%' }}>
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
    );
}

export default Inspection;