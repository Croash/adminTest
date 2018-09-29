import { Schema, Model, many, fk } from 'redux-orm'
import {
  CREATE_TODO,
  MARK_DONE,
  DELETE_TODO,
  ADD_TAG_TO_TODO,
  REMOVE_TAG_FROM_TODO,
} from './actionTypes'

export class Todo extends Model {
  static reducer(state, action, Todo, session) {
    const { payload, type } = action
    switch (type) {
    case CREATE_TODO:
     // Payload includes a comma-delimited string
     // of tags, corresponding to the `name` property
     // of Tag, which is also its `idAttribute`.
    const tagIds = action.payload.tags.split(',').map(str => str.trim())
    console.log(tagIds,action.payload.tags)

    // You can pass an array of ids for many-to-many relations.
    // `redux-orm` will create the m2m rows automatically.
    const props = Object.assign({}, payload, { tags: tagIds })
    Todo.create(props)
    break
    case MARK_DONE:
    // withId returns a Model instance.
    // Assignment doesn't mutate Model instances.
    Todo.withId(payload).set('done', true)
    break
    case DELETE_TODO:
      Todo.withId(payload).delete()
    break
    case ADD_TAG_TO_TODO:
      Todo.withId(payload.todo).tags.add(payload.tag)
      break
    case REMOVE_TAG_FROM_TODO:
      Todo.withId(payload.todo).tags.remove(payload.tag)
      break
    }

    // This call is optional. If the reducer returns `undefined`,
    // Redux-ORM will call getNextState for you.
    return Todo.getNextState()
  }
}
Todo.modelName = 'Todo'
Todo.fields = {
  tags: many('Tag', 'todos'),
  user: fk('User', 'todos'),
}
