import React, { useRef } from "react";

interface ISeacrchFieldProps {
	handleSubmitForm(term: string | undefined): void;
}

export const SearchField: React.FC<ISeacrchFieldProps> = ({
	handleSubmitForm,
}) => {
	const npmRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const searchedTerm = npmRef.current?.value;

		handleSubmitForm(searchedTerm);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" ref={npmRef} />
			<button>Seach For Item</button>
		</form>
	);
};
