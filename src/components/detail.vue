<template>
	<div id="detail">
		<h2>detail</h2>
		<div>
			<h3>{{item.name}}</h3>
			<div><img :src="item.img" alt=""></div>

		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				item:this.$route.params.data
			}

		},
		methods:{

		},
		created(){
			console.log(this.item);
			
		}

	}
</script>
<style >
	
</style>