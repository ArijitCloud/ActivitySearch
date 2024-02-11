import { Activity } from "../../types/activity";
import "./DataView.css";

export interface DataViewProps {
  data: ReadonlyArray<Activity>;
}
export const DataView = ({ data }: DataViewProps) => {
  return (
    <div className="grid-container">
      <div className="header-row">
        <div className="column">Title</div>
        <div className="column">Price</div>
        <div className="column">Rating</div>
        <div className="column">Special Offer</div>
        <div className="column">Supplier Name</div>
        <div className="column">Supplier Location</div>
      </div>
      {data.map((item) => (
        <div className="item-row" key={item.id}>
          <div className="column">{item.title}</div>
          <div className="column">{item.price}</div>
          <div className="column">{item.rating}</div>
          <div className="column">{item.hasSpecialOffer ? "Yes" : "No"}</div>
          <div className="column">{item.supplierName}</div>
          <div className="column">{item.supplierLocation}</div>
        </div>
      ))}
    </div>
  );
};
