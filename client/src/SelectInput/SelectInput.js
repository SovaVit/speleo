import React from 'react';
import {Input} from 'reactstrap';

export const CavesOptions = ["...","Озерна","Млинки","Оптимістична"];
export const typeCaves = ["...","Вертикальна","Горизонтальна"];
export const region = ["...", 1, 2, 3, 4, 5];
export const typeRock =["...", "Гіпсова", "Вапнякова"];

export const Select = (props) => {

const handleOptions=(options) => {
   
return options.map((item,index) => {return <option key={index} value={item}>{item}</option>}) 
};
return(
    <Input {...props} >
           {handleOptions(props.options)}
          </Input>
)
};

