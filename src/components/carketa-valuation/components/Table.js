import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import checkIcon from '../assets/icons/check.svg';
import blueCheckIcon from '../assets/icons/blue_check.svg';
import '../CarketaValuation.css';

const StyledTable = styled(Table)(() => ({
    "& .MuiTableCell-root": {
        border: '1px solid #D7D7DD',
        paddingTop: 5,
        paddingBottom: 5,
        lineHeight: 1,
    },
    ".MuiTableRow-head" : {
        backgroundColor: '#F4FEEC',
    }
}));


export default function InspectionTable(props) {
    const { rows, title } = props;
    
    const newRows = rows.map(({ id, name, isPassed, isFixed }) => {
        return {
            id, name, isPassed, isFixed
        }
    });
    
    return (
        <StyledTable >
            <TableHead>
                <TableRow>
                    <TableCell align="left" colSpan={2}>
                        <span className="text-sm font-semibold">{title}</span>
                    </TableCell>
                    <TableCell align="center" colSpan={1}>
                        <span className="text-xs ">PASSED</span>
                    </TableCell>
                    <TableCell align="center" colSpan={1}>
                        <span className="text-12">FIXED/<br />REPLACED</span>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {newRows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="left"><span className="text-12 gray-400">{row.name}</span></TableCell>
                        <TableCell align="center">{row.isPassed ? 
                            <div className="flex justify-center">
                                <img src={checkIcon} className="h-4"/>
                            </div>
                        : <></>}</TableCell>
                        <TableCell align="center">{row.isFixed  ? 
                            <div className="flex justify-center">
                                <img src={blueCheckIcon}/>
                            </div>
                        : <></>}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </StyledTable>
    );
}
