import { Repositories } from "./constants";

/* Initial State Interface */
export interface IInitialSearchRepo {
	loading: boolean;
	data: string[];
	error: string;
}

/* Action Interfaces */
export interface IGetRepositories {
	type: Repositories.GET_REPOSITORES;
}

export interface IGetRepositoriesSuccess {
	type: Repositories.GET_REPOSITORES_SUCCESS;
	payload: string[];
}

export interface IGetRepositoriesFailure {
	type: Repositories.GET_REPOSITORES_FAILURE;
	payload: string;
}

/* Action Type */
export type TRepostioriesAction =
	| IGetRepositories
	| IGetRepositoriesSuccess
	| IGetRepositoriesFailure;
