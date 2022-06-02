import React, { useState } from "react";

const INIT_STATE = {
  image_src: "",
  common_name: "",
  species: "",
  situation_state: "",
  habitat: "",
// fk_related_animals: "",
//   region: "",
};

function AddAnimalForm(props) {
  let [input, setInput] = useState(INIT_STATE);

  function handleSubmit(event) {
    event.preventDefault();
    props.addAnimalCb(input);
    setInput(INIT_STATE);
  }

  function handleChange(event) {
    // setInput(event.target.value);
    let { name, value } = event.target;
    setInput(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <form className="AddAnimalForm" onSubmit={handleSubmit} style={{backgroundColor: "grey"}}>
      <h4>AFEGEIX UN NOU ANIMAL</h4>

      <label>
        Image
        <input
          type="file"
          accept="image/png, image/jpeg"
          name="image_src"
          value={input.image_src}
          onChange={handleChange}/>
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
