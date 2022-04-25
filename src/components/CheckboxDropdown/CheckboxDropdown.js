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



const CheckboxDropdown = () => {

  const animatedComponents = makeAnimated();

  return (
    <div className="App">
    <Select
      id="select-checkbox-enterprise"
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[categoriesOptions[4], categoriesOptions[5]]}
      isMulti
      options={categoriesOptions}
      placeholder="Seleccione las categorías de su negocio"
     
    />
    </div>
  );
}

export default CheckboxDropdown;