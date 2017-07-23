// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.axios=axios
Vue.use(VueRouter)


import Home from './components/home'
import Market from './components/market'
import Cart from './components/cart'
import Mine from './components/mine'
import One from './components/one'
import Two from './components/two'
import Detail from './components/detail'

import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
	state:{
		arr:[
		// {name:"xiaoming",age:12,id:1},
		// {name:"xiaohua",age:13,id:2},
		// {name:"xiaomi",age:14,id:3},
		],
		qt:0,
		totel:0
	},
	mutations:{
		ADD_GOODS(state,newItem){
		var flag=true;
			state.arr.map(function(item){
				
				console.log(item);
				if(item.id==newItem.id){
					console.log(newItem.qt)
					item.qt+=1;
					// newItem.qt++;
					// Vue.set(newItem,"qt",newItem.qt+1)
					console.log(item.qt)
					console.log(999)
					flag=false;
					// state.arr=state.arr
				}
			})
				if(flag){
					state.arr.push(newItem);
					// newItem.qt=1;
					Vue.set(newItem,"qt",1)

				}

			
			// 价格计算
			state.totel=0
			state.arr.map(function(item){
				state.totel+=item.price*item.qt

			})
			// 数量计算
			state.qt=0;
			state.arr.map(function(item){
				console.log(567)

				state.qt+=item.qt
			})

			
console.log(state.arr)
console.log(state)


		},
		REDUCE_GOODS(state,newItem){
			state.arr.map(function(item,index){
				if(item.id==newItem.id){
					if(newItem.qt>1){
						item.qt--;
					}else{

						state.arr.splice(index,1);
						item.qt=0;
					}
				}
				console.log(state.arr)
			})

			// 价格计算
			state.totel=0
			state.arr.map(function(item){
				state.totel+=item.price*item.qt

			})
			// 数量计算
			state.qt=0;
			state.arr.map(function(item){
				console.log(567)

				state.qt+=item.qt
			})


		}
	}


})

Vue.config.productionTip = false

var routes=[
{path:'',component:Home},
{path:'/home',component:Home},
{path:'/market',component:Market},
{path:'/cart',component:Cart},
{path:'/mine',component:Mine,children:[
{path:'one',component:One},
{path:'two',component:Two},
]},
{name:'detail',path:'/detail',component:Detail}
]
 var router=new VueRouter({
 	routes:routes
 })

/* eslint-disable no-new */
const vm=new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router,
  store,
  watch:{
  	$store:function(){
  		console.log("wkewlk")
  		vm.$mount()

  	}
  }

})
