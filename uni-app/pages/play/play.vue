<template>
	<view>
    <Plays :titles="titles">
      <view slot="ps_r" class=""> 
        1223   
      </view>
    </Plays>
	</view>
</template>

<script>
  import Plays from "./components/plays.vue";
	export default {
		data() {
			return {
				titles:["首页","分类"],
			}
		},
		methods: {
			
		},
    components:{
      Plays
    }
	}
</script>

<style scoped lang="scss">

</style>
