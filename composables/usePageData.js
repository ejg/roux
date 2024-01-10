import routeData from '@/assets/data/routeData.json';
const usePageData = () => {
  const route = useRoute();
  const error = useError();

  const myRoute = computed(() => getRoute());

  const title = computed(() => getTitle());
  const pageTitle = computed(() => getPageTitle());
  const parentPage = computed(() =>
    route.params.name ? route.name.split('-')[0].toUpperCase() : ''
  );

  useHead({
    title: title,
    titleTemplate: 'Roux Cubing: %s',
  });

  function getRoute() {
    let data;
    data = routeData.find((data) => data.name === route.name);
    if (!!data && !!data.sub) {
      data = data.sub.find((data) => data.name === route.params.name);
    }
    return data;
  }
  function getTitle() {
    let title;
    if (!!error.value) {
      title = 'Error';
    } else if (route.params.name) {
      title = `${parentPage.value} - ${route.params.name}`;
    } else if (route.name === 'index') {
      title = 'Home';
    } else {
      title = route.name.toUpperCase();
    }
    return title;
  }
  function getPageTitle() {
    let pageTitle;
    if (!!error.value) {
      pageTitle = 'Error';
    } else if (!!myRoute.value) {
      if (route.params.name) {
        pageTitle = `${parentPage.value} - ${myRoute.value.pageTitle}`;
      } else {
        pageTitle = myRoute.value.pageTitle;
      }
    } else {
      pageTitle = route.name;
    }
    return pageTitle;
  }

  return {
    title,
    pageTitle,
  };
};

export default usePageData;
