import React from "react";
import { useDispatch } from "react-redux";
import { SearchField } from "./components/SearchField";
import { useGlobalSelector } from "./redux/Hooks";
import searchNpmsActionCreator from "./redux/RepositoriesReducer/Actions";

function App() {
	const dispatch = useDispatch();
	const repositoriesState = useGlobalSelector((state) => state.repositories);
	console.log(repositoriesState);

	const handleSubmitForm = (term: string) => {
		dispatch(searchNpmsActionCreator(term));
	};

	return (
		<>
			<h1>Search For Any NPM Package</h1>
			<SearchField handleSubmitForm={handleSubmitForm} />
		</>
	);
}

export default App;
