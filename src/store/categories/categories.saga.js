import { all, call, takeLatest, put, take } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase-utils";

import { fetchCategoriesFail, fetchCategoriesSuccess } from "./categories.action";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// export const fetchCategoriesAsyn = () => async(dispatch) => {
//     dispatch(fetchCategoriesStart())
//     try{
//         const categoriesArray = await getCategoriesAndDocuments();
//         dispatch(fetchCategoriesSuccess(categoriesArray));
    
//     }catch(error){
//         dispatch(fetchCategoriesFail(error.message))
//     }
    
// }

export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoriesArray));
    
    }catch(error){
        yield put(fetchCategoriesFail(error.message))
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}