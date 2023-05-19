import React from 'react';
import MechanicalTable from './Table';

const MechanicalTab = () => {
    return (
        <>
            <MechanicalTable title="FROM THE VIN" rows={[
                {
                    id: 1,
                    name: 'Correct VIN plate and anti theft labels',
                    isPassed: true,
                    isFixed: false,
                },
                {
                    id: 2,
                    name: 'Clean Experian Auto Check Confirm',
                    isPassed: true,
                    isFixed: false,
                },
                {
                    id: 3,
                    name: 'No reported accidents/flood damage/salvage',
                    isPassed: true,
                    isFixed: false,
                },
            ]} />
            <div className="my-4" />
            <MechanicalTable title="UNDER THE HOOD" rows={[
                {
                    id: 4,
                    name: 'Battery (condition, fluid level, load test)',
                    isPassed: true,
                    isFixed: false,
                },
                {
                    id: 5,
                    name: 'Alternator (belt condition/tension, charging)',
                    isPassed: false,
                    isFixed: true,
                },
                {
                    id: 6,
                    name: 'Water pump (noise/leaks)',
                    isPassed: true,
                    isFixed: false,
                },
                {
                    id: 7,
                    name: 'Ignition system operation',
                    isPassed: true,
                    isFixed: false,
                },
            ]} />
        </>
    );
}

export default MechanicalTab;