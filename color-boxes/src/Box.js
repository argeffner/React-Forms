import React from 'react';

const Box = ({
    id,
    handleDelete,
    width = 25,
    height = 25,
    backgroundColor ="pink" 
}) => {
    const remove = () => handleDelete(id);
    return (
        <div>
          <div style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor
             }}
          />
          <button onClick={remove}>Delete box</button>
        </div>
    )
}

export default Box;