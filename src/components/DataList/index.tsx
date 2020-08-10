import React, { useContext } from "react";
import { GithubDataStateContext } from "../../context";
import DataListGroup from "./DataListGroup";
import NotFound from "../Pages/NotFound";

interface DataListProps {
  type: string;
}

const DataList = (props: DataListProps): JSX.Element => {
  const { state } = useContext(GithubDataStateContext);
  const { type } = props;

  const items = type === "repos" ? state.repository : state.organization;

  if (!state.isLoading && (!items || items?.length === 0))
    return <NotFound type={type} />;

  return (
    <DataListGroup
      items={(items as Array<any>).map((item: any) => {
        return {
          name: item.name || item.login,
          description: item.description,
          id: item.id,
        };
      })}
    />
  );
};

export default DataList;
