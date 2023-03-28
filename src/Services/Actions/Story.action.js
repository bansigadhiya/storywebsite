import { CREATE_STORY, DELETE_STORY, GETINFO_STORY, UPDATE_STORY, VIEW_STORY } from "../Constant/Action.type";
// import {api} from '../../Api/storyApi';
import api from '../../Api/storyApi'

export const CreateStoryAction = (data) => {
    return {
        type : CREATE_STORY,
        payload : data
    }
}

export const CreateStoryAcync = (data) => {

    return async dispatch => {
        const result = await api.post("/stories",data);
        dispatch(CreateStoryAction(data))
    } 
}

export const ViewStoryAction = (data) => {
    return {
        type : VIEW_STORY,
        payload : data
    }
}

export const ViewStoryAcync = () => {

    return async dispatch => {
        const result = await api.get("/stories");
        dispatch(ViewStoryAction(result.data))
    }
}

export const DeleteStoryAction = (data) => {

    return{
        type : DELETE_STORY,
        payload : data
    }
}

export const DeleteStoryActionAcync = (id) => {

    return async dispatch => {
        const result = await api.delete(`/stories/${id}`);
        dispatch(ViewStoryAcync());
    }
}

export const GetStoryInfoAction = (data) => {

    return{
        type : GETINFO_STORY,
        payload : data
    }
}

export const GetStoryInfoActionAcync = (id) => {

    return async dispatch => {
        const result = await api.get(`/stories/${id}`);
        dispatch(GetStoryInfoAction(result.data))
    }
}

export const UpdateStoryAction = (data) => {

    return{
        type : UPDATE_STORY,
        payload : data
    }
}

export const UpdateStoryActionAcync = (data) => {

    return async dispatch => {
        const result = await api.put(`/stories/${data.id}`,data);
        dispatch(ViewStoryAcync())
    }
}