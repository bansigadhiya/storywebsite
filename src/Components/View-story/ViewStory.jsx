import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { PenFill, Trash3Fill } from 'react-bootstrap-icons';
import { DeleteStoryActionAcync, GetStoryInfoActionAcync } from '../../Services/Actions/Story.action';
import { useNavigate } from 'react-router-dom';
import './Viewstory.css';

function ViewStory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Createstory } = useSelector((state) => state.StoryReducer);

  const handleDelete = (index) => {
    dispatch(DeleteStoryActionAcync(index))
  }

  const handleEdit = (index) => {
    dispatch(GetStoryInfoActionAcync(index));
    navigate('/Editstory');
  }
  return (
    <>
      <Container>
        <h3 className='text-center my-3'>View Your all Stories..</h3>
        <Row>
          {
            Createstory.map((story, index) => {
              return (
                <div className='col-4 mb-4'>
                  <Card>
                    <Card.Img variant="top" src="images/story.jpg" style={{ height: '250px' }} />
                    <Card.Body>
                      <Card.Title>
                        <h4 className='text-warning d-inline-block'>Story topic</h4>{` ${story.topic}`}</Card.Title>
                      <Card.Text>
                        {story.description}
                      </Card.Text>
                      <Button variant="info" className='me-3' onClick={() => { handleEdit(story.id) }}>Edit Story <PenFill style={{ fontSize: '12px' }} /><i class="fa-solid fa-pen"></i></Button>
                      <Button variant="danger" onClick={() => handleDelete(story.id)}>Delete Story <Trash3Fill style={{ fontSize: '12px' }} /></Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }
        </Row>
      </Container>
    </>

  )
}

export default ViewStory
