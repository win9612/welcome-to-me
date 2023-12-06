export async function fetchWrapper(
  path: string,
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "OPTION",
  body?: object | FormData,
  accessToken?: string,
  isFormData?: boolean,
  headers?: object
) {
  const contentType = isFormData ? undefined : { "Content-Type": "application/json" };
  return fetch(
    `${typeof process !== "undefined" ? process.env.API_BASE_URL : (window as any).ENV.API_BASE_URL}${path}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...contentType,
        ...headers,
      },
      method,
      body: isFormData ? (body as FormData) : JSON.stringify(body),
    }
  );
}

export async function fetchSimple(path: string) {
  return fetch(path);
}
