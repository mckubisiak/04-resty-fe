import request from 'superagent';

export const apiRouter = async (url, route, jsonInput) => {
console.log('LOOOK HERE', url, route, jsonInput);
  if(route === 'GET') {
    const data = await request.get(url);
    console.log('DATA=============', data.body);
    return data;
  } else 
  if(route === 'PUT') {
    const data = await request.post(url).send(jsonInput);

    return data.body;
  } 


};
