import React from 'react'
import FormInput from './FormInput';
import Button from './Button';

export default function Form() {
  const fields = [
    {
      "name": "Name",
      "type": "text",
    },
    {
      "name": "Email",
      "type": "email",
    },
    {
      "name": "Comment",
      "type": "text",
    }
  ];
  console.log(fields);
  return (
    <>
      <FormInput fields={fields} />
      <Button name='Submit' />
    </>
  )
}
