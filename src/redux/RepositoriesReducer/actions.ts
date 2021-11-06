import { Repositories } from "./TypeScript/constants";

export const getRepositories = () => {
	return {
		type: Repositories.GET_REPOSITORES,
	};
};

export const getRepositoriesSuccess = (payload: string[]) => {
	return {
		type: Repositories.GET_REPOSITORES_SUCCESS,
		payload,
	};
};

export const getRepositoriesFailure = (payload: string) => {
	return {
		type: Repositories.GET_REPOSITORES_FAILURE,
		payload,
	};
};
