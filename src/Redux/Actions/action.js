import axiosConfig from "../../Utils/axiosConfig";
import { BASE_URL } from "../../Utils/Constants";
import { REPODATA_FAILED, REPODATA_SUCCESS, REQUEST_REPODATA } from "../Types/types";

export const setRepoDatLoading = () =>  dispatch => {
        dispatch({
            type: REQUEST_REPODATA,
        })
}

export const getRepoData = (name)=>  dispatch => {
    dispatch(setRepoDatLoading())
    axiosConfig
      .get(BASE_URL + name  +"/repos")
      .then((res) => {
        if (res.status !== 200) throw new Error();
        dispatch({
            type: REPODATA_SUCCESS,
            payload: res.data,
        })
      })
      .catch((err) => {
        dispatch({
            type: REPODATA_FAILED,
        })
     })
}