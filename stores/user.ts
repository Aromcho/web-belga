import {
  Model,
  model,
  modelAction,
  prop,
  tProp
} from 'mobx-keystone'


@model('store/user')
export class UserStore extends Model({
  favorites: prop<number[]>(() => [])
}) {

  onInit(){
    if(typeof window !== "undefined"){
      if(window.localStorage.getItem('belga_favorites')) this.favorites = JSON.parse(window.localStorage.getItem('belga_favorites') as string) || []
    }
  }

  @modelAction
  setFavorites(l: number[]){
    // this.favorites = window.localStorage.getItem('belga_favorites') || []
  }

  @modelAction
  toggleFavorite(id: number){
    if(this.favorites.includes(id)){
      this.favorites.splice(this.favorites.indexOf(id), 1);
    } else {
      this.favorites = [...this.favorites, id]
    }
    window.localStorage.setItem('belga_favorites', JSON.stringify(this.favorites))
  }
  
}
