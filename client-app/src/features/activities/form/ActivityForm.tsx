import React, { ChangeEvent, PureComponent } from 'react';
import { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../apps/models/activity';
interface Props {
    activity :Activity |undefined;
    closeForm:() =>void;
    createOrEdit:(activity:Activity) => void;
}
export default function ActivityForm ({activity: selectedActivity,closeForm,createOrEdit}: Props)
{
    const initialState=selectedActivity ?? 
    {
        id:'',
        title:'',
        category:'',
        description:'',
        date:'',
        city:'',
        venue:''
    }
    const [activity,setActivity] = useState(initialState);
    function handleSubmit(){
        createOrEdit(activity);
    }
    function handleIputChange (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
        const {value , name}=event.target;
        setActivity({...activity,[name]:value})

    }
    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' onChange={handleIputChange} value={activity.title} name='title'/>
                <Form.TextArea placeholder='Description' onChange={handleIputChange} value={activity.description} name='description'/>
                <Form.Input placeholder='Categry'onChange={handleIputChange} value={activity.category} name='category'/>
                <Form.Input placeholder='Date'onChange={handleIputChange} value={activity.date} name='date'/>
                <Form.Input placeholder='City'onChange={handleIputChange} value={activity.city} name='city'/>
                <Form.Input placeholder='Venue'onChange={handleIputChange} value={activity.venue} name='venue'/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={closeForm} floated='right'  type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}