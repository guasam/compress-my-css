export default {
  baba: console.log('gopa', process.env),
  base: process.env.NODE_ENV === 'production' ? '/compress-my-css/' : '/',
};
