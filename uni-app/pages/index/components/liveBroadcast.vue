<template>
	<!-- #ifdef MP -->
	<view :style="'margin-top:' + mbConfig + 'rpx;'" v-if="liveList.length > 0">
		<!-- 直播 -->
		<block>
			<navigator
				:url="'plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=' + liveList[0].roomid"
				class="live-wrapper"
				v-if="!listStyle"
				hover-class="none"
			>
				<view class="live-top" :style="'background:' + (liveList[0].live_status == 101 ? playBg : liveList[0].live_status == 103 ? endBg : notBg) + ';'">
					<block v-if="liveList[0].live_status == 101">
						<image src="/static/images/live-01.png" mode=""></image>
						<text>直播中</text>
					</block>
					<block v-if="liveList[0].live_status == 103">
						<image src="/static/images/live-02.png" mode=""></image>
						<text>已结束</text>
					</block>
					<block v-if="liveList[0].live_status == 102">
						<image src="/static/images/live-03.png" mode=""></image>
						<text>未开始</text>
					</block>
				</view>
				<image :src="liveList[0].share_img"></image>
				<view class="live-title line1">{{ liveList[0].name }}</view>
			</navigator>
			<view class="live-wrapper mores" v-else>
				<scroll-view scroll-x="true" style="white-space: nowrap; display: flex">
					<navigator
						hover-class="none"
						class="item"
						v-for="(item, index) in liveList"
						:key="index"
						:url="'plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=' + item.roomid"
					>
						<view class="live-top" :style="'background:' + (item.live_status == 101 ? playBg : item.live_status == 103 ? endBg : notBg) + ';'">
							<block v-if="item.live_status == 101">
								<image src="/static/images/live-01.png" mode=""></image>
								<text>直播中</text>
							</block>
							<block v-if="item.live_status == 103">
								<image src="/static/images/live-02.png" mode=""></image>
								<text>已结束</text>
							</block>
							<block v-if="item.live_status == 102">
								<image src="/static/images/live-03.png" mode=""></image>
								<text>未开始</text>
							</block>
						</view>
						<image :src="item.share_img"></image>
						<view class="live-title">{{ item.name }}</view>
					</navigator>
				</scroll-view>
			</view>
		</block>
	</view>
	<!-- #endif -->
</template>

<script>
import { getLiveList } from '@/api/api.js';
export default {
	name: 'liveBroadcast',
	props: {
		dataConfig: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			endBg: this.dataConfig.endBg.color[0].item,
			notBg: this.dataConfig.notBg.color[0].item,
			playBg: this.dataConfig.playBg.color[0].item,
			listStyle: this.dataConfig.listStyle.type,
			mbConfig: this.dataConfig.mbConfig.val,
			liveList: []
		};
	},
	created() {},
	mounted() {
		this.getLiveList();
	},
	methods: {
		// 直播
		getLiveList: function() {
			let limit = this.$config.LIMIT;
			getLiveList(1, limit)
				.then(res => {
					this.liveList = res.data;
				})
				.catch(res => {
					console.log(res.msg);
				});
		}
	}
};
</script>

<style lang="scss">
.live-wrapper {
	position: relative;
	width: 100%;
	overflow: hidden;
	border-radius: 16rpx;

	image {
		width: 100%;
		height: 400rpx;
	}

	.live-top {
		z-index: 20;
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		width: 180rpx;
		height: 54rpx;
		border-radius: 0rpx 0px 18rpx 0px;

		image {
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
			/* #ifdef H5 */
			display: block;
			/* #endif */
		}
	}

	.live-title {
		position: absolute;
		left: 0;
		bottom: 6rpx;
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		font-size: 30rpx;
		color: #fff;
		background: rgba(0, 0, 0, 0.35);
	}

	&.mores {
		width: 100%;

		.item {
			position: relative;
			width: 320rpx;
			display: inline-block;
			border-radius: 16rpx;
			overflow: hidden;
			margin-right: 20rpx;

			image {
				width: 320rpx;
				height: 180rpx;
				border-radius: 16rpx;
			}

			.live-title {
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				font-size: 22rpx;
			}

			.live-top {
				width: 120rpx;
				height: 36rpx;
				font-size: 22rpx;

				image {
					width: 20rpx;
					height: 20rpx;
				}
			}
		}
	}
}
</style>
