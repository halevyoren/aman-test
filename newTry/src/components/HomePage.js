import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import {
  Input,
  InputLabel,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getAllLogs } from '../actions/callLogActions';

const HomePage = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [viewLogs, setViewLogs] = useState(false);
  const [viewContacts, setViewContacts] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [Date, setDate] = useState('');

  const dispatch = useDispatch();

  const AllCallLogs = useSelector((state) => state.AllCallLogs);

  console.log(AllCallLogs);

  const addContacts = () => {
    if (name !== '' && phoneNumber !== '') {
      const newContact = {
        name: name,
        phoneNumber: phoneNumber
      };
      setContacts((prev) => [...prev, newContact]);
      localStorage.setItem(
        'contacts',
        JSON.stringify([...contacts, newContact])
      );
    }
  };

  useEffect(() => {
    dispatch(getAllLogs());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='leftSide'>
        <form className='add-contacts-form' noValidate autoComplete='off'>
          <TextField
            label='Contact Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ paddingBottom: '10px' }}
          />

          {/* <TextField
            id='date'
            label='Birthday'
            type='date'
            defaultValue='2017-05-24'
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true
            }}
          /> */}
          {/* <TextField label='Phone Number' /> */}
          <Button variant='contained' color='primary' onClick={addContacts}>
            ADD CONTACT
          </Button>
        </form>
        <Select>
          {contacts.map((contact) => (
            <MenuItem>
              {contact.name} {contact.phoneNumber}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setViewContacts((prev) => !prev)}
        >
          Toggle Contacts
        </Button>
        {viewContacts &&
          contacts.map((contact) => (
            <p>
              {contact.name} {contact.phoneNumber}
            </p>
          ))}
      </div>
      <div className='rightSide'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setViewLogs((prev) => !prev)}
        >
          Toggle Logs
        </Button>
        {viewLogs && 'showing logs'}
      </div>
    </div>
  );
};

export default HomePage;
