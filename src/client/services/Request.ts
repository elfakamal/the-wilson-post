import 'isomorphic-fetch';

const methods = ['get', 'post', 'put', 'patch', 'delete'];

interface Request {
  [key: string]: (endpoint: string, requestBody?: any) => Promise<Response>;
}

export default methods.reduce((Request: Request, method) => ({
  ...Request,
  [method]: async (endpoint: string, requestBody?: any) => {
    const response: Response = await fetch(endpoint, {
      method,
      ...(!requestBody ? {} : {
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    });

    let results: any = await response.text();

    if (response.headers) {
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.match(/application\/json/)) {
        results = JSON.parse(results);
      }
    }

    if (!response.ok) {
      throw new Error(results);
    }

    return results;
  },
}), {} as Request);
