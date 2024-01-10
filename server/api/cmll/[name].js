import algorithms from '@/assets/data/cmll.json';

export default defineEventHandler((event) => {
  const { name } = event.context.params;

  let pageAl;

  pageAl = algorithms.filter((al) => {
    return al.cmll.toLowerCase() === name.toLowerCase();
  });

  return pageAl;
});
