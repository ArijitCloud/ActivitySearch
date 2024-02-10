import readFileData from "../common/readFileData";
import { Supplier } from "../models";

/**
 * Reads the suppliers from the suppliers.json file
 * @returns an array of suppliers
 */
export const readSuppliers = async () =>
  await readFileData<Supplier>("src/resources/suppliers.json");
