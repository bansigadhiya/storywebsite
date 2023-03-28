import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditStory.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {CreateStoryAcync, UpdateStoryActionAcync, ViewStoryAcync } from '../../Services/Actions/Story.action';

function EditStory() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {storyInfo} = useSelector((state) => state.StoryReducer);

    const [initial,setInitial] = useState(storyInfo)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({
            ...initial , [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = initial;
        dispatch(UpdateStoryActionAcync(data));
        setInitial({
            title : '',
            author : ''
        })
        navigate('/viewstory'); 
    }

    const handleViewStory = () => {
        dispatch(ViewStoryAcync())
        navigate('/viewstory');
    }

    return (
        <div >
            <div className='bg'>
                <div className="detail">
                    <Form className='bg-white p-3 rounded-3 w-50 mx-auto text-start' onSubmit={(e) => {handleSubmit(e)}}>
                    <h4 className='text-white'>Edit Your Story..</h4>
                        <hr className='mb-0'></hr>
                        <hr className='mt-0'></hr>
                        <Form.Group className="mb-3 text-start">
                            <Form.Control type="text" placeholder="Enter story topic.." name='topic' value={initial.topic} onChange={(e) => {handleChange(e)}} className='border-0'/>
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <div className='form-control'>
                                <textarea cols={50} rows={6} className='border-0' placeholder='Enter Description..' name='description' value={initial.description} onChange={(e) => {handleChange(e)}}></textarea>
                            </div>
                        </Form.Group>
                        <div className='d-flex align-items-center justify-content-between'>
                        <Button variant="primary" type="submit" className='py-2 px-4 button-bg'>
                            Update
                        </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default EditStory
