import {
  Model,
  model,
  prop,
} from 'mobx-keystone'

import { UserStore } from './user';

@model('store/root')
class RootStore extends Model({
  userStore: prop<UserStore>(),
}) {

}

export { RootStore }
