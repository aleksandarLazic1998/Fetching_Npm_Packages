import axios from "axios";
import { Dispatch } from "redux";
import { TRepostioriesAction } from "../TypeScript";
import { Repositories } from "../TypeScript/constants";

export const searchNpmsActionCreator = (term: string) => {
	return async (dispatch: Dispatch<TRepostioriesAction>) => {
		dispatch({
			type: Repositories.GET_REPOSITORES,
		});

		try {
			const response = await axios({
				url: `https://registry.npmjs.org/-/v1/search?text=${term}`,
				method: "GET",
			});
			const { objects } = response.data;

			const names = objects.map(
				(result: { package: { name: string } }) => result.package.name
			);

			dispatch({
				type: Repositories.GET_REPOSITORES_SUCCESS,
				payload: names,
			});
		} catch (error: any) {
			dispatch({
				type: Repositories.GET_REPOSITORES_FAILURE,
				payload: error.message,
			});
		}
	};
};

export default searchNpmsActionCreator;
