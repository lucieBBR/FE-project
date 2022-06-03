import React, { useState } from "react";

const INIT_STATE = {
  // image_src: "",
  common_name: "",
  species: "",
  situation_state: "",
  habitat: "",
// fk_related_animals: "",
//   region: "",
};

function AddAnimalForm(props) {
  const [input, setInput] = useState(INIT_STATE);
  const [file, setFile] = useState(null);

  function handleChange(event) {
    let { name, value } = event.target;
    setInput(data => ({
      ...data,
      [name]: value
      }));
    }

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    // Create FormData obj and append everything to upload
    let formData = new FormData();
    formData.append('common_name', input.common_name);
    formData.append('species', input.species);
    formData.append('situation_state', input.situation_state);
    formData.append('habitat', input.habitat);
    formData.append('image_src', file, file.name);

    // Call parent's callback
    props.addAnimalCb(formData);

    // Reset everything
    setInput(INIT_STATE);
    setFile(null);  // remove filename of previous file
    event.target.reset(); 
  }


  return (
    <form className="AddAnimalForm" onSubmit={handleSubmit} style={{backgroundColor: "grey"}}>
      <h4>AFEGEIX UN NOU ANIMAL</h4>

      <label>
        Image
        <input
          type="file"
          onChange={handleFileChange}
          required/>
      </label>

      <label>
        Nom comú
        <input
          type="text"
          name="common_name"
          value={input.common_name}
          onChange={handleChange}/>
      </label>

      <label>
        Espècie
        <input
          type="text"
          name="species"
          value={input.species}
          onChange={handleChange}/>
      </label>

      <label>
        Població
        <textarea
          name="situation_state"
          value={input.situation_state}
          onChange={handleChange}>
        </textarea>
      </label>

      <label>
        Hàbitat
        <textarea
          name="habitat"
          value={input.habitat}
          onChange={handleChange}>
        </textarea>
      </label>
      
      <button type="submit">Envia</button>
    </form>
  );
}

export default AddAnimalForm;
