import React, { useContext } from "react";
import { GithubDataStateContext } from "../../context";
import DataListGroup from "./DataListGroup";

interface DataListProps {
  type: string;
}

const DataList = (props: DataListProps): JSX.Element | null => {
  const { state } = useContext(GithubDataStateContext);
  const { type } = props;

  const items = type === "repos" ? state.repository : state.organization;

  if (state.isLoading) return null;

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
