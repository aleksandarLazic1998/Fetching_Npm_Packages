import React from "react";

interface IListOfPackagesProps {
	repos: string;
}

export const ListOfPackages: React.FC<IListOfPackagesProps> = ({
	repos: name,
}) => <li>{name.charAt(0).toUpperCase() + name.slice(1)}</li>;
