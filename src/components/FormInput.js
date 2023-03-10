import React from 'react'

export default function FormInput(props) {
    console.log(props.fields);
    const formInputs = props.fields.map((element) => {
        return (
            <>
                <p>{element.name}</p>
                <input name={element.name} type={element.type} />
            </>
        )
    }
    );
    return (
        <div>
            {formInputs}
        </div>
    )
}
