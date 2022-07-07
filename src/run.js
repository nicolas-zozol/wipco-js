import dotenv from 'dotenv'
import {createTodo} from "./wip.api.js";

dotenv.config()

const API_KEY = process.env.API_KEY


createTodo('Test', API_KEY)

