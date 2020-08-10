import React from "react";
import { Card } from "react-bootstrap";

interface DataProps {
  subtitle?: string;
}

interface DataCardProps extends DataProps {
  title: string;
  subtitle?: string;
}

const defaultProps: DataProps = {
  subtitle: "No description",
};

const DataCard = (props: DataCardProps): JSX.Element => {
  const { title, subtitle } = props;

  return (
    <div style={{ width: "100%" }}>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
    </div>
  );
};

DataCard.defaultProps = defaultProps;

export default DataCard;
