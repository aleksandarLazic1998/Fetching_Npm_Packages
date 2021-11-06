import produce from "immer";
import { IInitialSearchRepo, TRepostioriesAction } from "./TypeScript";
import { Repositories } from "./TypeScript/constants";

const initialState: IInitialSearchRepo = {
	loading: false,
	data: [],
	error: "",
};

const repositoriesReducer = (
	state = initialState,
	action: TRepostioriesAction
) => {
	produce(state, (draft) => {
		switch (action.type) {
			case Repositories.GET_REPOSITORES:
				draft.loading = true;
				return draft;

			case Repositories.GET_REPOSITORES_SUCCESS:
				draft.loading = false;
				draft.data = action.payload;
				return draft;

			case Repositories.GET_REPOSITORES_FAILURE:
				draft.loading = false;
				draft.error = action.payload;
				return draft;
		}
	});
};

export default repositoriesReducer;
