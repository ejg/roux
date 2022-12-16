const usePageData = () => {
  let title;
  let pageTitle;
  const route = useRoute();
  const error = useError();

  console.log('page data', error.value);
  if (!!error.value) {
    title = 'Error!';
  } else {
    title = 'Roux Cubing';
  }
  const head = useHead({
    title: title,
    titleTemplate: '~~ %s ~~',
  });
  console.log('head', head);
  // const isDarkMode = useState("darkMode" , () => false);
  return {
    title,
    pageTitle,
  };
};

export default usePageData;
