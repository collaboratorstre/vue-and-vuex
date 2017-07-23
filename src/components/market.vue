<template>
	<div id="market">
		<h2>market</h2>
		<div v-for="item in data" class="item">
		<router-link :to="{name:'detail',params:{data:item}}">
			<div class="img"><img :src="item.img" alt=""></div></router-link>
			<div class="detail">
				<h4>{{item.name}}</h4>
				<p>{{item.pm_desc}}</p>
				<span>{{item.price}}</span>
				<div class="select"><span @click="reduce(item)">-</span><span v-show="item.qt!=0">{{item.qt}}</span><span @click="add(item)" class="add1">+</span></div>
			</div>
		
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
	export default{
		data(){
			return {
				data:[],
				arr:this.$store.state.arr,
				qt:this.$store.state.qt
			}

		},
		methods:{
			add(newItem){
				console.log(this)
				console.log("methods")

				 this.$store.commit("ADD_GOODS", newItem);
				 // console.log(222)
     //                console.log(1111);
                   // $mount()
                    // console.log(this.$store.state.arr)
                    // this.arr=this.$store.state.arr
                    // console.log("hhh")
                    // console.log(this.arr)
                    // console.log(newItem);
                    // console.log(this.data);
                    this.getcount()
				
			},
			reduce(newItem){
				this.$store.commit("REDUCE_GOODS",newItem);
				// console.log(333)
				// console.log(newItem)
				// console.log(444)
				 // this.arr=this.$store.state.arr
				 this.getcount()
			},
			getcount(){
				for(let item of this.data){
					// if(!(item.qt)){
					// 		Vue.set(item,"qt",0);
						
					// }
						for(let item1 of this.$store.state.arr ){
								if(item1.id==item.id){
									// Vue.set(item,"qt",item1.qt)
									console.log(item)
									item.qt=item1.qt
								}

						};
						if(!(item.qt)){
							item.qt=0
						}

				};
				
			}

		},
		created(){
			console.log(this)
				console.log("created")
			axios.get('http://h5.yztctech.net/api/axf/apihomehot.php').then(data=>{
				console.log("回来")
				var that=this
				// console.log(this.$store.state.arr)
				this.data=data.data.data;
				// console.log(this.data)
				// this.getcount()
				this.data.map(function(item){
					
				// console.log(item)
				// item.qt=0
				Vue.set(item,"qt",0);
				// console.log(that.$store)

				for(let item1 of that.$store.state.arr ){
					// console.log(item1)
								if(item1.id==item.id){
									console.log(332)
									Vue.set(item,"qt",item1.qt)
								}

						}
						that.arr=that.$store.state.arr

			})
			});
			
		},
		computed:{
			store(){
				console.log(this)
				console.log("computed")
				return this.$parent.$store.state
			},
			arr1(){
				// return this.$store.state.arr;
				// console.log(this.$store.state.arr)
				// console.log("12122")
				console.log(this)
				console.log("computed")
				cosnole.log(this.data)
				this.data=this.$store.state.arr;
				return this.data
			}
		},
		// watch:{
		// 	arr:function(){
		// 		console.log(this)
		// 	}

		// }


		
	}
</script>
<style type="text/css" scoped lang="less">
#market{
	width:100%;
	.item{
		width:100%;
		display:flex;
		justify-content:space-between;
		
		a{
			width:40%;
		
			.img{
				width:100%;
				img{
					width:100%;
				}
			}
			
		}
		.detail{
				width:50%;
				.select{
					span{
						width:40px;
						display:inline-block;
						text-align:center;
					}
					.add1{
						margin-right:60px;
					}
				}
			}
		
	}
	
}

	
</style>