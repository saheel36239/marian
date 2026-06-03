import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>
        <h3>View</h3>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Deptid</TableCell>
                        <TableCell>Mark</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                 <TableRow>
                    <TableCell>{}</TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>{}</TableCell>
                </TableRow>
                
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View