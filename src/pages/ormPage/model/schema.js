import { schema } from 'redux-orm'
import Todo from './Todo'
import User from './User'
import Tag from './Tags'

schema.register(Todo, Tag, User)

export default schema
