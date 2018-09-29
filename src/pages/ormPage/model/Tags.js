import { Schema, Model, many, fk } from 'redux-orm'
import { PropTypes } from 'react'

import {
  CREATE_TODO,
  MARK_DONE,
  DELETE_TODO,
  ADD_TAG_TO_TODO,
  REMOVE_TAG_FROM_TODO,
} from './actionTypes'

export class Tag extends Model {
  static reducer(state, action, Tag) {
    const { payload, type } = action
    switch (type) {
    case CREATE_TODO:
      const tags = payload.tags.split(',')
      const trimmed = tags.map(name => name.trim())
      trimmed.forEach(name => Tag.create({ name }))
      break
    case ADD_TAG_TO_TODO:
      if (!Tag.filter({ name: payload.tag }).exists()) {
        Tag.create({ name: payload.tag })
      }
      break
    }
  }
}
Tag.modelName = 'Tag'
Tag.backend = {
  idAttribute: 'name',
}
