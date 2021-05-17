import React, {useState} from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList () {
    const [boxArr, setBoxArr] = useState([]);
    const add = newBox => {
        // add new box to box list
        setBoxArr(boxArr => [...boxArr, newBox])
    };
    const remove = id => {
        // use filter since splice and slice mutate array
        // items.filter(item => item !== valuetoremove)
        setBoxArr(boxArr => 
            boxArr.filter(box => box.id !== id))
    };

    const boxParts = boxArr.map(box => (
        // add date to each box in the Array
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleDelete={remove}
            backgroundColor={box.backgroundColor}
        />
        ));

    return (
       <div>
           <NewBoxForm makeBox={add} /> {/* add new box from form*/}
           {boxParts} {/* box array*/}
       </div>
    )
}

export default BoxList;