import { Activity } from "../../types/activity";
import "./DataView.css";

export interface DataViewProps {
  data: ReadonlyArray<Activity>;
}
export const DataView = ({ data }: DataViewProps) => {
  const columnHeaders = [
    "Title",
    "Price",
    "Rating",
    "Special Offer",
    "Supplier Name",
    "Supplier Location",
  ];
  return (
    <div className="grid-container" role="grid">
      <div
        className="header-row"
        role="row"
        tabIndex={0}
        aria-label="column headers"
      >
        {columnHeaders.map((header) => (
          <div className="column" role="columnheader" tabIndex={0} key={header}>
            {header}
          </div>
        ))}
      </div>

      {data.map((item, index) => (
        <div
          className="item-row"
          key={item.id}
          role="row"
          tabIndex={0}
          aria-label={`row ${index}`}
        >
          <div className="column" role="gridcell" tabIndex={0}>
            {item.title}
          </div>
          <div className="column" role="gridcell" tabIndex={0}>
            {item.price}
          </div>
          <div className="column" role="gridcell" tabIndex={0}>
            {item.rating}
          </div>
          <div className="column" role="gridcell" tabIndex={0}>
            {item.hasSpecialOffer ? "Yes" : "No"}
          </div>
          <div className="column" role="gridcell" tabIndex={0}>
            {item.supplierName}
          </div>
          <div className="column" role="gridcell" tabIndex={0}>
            {item.supplierLocation}
          </div>
        </div>
      ))}
    </div>
  );
};
