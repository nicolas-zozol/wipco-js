import {createQuery} from "./request.js";

export async function createTodo(text, key){

  const query = `{
    mutation createTodo {
    createTodo(input: {body:${text}}) {
      id
      body
      completed_at
    }
  }
  }`

  console.log(JSON.stringify(query))
  return createQuery({query}, key)
}