import routeData from '@/assets/data/routeData.json';
const usePageData = () => {
  const route = useRoute();
  const error = useError();

  const title = computed(() => (!!error.value ? 'Error' : route.name));

  const myRoute = computed(() =>
    routeData.find((data) => data.name === route.name)
  );

  const pageTitle = computed(() =>
    !!myRoute.value
      ? myRoute.value.pageTitle
      : !!error.value
      ? 'Error'
      : route.name
  );

  useHead({
    title: title,
    titleTemplate: 'Roux Cubing: %s',
  });

  return {
    title,
    pageTitle,
  };
};

export default usePageData;
