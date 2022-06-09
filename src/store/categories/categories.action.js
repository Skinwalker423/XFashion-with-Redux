import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import createAction from "../../utils/reducer/createAction";

export const setCategories = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
}