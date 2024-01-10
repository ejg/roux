export default (name) => {
  const response = useFetch(`/api/cars/${name}`);
};
