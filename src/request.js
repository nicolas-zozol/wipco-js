import axios from "axios"


export function getApi(key) {
  return axios.create({
    baseURL: `https://https://wip.co/graphql/`,
    headers: {
      'Authorization': `bearer ${key}`,
    },
  })
}
export async function createQuery(data, key){
  return getApi(key).post('/', data)


}
