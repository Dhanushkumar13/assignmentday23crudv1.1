import React, {useState} from 'react';
import {Form,Button} from 'semantic-ui-react'
import {API_URL} from '../Constants/Url'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('')
    const navigate = useNavigate();

    const postData = async()=> {
        await axios.post(API_URL, {firstName,lastName,email})
        navigate('/read')
    }
  return (
    <Form>
        <Form.Field className='Form'>
            <label>First Name</label>
            <input value={firstName} onChange={event => setfirstName(event.target.value)} placeholder='Enter First Name' />
        </Form.Field>
        <br/>
        <Form.Field>
            <label>Last Name</label>
            <input value={lastName} onChange={event => setlastName(event.target.value)} placeholder='Enter Last Name' />
        </Form.Field>
        <br/>
        <Form.Field>
            <label>Email</label>
            <input value={email} onChange={event => setemail(event.target.value)} placeholder='Enter email ID' />
        </Form.Field>
        <Form.Field>
            <button onClick={postData}>Submit</button>
        </Form.Field>
    </Form>

  )
}
