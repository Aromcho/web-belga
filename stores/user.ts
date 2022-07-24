import {
  Model,
  model,
  modelAction,
  prop,
  tProp
} from 'mobx-keystone'


@model('store/user')
export class UserStore extends Model({
  favorites: prop<number[]>(() => []),
  searchs: prop<any[]>(() => [])
}) {

  onInit(){
    if(typeof window !== "undefined"){
      if(window.localStorage.getItem('belga_favorites')) this.favorites = JSON.parse(window.localStorage.getItem('belga_favorites') as string) || []
      if(window.localStorage.getItem('belga_searchs')) this.searchs = JSON.parse(window.localStorage.getItem('belga_searchs') as string) || []
    }
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

  @modelAction
  saveSearch(query: any){
    const newQ = {
      ...query,
      url: window.location.pathname
    }
    if(this.searchs.find(item => item.url === newQ.url)){
      this.searchs = this.searchs.filter(item => item.url !== newQ.url)
    } else {
      this.searchs = [...this.searchs, newQ]
    }
    window.localStorage.setItem('belga_searchs', JSON.stringify(this.searchs))
  }

  @modelAction
  removeSearch(query: any){
    this.searchs = this.searchs.filter(item => item.url !== query.url)
  }

  
}
