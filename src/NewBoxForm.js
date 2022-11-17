import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewBoxForm = ({newBox}) => {
    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [ formData, setFormData ] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="height">Height</label>
                <input
                    type="text"
                    name="height"
                    id="id"
                    value={formData.height}
                    onChange={handleChange} />
                <label htmlFor="width">Width</label>
                <input
                    type="text"
                    name="width"
                    id="id"
                    value={formData.width}
                    onChange={handleChange} />
                <label htmlFor="bkgrdclr">Background Color</label>
                <input
                    type="text"
                    name="background_color"
                    id="color"
                    value={formData.backgroundColor}
                    onChange={handleChange} />

                <button onClick={handleSubmit}>Add Box</button>
            </form>
        </div>
    )

}

export default NewBoxForm;