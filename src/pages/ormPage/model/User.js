import { Schema, Model, many, fk } from 'redux-orm'

export class User extends Model {}
User.modelName = 'User'
