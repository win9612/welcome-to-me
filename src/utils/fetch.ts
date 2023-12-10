export async function fetchWrapper(
  path: string,
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "OPTION",
  body?: object | FormData,
  accessToken?: string,
  isFormData?: boolean,
  headers?: object,
  tags?: Array<string>
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
      next: {
        tags: tags,
      },
    }
  );
}

export async function fetchSimple(path: string, tags?: Array<string>) {
  if (!tags) return fetch(path);

  return fetch(path, {
    next: {
      tags: tags ?? undefined,
    },
  });
}
