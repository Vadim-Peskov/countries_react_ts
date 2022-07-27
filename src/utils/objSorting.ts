const objSorting = (arr: any[], value: string) => {
  const sortedArr =  arr.sort((a, b) =>
    a[value] > b[value] ? 1 : -1
  );
  return sortedArr;
}

export default objSorting;