export const errorInterceptor = (err) => {
  const { status } = err.response;
  if (status === 404 || status === 500) {
   alert("Error while fetching data")
  } else {
    return Promise.reject(err);
  }
};
