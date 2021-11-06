import React from "react";
import { ListOfPackages } from "./ListOfPackages";

interface IDisplayFieldProps {
	repositories: {
		loading: boolean;
		data: string[];
		error: string;
	};
}

export const DisplayField: React.FC<IDisplayFieldProps> = ({
	repositories,
}) => {
	return (
		<div style={{ border: "solid 1px black" }}>
			{repositories.loading ? (
				<p>Please Wait A Second Data Is Loading ...</p>
			) : repositories.error ? (
				<p>repositories.error</p>
			) : repositories.data.length > 0 ? (
				<ul>
					{repositories.data.map((repos) => (
						<ListOfPackages repos={repos} />
					))}
				</ul>
			) : (
				<p>That Package Do Not Exist Yet :(</p>
			)}
		</div>
	);
};
