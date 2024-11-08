import { useState, useEffect} from "react";


export default function Form ({onAddPlant}){
    const  [form, setForm]= useState ({
            name:'',
         image: '',
          price: 0
        });
        function handleOnChange(event) {
            const { name, value } = event.target;
            setForm({
              ...form,
              [name]: value
            });
          }
          function handleOnSubmit(event) {
            event.preventDefault();
            onAddPlant(form);
            setForm({
              name: "",
              image: "",
              price: 0
            });
          }
    return (
       
       
            <form onSubmit={handleOnSubmit} className="form">
                <h4>New Plant</h4>
                <input
                name="name"
                type="text"
                value={form.name}
                placeholder="Plant name"
                onChange={handleOnChange}
                />
                <input
                name="image"
                type="text"
                value={form.image}
                placeholder="image URL"
                onChange={handleOnChange}
                />
                 <input
                 name="price"
                type="number"
                value={form.price}
                placeholder="price"
                onChange={handleOnChange}
                />
                <button
                type="submit"
                >
                Add plant
                </button>
            </form>
       
    )


}