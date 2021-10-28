import { REPODATA_FAILED, REPODATA_SUCCESS, REQUEST_REPODATA } from "../Types/types";

  const initialState = {
    repoData: [],
    loading:false
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case REPODATA_SUCCESS:
        return {
          ...state,
          repoData:  action.payload,
          loading:false
        };
      case REPODATA_FAILED:
        return {
          ...state,
          loading:false
        };
      case REQUEST_REPODATA:
        return {
          ...state,
          loading: true
        };
     
  
      default:
        return state;
    }
  }
  