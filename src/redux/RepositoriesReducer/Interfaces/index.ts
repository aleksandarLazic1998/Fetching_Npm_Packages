import { Reposiories } from "./constants";

/* Initial State Interface */
export interface IInitialSearchRepo {
	loading: boolean;
	data: string[];
	error: string;
}

/* Action Interfaces */
export interface IGetRepositories {
	type: Reposiories.GET_REPOSITORES;
}

export interface IGetRepositoriesSuccess {
	type: Reposiories.GET_REPOSITORES_SUCCESS;
	payload: string[];
}

export interface IGetRepositoriesFailure {
	type: Reposiories.GET_REPOSITORES_FAILURE;
	payload: string;
}

/* Action Type */
export type TRepostioriesAction =
	| IGetRepositories
	| IGetRepositoriesSuccess
	| IGetRepositoriesFailure;
