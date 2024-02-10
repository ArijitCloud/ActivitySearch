import { Supplier, ActivityMap } from "models";
import { readActivities, readSuppliers } from ".";

/**
 * Map activities to include supplier name and location
 * @returns an array of activities with supplier name and location
 */
export const getMappedActivities = async () => {
  const activities = await readActivities();
  const suppliers = await readSuppliers();
  const supplierMap = new Map<number, Supplier>(
    suppliers.map((s) => [s.id, s])
  );

  // map the activties to include the supplier name and location as city, country
  return activities.map((a) => {
    const supplier = supplierMap.get(a.supplierId);
    const { id, title, price, currency, rating, specialOffer } = a;
    return {
      id,
      title,
      price: `${currency}${price}`,
      rating,
      specialOffer,
      supplierName: supplier?.name || "unknown",
      supplierLocation: `${supplier?.city || "unknown"}, ${
        supplier?.country || "unknown"
      }`,
    };
  }) as ReadonlyArray<ActivityMap>;
};
