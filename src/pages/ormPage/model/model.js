// models.js
import { Model, many, fk, Schema } from 'redux-orm'

export class Todo extends Model {}
Todo.modelName = 'Todo'
Todo.fields = {
    user: fk('User', 'todos'),
    tags: many('Tag', 'todos'),
}

export class Tag extends Model {}
Tag.modelName = 'Tag'
Tag.backend = {
    idAttribute: 'name'
}

export class User extends Model {}
User.modelName = 'User'
