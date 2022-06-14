import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import createAction from "../../utils/reducer/createAction";

export const setCategories = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
}
export const fetchCategoriesStart =() => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
}
export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
}
export const fetchCategoriesFail = (error) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)
}

// export const fetchCategoriesAsync = () => async(dispatch) => {
//     dispatch(fetchCategoriesStart())
//     try{
//         const categoriesArray = await getCategoriesAndDocuments();
//         dispatch(fetchCategoriesSuccess(categoriesArray));
    
//     }catch(error){
//         dispatch(fetchCategoriesFail(error.message))
//     }
    
// }