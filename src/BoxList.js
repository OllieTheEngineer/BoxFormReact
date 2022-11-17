import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"

const BoxList = () => {
    const [box, setBox] = useState([]);
    const addBox = newBox => {
        setBox(box => [...box, newBox]);
    };

    const removeBox = (e) => {
    const [id] = e.target;
    setBox(box => box.filter(e.target.remove(id)));
    }

    const boxComponent = box.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            handleRemove={removeBox} />
    ))

    return (
        <div>
        <NewBoxForm newBox={addBox}/>
        {boxComponent}
        </div>
    );

}

export default BoxList;