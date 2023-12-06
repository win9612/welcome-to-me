export const isHttpError = (response: Response) => {
  return response === undefined || response.status >= 300;
};
