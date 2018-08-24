import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main/main'
import home from '@/pages/home/home'

import commend from '@/pages/home/commend'
import course from '@/pages/home/course'
import path from '@/pages/home/path'
import practice from '@/pages/home/practice'

import load from '@/pages/load/load'
import search from '@/pages/search/search'
import person from '@/pages/person/person'
import recomVue from '@/pages/home/commend/actualRecom-Vue'
import recomJava from '@/pages/home/commend/actualRecom-Java'


Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
	      {
	      	path:'home',
	      	name:'home',
	      	component:home,
	      	children:[
	      		{
	      			path:'commend',
	      			name:"commend",
	      			component:commend
	      		},
	      		{
	      			path:'course',
	      			name:"course",
	      			component:course
	      		},
	      		{
	      			path:'path',
	      			name:"path",
	      			component:path
	      		},
	      		{
	      			path:'practice',
	      			name:"practice",
	      			component:practice
	      		}
	      	]
	      },
	      {
	      	path:'search',
	      	name:'search',
	      	component:search
	      },
	      {
	      	path:'load',
	      	name:'load',
	      	component:load
	      },
	      {
	      	path:'person',
	      	name:'person',
	      	component:person
	      },
      ]
    },
    {
    	path:'/home/recomJava',
    	name:'recomJava',
    	component:recomJava
    },
     {
    	path:'/home/recomVue',
    	name:'recomVue',
    	component:recomVue
    },
    
    
    {
    	path:'/',
    	redirect:'/main/home/commend'
    }
  ]
})
