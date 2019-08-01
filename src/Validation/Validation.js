import React from 'react';

const validation = (props) => {
    return (
        <div>
            {
                props.inputLength > 5 ?
                <p>You're doing great (thumbs up)</p> :
                <p>Longer text pleeeaaaase</p>
            }
        </div>
    )
};

export default validation;