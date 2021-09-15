import request from 'superagent';

export const apiRouter = async (url, route, jsonInput) => {
  if (route === 'GET') {
    const data = await request.get(url);
    return data;
  } else if (route === 'POST') {
    const data = await request.post(url).send(jsonInput);
    return data.body;
  } else if (route === 'PUT') {
    const data = await request.put(url).send(jsonInput);
    return data.body;
  } else if (route === 'DELETE') {
    const data = await request.delete(url);
    return data.body;
  }
};
