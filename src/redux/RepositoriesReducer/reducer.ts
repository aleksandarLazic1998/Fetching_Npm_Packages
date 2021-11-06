import produce from "immer";
import { IInitialSearchRepo, TRepostioriesAction } from "./Interfaces";
import { Reposiories } from "./Interfaces/constants";

const initialState: IInitialSearchRepo = {
	loading: false,
	data: [],
	error: "",
};

const repositoriesReducer = (
	state: IInitialSearchRepo = initialState,
	action: TRepostioriesAction
) => {
	produce(state, (draft) => {
		switch (action.type) {
			case Reposiories.GET_REPOSITORES:
				draft.loading = true;
				break;

			case Reposiories.GET_REPOSITORES_SUCCESS:
				draft.loading = false;
				draft.data = action.payload;
				break;

			case Reposiories.GET_REPOSITORES_FAILURE:
				draft.loading = false;
				draft.error = action.payload;
				break;
		}
	});
};

export default repositoriesReducer;
