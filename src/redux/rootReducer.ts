import { combineReducers } from "redux";
import repositoriesReducer from "./RepositoriesReducer/reducer";

const reducer = combineReducers({
	repositories: repositoriesReducer,
});
export default reducer;
export type RootReducer = ReturnType<typeof reducer>;
