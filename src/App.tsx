import React from "react";
import { useDispatch } from "react-redux";
import { DisplayField } from "./components/DisplayField";
import { SearchField } from "./components/SearchField";
import { useGlobalSelector } from "./redux/Hooks";
import searchNpmsActionCreator from "./redux/RepositoriesReducer/SeachNpmPackages";

function App() {
	const dispatch = useDispatch();
	const repositoriesState = useGlobalSelector((state) => state.repositories);

	const handleSubmitForm = (term: string) => {
		dispatch(searchNpmsActionCreator(term));
	};

	return (
		<>
			<h1>Search For Any NPM Package</h1>
			<SearchField handleSubmitForm={handleSubmitForm} />
			<DisplayField repositories={repositoriesState} />
		</>
	);
}

export default App;
