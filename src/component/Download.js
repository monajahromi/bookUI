import React from "react";
import ReactExport from "react-export-excel";
import {exportExcelButtton} from './../../Theme/colors.js'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

console.log('export')

const but = {
    border: 'none',
    outline: 'none',
    background: 'none',
    color: exportExcelButtton,
    cursor: 'pointer',
    fontWeight: 'bold',
}

const container ={
    width : '100%' , 
    textAlign : 'left' ,
}
const  Download = ({dataSet, columns ,filename =""})=> {
   
        return (
            <div  style ={container}>
           
            <ExcelFile element={<button style={but}>دریافت فایل اکسل</button>} filename ={ filename} >
                <ExcelSheet data={dataSet} name="Result" >
                
                     {columns.map(item=>  <ExcelColumn label={item.name} value={item.feild}/>)}
                    
                   
                </ExcelSheet>
                
            </ExcelFile>
            </div>
        );
    
}


export default Download ;