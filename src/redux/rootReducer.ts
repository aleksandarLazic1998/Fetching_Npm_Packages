import { combineReducers } from "redux";
import repositoriesReducer from "./RepositoriesReducer/reducer";

export const reducer = combineReducers({
	repositories: repositoriesReducer,
});

export type RootReducer = ReturnType<typeof reducer>;
