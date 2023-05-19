import React from 'react';
import VehicleInfo from '../../components/pricing_tabs/components/VehicleInfo';
import Accordion from '../Accordion';
import pdfIcon from '../../assets/icons/pdf.svg';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiTimeline  from '@mui/lab/Timeline';
import { deepPurple } from '@mui/material/colors';

import '../../ChromeExtension.css';

const StyledTimeline = styled(MuiTimeline)(({ theme }) => ({
    margin: 0,
    padding: 0,
    marginLeft: theme.spacing(0.75),
    '& .MuiTimelineItem-root': {
      '&:before': {
        display: 'none',
      },
      '&:last-child': {
        minHeight: 60,
      },
    },
    overflow: 'auto',
  }));

const ActivityTab = () => {
    return (
        <>
            <VehicleInfo />
            <div className="mb-4" />
            <div className="mx-4">
                <Accordion title="Activity" content={
                    <div className="flex justify-between ">
                        <StyledTimeline>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Box>
                                                <p className="text-14 gray-400">File Upload</p>
                                                <p className="text-14 gray-500">1 min ago • 01/25/2023 • 7:00 AM</p>
                                                <div className="flex mt-1">
                                                    <img src={pdfIcon} />
                                                    <p className="ml-2 text-14 font-semibold gray-500">invoice.pdf</p>
                                                </div>
                                            </Box>
                                            <Box>
                                                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                            </Box>
                                        </Box>
                                            
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="flex justify-between items-center">
                                            <div>
                                                <p className="text-14 gray-400">Completed “Mechanic” Step</p>
                                                <p className="text-14 gray-500">1 min ago • 01/25/2023 • 7:00 AM</p>
                                            </div>
                                            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="flex justify-between items-center">
                                            <div>
                                                <p className="text-14 gray-400">Completed “Mechanic” Step</p>
                                                <p className="text-14 gray-500">1 min ago • 01/25/2023 • 7:00 AM</p>
                                            </div>
                                            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="flex justify-between items-center">
                                            <div>
                                                <p className="text-14 gray-400">Completed “In Transit” Step</p>
                                                <p className="text-14 gray-500">1 min ago • 01/25/2023 • 7:00 AM</p>
                                            </div>
                                            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </StyledTimeline>
                        
                    </div>
                } />
            </div>
        </>
    );
}

export default ActivityTab;


