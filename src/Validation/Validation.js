import React from 'react';

const validation = (props) => {
    let validationMessage = 'Longer text pleeeaaaase';

    if (props.inputLength > 5) {
        validationMessage = 'Thumbs up!';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
};

export default validation;