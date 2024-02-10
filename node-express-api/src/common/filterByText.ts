/**
 * Filter an array of objects by a property and a search text
 * @param data array of objects
 * @param prop property to filter by
 * @param text text to search for
 * @returns
 */
const filterByText = <T, K extends keyof T>(
  data: ReadonlyArray<T>,
  prop: K,
  text: string
) => {
  return data.filter((d: T) => String(d[prop]).toLowerCase().includes(text.toLowerCase()));
};
export default filterByText;
