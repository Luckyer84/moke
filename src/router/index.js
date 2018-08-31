import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main/main'
import home from '@/pages/home/home'
import commend from '@/pages/home/commend'
import course from '@/pages/home/course'
import path from '@/pages/home/path'
import practice from '@/pages/home/practice'
import search from '@/pages/search/search'
import notes from '@/pages/search/notes'
import question from '@/pages/search/question'
import trend from '@/pages/search/trend'
import load from '@/pages/load/load'
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
		      			component:commend,
		      			meta:{
		      				title:'推荐',
		      				index:1
		      			}
		      		},
		      		{
		      			path:'course',
		      			name:"course",
		      			component:course,
		      			meta:{
		      				title:'课程',
		      				index:2
		      			}
		      		},
		      		{
		      			path:'path',
		      			name:"path",
		      			component:path,
		      			meta:{
		      				title:'路径',
		      				index:3
		      			}
		      		},
		      		{
		      			path:'practice',
		      			name:"practice",
		      			component:practice,
		      			meta:{
		      				title:'实战',
		      				index:4
		      			}
		      		}
		      	]
	      },
	      {
	      	path:'search',
	      	name:'search',
	      	component:search,
	      	meta:{
	      		title:'发现'
	      	},
	      	children:[
	      		{
	      			path:'notes',
	      			name:'notes',
	      			component:notes,
	      			meta:{ title:'手记'}
	      		},
	      		{
	      			path:'question',
	      			name:'question',
	      			component:question,
	      			meta:{ title:'猿问'}
	      		},
	      		{
	      			path:'trend',
	      			name:'trend',
	      			component:trend,
	      			meta:{ title:'动态'}
	      		}
	      	]
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
