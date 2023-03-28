import { CREATE_STORY, DELETE_STORY, GETINFO_STORY, UPDATE_STORY, VIEW_STORY } from "../Constant/Action.type"

const initialState = {
    Createstory : [],
    storyInfo : {},
    isEdit : false
}

const StoryReducer = (state = initialState,action) => {

    switch(action.type){
        case CREATE_STORY :
            return state;
            break;
        case VIEW_STORY :
            return{
                ...state,
                Createstory : action.payload,
                isEdit : false
            }
            break;
        case GETINFO_STORY :
            return{
                ...state,
                storyInfo : action.payload,
                isEdit : true
            }
            break;
        case UPDATE_STORY:
            return {
                ...state,
                isEdit : false
            }
            break;
        case DELETE_STORY :
            return state;
            break;
        default :
            return state;
    }
}

export default StoryReducer;