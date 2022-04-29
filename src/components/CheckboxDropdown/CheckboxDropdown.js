import { OptionsStore } from '@progress/kendo-drawing';
import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './CheckboxDropdown.css';

const categoriesOptions = [
  { value: 'Vehículos', label:'Vehículos'},
  { value: 'Tecnología', label:'Tecnología'},
  { value: 'Hogar y muebles', label:'Hogar y muebles'},
  { value: 'Deportes y Fitness', label:'Deportes y Fitness'},
  { value:'Salud y Equipamiento médico', label:'Tiendas Oficiales'},
  { value: 'Inmuebles', label:'Accesorios para vehículos'},
  { value: 'Belleza y cuidado personal', label:'Belleza y cuidado personal'},
  { value: 'Herramientas', label:'Herramientas'},
  { value: 'Productos sustentables', label:'Productos Sustentables'},
  { value: 'Supermercado', label: 'Supermercado'},
  { value: 'Electrodomésticos', label:'Electrodomésticos'},
  { value: 'Moda', label:'Moda'},
  { value: 'Construcción', label:'Construcción'},
  { value: 'Industrias y Oficinas', label:'Industrias y Oficinas'},
];



const CheckboxDropdown = (props) => {
console.log(props.defaultValue);
// let labels = props.defaultValue.map(label=>{
//   return label.id;
// })
// console.log(labels);
  const animatedComponents = makeAnimated();
  const [selectState, setselectState] = useState();
  const handleSelectChange = (event)=>{
console.log(event);
  }

  return (
    <div className="App">
    <Select
      id="select-checkbox-enterprise"
      getOptionValue={option => option.id}
      getOptionLabel={option => option.name}
      closeMenuOnSelect={true}
      components={animatedComponents}
      // defaultValue={[categoriesOptions[4], categoriesOptions[5]]}
        defaultValue={props.defaultValue}
      // defaultValue={labels}
      isMulti
      // options={categoriesOptions}
      options={props.options}
      placeholder={props.placeholder}
     onChange={props.handleSelectChange}
    />
    </div>
  );
}

export default CheckboxDropdown;