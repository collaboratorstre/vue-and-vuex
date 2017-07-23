<template>
	<div id="cart">
		<h2>cart</h2>
		<div v-for="item in cart1" class="cart-item">
			
			<div class="cart-img"><img :src="item.img" alt=""></div>
			<div class="cart-detail">
				<p>{{item.name}}</p>
				<p class="cart-qt"><span @click="reduce(item)">-</span><span>{{item.qt}}</span><span @click="add(item)">+</span></p>
				
				<span>{{item.price}}</span>
			</div>
		</div>
		<div>数量：<span>{{qt1}}</span>总计：<span>{{money1}}</span></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				cart:this.$store.state.arr,
				money:0,
				qt:0,


			}
			
		},
		methods:{
			add(newItem){

				 this.$store.commit("ADD_GOODS", newItem);
				 // console.log(222)
     //                console.log(newItem);
     //                console.log(1111);
     //                this.cart=this.$store.state.arr;
     //                this.money=this.$store.state.totel
     //                this.qt=this.$store.state.qt
                  
				
			},
			reduce(newItem){
				this.$store.commit("REDUCE_GOODS",newItem);
				// console.log(333)
				// console.log(newItem)
				// console.log(444)
				// this.cart=this.$store.state.arr;
    //             this.money=this.$store.state.totel
    //             this.qt=this.$store.state.qt
			}

		},
		updated(){

		},
		created(){
			// console.log(479)
			//  this.cart=this.$store.state.arr;
   //          this.money=this.$store.state.totel
   //          this.qt=this.$store.state.qt

			
		},
		computed:{
			// money1(){
			// // 	console.log(4444)
			// 	return this.qt
			// },
			money1(){
				// console.log("hhhhhh")
				// console.log(this.$parent.$store)
				// console.log(this.$parent.$store.getters.totel)
				return this.$parent.$store.state.totel.toFixed(2);
			},
			cart1(){
				return this.$parent.$store.state.arr
			},
			qt1(){
				return this.$parent.$store.state.qt
			}

		},
		watch:{
			cart(newValue,oldValue){
				console.log(newValue)
				console.log(876)
				console.log(oldValue)
			}
		}
		
	}
</script>
<style type="text/css" scoped lang="less">
	#cart{
		.cart-item{
			width:100%;
			display:flex;
			justify-content:space-between;
			.cart-img{
				width:40%;
				img{
					width:100%;
				}

			}
			.cart-detail{
				width:50%;
				p{
					display:flex;
					justify-content:space-around;
					span{
						width:30%;
						display:inline-block;
					}
				}
			}
		}

	}
</style>