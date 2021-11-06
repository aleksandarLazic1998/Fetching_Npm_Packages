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
				<p>Please Wait A Seond Data Is Loading</p>
			) : repositories.error ? (
				<p>repositories.error</p>
			) : (
				<ul>
					{repositories.data.map((repos) => (
						<ListOfPackages repos={repos} />
					))}
				</ul>
			)}
		</div>
	);
};
