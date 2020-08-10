import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ListGroup, Button } from "react-bootstrap";
import DataCard from "./DataCard";

type Data = {
  name: string;
  description: string;
  id: string;
};

interface DataListItems {
  items: Array<Data>;
}

const DataListGroup = (
  props: PropsWithChildren<DataListItems>
): JSX.Element => {
  const { items } = props;
  const [listitems, setItems] = useState<any>([]);
  const [lastCount, setLastCount] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const populateList = useCallback(
    (count: number) => {
      const arr = [...items.slice(0, count + 5)];

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      items.length > arr.length ? setShowMore(true) : setShowMore(false);

      setLastCount((i) => {
        return count === 0 ? 5 : i + 5;
      });
      setItems(arr);
    },
    [items]
  );

  useEffect(() => {
    if (items) {
      populateList(0);
    }
  }, [items, populateList]);

  return (
    <ListGroup variant="flush">
      {listitems.map((child: Data) => (
        <ListGroup.Item key={child.id}>
          <DataCard title={child.name} subtitle={child.description} />
        </ListGroup.Item>
      ))}
      {showMore && (
        <Button onClick={() => populateList(lastCount)}>Show more</Button>
      )}
    </ListGroup>
  );
};

export default DataListGroup;
