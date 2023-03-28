import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateStory from './Components/CreateStory/CreateStory';
import ViewStory from './Components/View-story/ViewStory';
import EditStory from './Components/EditStory/EditStory';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';

function App() {
  const { isEdit } = useSelector((state) => state.StoryReducer);
  return (
    <>
      <Header />
      <Routes>
        {
          isEdit ? <Route path='/Editstory' element={<EditStory />}></Route> : <Route path='/' element={<CreateStory />}></Route>
        }
        <Route path='/viewstory' element={<ViewStory />}></Route>
      </Routes>
    </>
  );
}

export default App;
