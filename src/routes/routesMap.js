import HomeView from 'view/home'
import ListView from 'view/list'
import DetailView from 'view/detail'
import CreateView from 'view/create'


export default [
  {
    exact: true,
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    exact: true,
    name: 'list',
    path: '/list',
    component: ListView,
  },
  {
    exact: true,
    name: 'detail',
    path: '/detail/:id',
    component: DetailView,
  },
  {
    exact: true,
    name: 'create',
    path: '/create',
    component: CreateView,
  }
]
