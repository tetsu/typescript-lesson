export const dateStringToDate = (dateString: string): Date => {
  let dateArray = dateString.split("/").map(
    (value: string): number => {
      return parseInt(value);
    }
  );
  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
