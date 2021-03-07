import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`
const FormWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110vh;
    padding: 0px 20px;
`
const ContactForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`
const Input = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
`
const TextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${sharedStyles}
`
const Button = styled.button`
    display: block;
    background-color: #000d1a;
    color: #fff;
    font-size: .9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`

const Fieldset = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;

    legend {
        padding: 0 10px;
    }

    label {
        padding-right: 20px;
    }

    input {
        margin-right: 10px;
    }
`
const InputError = styled.div`
    color: red;
    font-weight: 700;
    margin: 0 0 40px 0;
` 

const initialState = { 
    name: '',
    email: '',
    message: '',
    reference: '',
}


const Form = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();


        for (let key in state) {
            if (state[key] === '') {
                setError(`You must provide the ${key}`)

                return 
            }
        }
        setError('');
        setState(initialState);
    }

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputName]: value}))
    }

    return (
        <>
            <FormWrap>
                <ContactForm action="https://formspree.io/f/xdoprylv" method="POST">
                    <h2>Contact Form</h2>
                    <label htmlFor="name">Name</label>
                    <Input type="text" name="name" value={state.name} onChange={handleInput}/>
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" value={state.email} onChange={handleInput}/>
                    <Fieldset>
                        <legend>Reference</legend>
                        <label>
                            <input type="radio" value="Renter" name="reference" checked={state.reference === 'Renter'} onChange={handleInput}/>
                            Renter
                        </label>
                        <label>
                            <input type="radio" value="Buyer" name="reference" checked={state.reference === 'Buyer'} onChange={handleInput}/>
                            Buyer
                        </label>
                    </Fieldset>
                    <label htmlFor="message">Message</label>
                    <TextArea name="message" value={state.message} onChange={handleInput}/>
                    {error && (
                        <InputError>
                            <p>{error}</p>
                        </InputError>
                    )}
                    
                    <Button type="submit" value="Send">Submit</Button>
                </ContactForm>
            </FormWrap>
        </>
    )
}

export default Form
