import React from "react";
import { SearchField } from "./components/SearchField";

function App() {
	const handleSubmitForm = (term: string) => {
		console.log(term);
	};

	return (
		<>
			<h1>Search For Any NPM Package</h1>
			<SearchField handleSubmitForm={handleSubmitForm} />
		</>
	);
}

export default App;
