import React from 'react';
import Input from "../../shared/components/FormElements/Input";
import './NewPlace.css';

const NewPlace = (props) => {
  return (
      <form className="place-form" onSubmit={props.onSubmit}>
       <Input element="input" type="text" label="Title" />

      </form>
  )
};

export default NewPlace;