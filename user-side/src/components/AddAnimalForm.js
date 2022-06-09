import React, { useState } from "react";

const INIT_STATE = {
  common_name: "",
  species: "",
  situation_state: "",
  habitat: "",
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
  <div className="flex justify-center items-center flex-wrap mx-auto mb-6 bg-[#FFFFFF] bg-opacity-60">
   <form className="p-10 w-full max-w-lg grid grid-cols-1" onSubmit={handleSubmit}>
      <h4 className="block uppercase text-center tracking-wide text-black text-2xl font-bold mb-2 pb-5">AFEGEIX UN NOU ANIMAL</h4>

      <label className="block uppercase text-center tracking-wide text-black text-m font-bold mb-2">
        Image
        <input
          className="appearance-none w-full block w-full bg-gray-200 text-gray-700 border-2 border-[#4C473F]  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-[#FFFFFF] bg-opacity-60"
          type="file"
          onChange={handleFileChange}
          required/>
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="block uppercase text-center tracking-wide text-black text-m font-bold mb-2">
          Nom comú
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-[#4C473F] rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-[#FFFFFF] bg-opacity-60"
            type="text"
            name="common_name"
            value={input.common_name}
            onChange={handleChange}/>
        </label>

        <label className="block uppercase text-center tracking-wide text-black text-m font-bold mb-2">
          Espècie
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-[#4C473F] rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-[#FFFFFF] bg-opacity-60"
            type="text"
            name="species"
            value={input.species}
            onChange={handleChange}/>
        </label>
      </div>

      <label className="block uppercase text-center tracking-wide text-black text-m font-bold mb-2">
        Població
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-[#4C473F] rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-[#FFFFFF] bg-opacity-60"
          name="situation_state"
          value={input.situation_state}
          onChange={handleChange}>
        </textarea>
      </label>

      <label className="block uppercase text-center tracking-wide text-black text-m font-bold mb-2">
        Hàbitat
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-[#4C473F] rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-[#FFFFFF] bg-opacity-60"
          name="habitat"
          value={input.habitat}
          onChange={handleChange}>
        </textarea>
      </label>

      <label className="block uppercase text-center tracking-wide text-black text-m font-bold mb-2" 
             for="region"
             >
             Regió
      </label>
      <select id="region" name="region" className="appearance-none w-full block w-full bg-gray-200 text-gray-700 border-2 border-[#4C473F]  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-[#FFFFFF] bg-opacity-60">
        <option value="" disabled selected hidden>Choose a region</option>
        {props.regions.map((r) => (
        <option value="region_name" key={r.id}>{r.region_name}</option>
        ))}
      </select>
      

      {" "}

      <div className="flex justify-center items-center">
        <button className="mt-4 p-4 px-6 bg-[#E28E10] rounded-lg text-lg" type="submit">Envia</button>
      </div>
   </form>
 </div>
  );
}

export default AddAnimalForm;
