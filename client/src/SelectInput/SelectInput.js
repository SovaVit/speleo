import React from 'react';
import {Input} from 'reactstrap';

const SelectOptions = ["...","Озерна","Млинки","Оптимістична"];

export const Select = (props) => {

const handleOptions=() => {
   
return SelectOptions.map((item,index) => {return <option key={index} value={item}>{item}</option>}) 
};
return(
    <Input {...props} >
           {handleOptions()}
          </Input>
)
};

