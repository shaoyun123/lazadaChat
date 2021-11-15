<template>
	<el-container style="height: 100%;">
		<el-header class="border-bottom" :height='String(80)'>
			<el-row :gutter="24">
				<el-col :span="2">
					<el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
					</el-avatar>
				</el-col>
				<el-col :span="14">
					<el-col :span="24" class="size20 m8">
						{{getName}}
					</el-col>
					<el-col :span="24">
						<i class="el-icon-s-shop size20 m8"></i>
						lazada
					</el-col>
				</el-col>
				<el-col :span="8" style="text-align: right;">
					<i class="el-icon-user size30 m8"></i>
					<i class="el-icon-star-off size30 m8" v-show="starBool" @click="starBool = !starBool" style="cursor: pointer;"></i>
					<img src="../../static/images/wujiaoxing.png" v-show="!starBool" @click="starBool = !starBool"
						width="26" style="background-color: #fff;margin: 17px 10px 0 10px;cursor: pointer;" />
				</el-col>
			</el-row>
		</el-header>
		<el-main class="chat-main" style="background-color: #f4f5f5;">
			<!-- 优惠券 -->
			<div class="message-row user-type-2 row-card-voucher">
				<div class="simple-avatar circle"><img
						src="//sg-live.slatic.net/original/0f460c08eaf10eaaada4bd51ef2af6ea.png"></div>
				<div class="message-contain">
					<div class="lzd-message-item card-voucher"
						style="border: .5px solid #a5cbe9;background-color: #c9e7ff;">
						<div class="card-voucher message-card">
							<div class="row top">
								<div class="voucher-type">
									<div class="background-default voucher-img"
										style="background-image: url(&quot;https://laz-img-cdn.alicdn.com/tfs/TB1rYq.n26TBKNjSZJiXXbKVFXa-128-128.jpg&quot;);">
									</div><span class="type-name">Specific Product Level</span>
								</div>
								<div class="title text-two-lines">0.2-0.1</div>
								<div class="promotion">
									<div class="discount"><span class="amount">0.1MYR</span><span class="unit"></span>
									</div>
									<div class="btn">Collect</div>
								</div>
							</div>
							<div class="row bottom">
								<div class="period">6/28/2021-11/30/2021</div>
							</div>
						</div>
					</div>
					<div class="message-read-type"><span class="read-type">读取</span></div>
				</div>
			</div>
			<div class="message-row user-type-1 row-card-text">
				<div class="simple-avatar circle "><img
						src="//sg-live.slatic.net/original/ebf238e7aa294b55f5198f2a709efa42.png"></div>
				<div class="message-contain">
					<div class="lzd-message-item card-text">
						<div class="message-text-box">
							<div class="lzd-message-text"><span
									class="emoji-face has-text">全站点站点测评补单一条龙服务，真实海外真实买家下单，货比三家，安全稳定，提高店铺的基础销量，增加店铺产品的曝光，实现快速出单，有需要的加我：</span>
							</div>
						</div>
					</div>
					<div class="message-read-type"><span class="read-type">读取</span></div>
				</div>
				<div class="avatar-holder"></div>
			</div>
			<!-- 商品 -->
			<div class="message-row user-type-2 row-card-product">
				<div class="simple-avatar circle"><img
						src="//sg-live.slatic.net/original/0f460c08eaf10eaaada4bd51ef2af6ea.png"></div>
				<div class="message-contain">
					<div class="lzd-message-item card-product"
						style="border: .5px solid #a5cbe9;background-color: #c9e7ff;">
						<div class="card-product message-card">
							<div class="card-header">Product Information</div>
							<div class="card-content">
								<div class="background-default lzd-pro-img"
									style="background-image: url(&quot;https://img-ovs.alicdn.com/p/1c07bd2700d13771a93cebd9739ba70d.jpg&quot;);">
								</div>
								<div class="lzd-pro-desc">
									<div class="lzd-pro-title text-two-lines">HANGER2 Meat Plastic For Sealing Machine
										Seal Vegetable Keep Fresh Kitchen Accessories Vacuum Sealer Bag Storage Bag Food
										Saver Packaging Bags</div>
									<div class="lzd-pro-price text-overflow" title="MYR7.31">MYR7.31</div>
									<div class="lzd-pro-old-price-content"><span class="lzd-pro-old-price text-overflow"
											title="MYR7.31">MYR12.39</span><span class="lzd-pro-discount">-41%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="message-read-type"><span class="read-type unread-type">未读</span></div>
				</div>
			</div>
			<!-- 表情 -->
			<div class="message-row user-type-2 row-card-emoji">
				<div class="simple-avatar circle "><img
						src="//sg-live.slatic.net/original/0f460c08eaf10eaaada4bd51ef2af6ea.png"></div>
				<div class="message-contain">
					<div class="message-withdraw-active">
						<div class="message-withdraw"><span><svg viewBox="0 0 1024 1024" version="1.1" width="10"
									height="10">
									<path
										d="M321.836 517.083c11.36 11.617 11.339 30.135 0.088 41.727l-0.553 0.555c-11.613 11.364-30.124 11.342-41.711 0.087l-0.555-0.553L71.523 346.61c-11.209-11.461-11.358-29.681-0.471-41.323l0.544-0.567L279.178 93.917c11.585-11.764 30.508-11.906 42.268-0.318 11.573 11.405 11.894 29.921 0.86 41.719l-0.543 0.565-157.477 159.918h517.718c148.563 0 268.996 120.48 268.996 269.1 0 147.133-118.037 266.687-264.547 269.063l-4.449 0.036H235.952c-16.507 0-29.889-13.387-29.889-29.9 0-16.277 13.002-29.517 29.183-29.892l0.706-0.008h446.052c115.549 0 209.22-93.706 209.22-209.3 0-114.436-91.807-207.422-205.76-209.27l-3.46-0.028-518.069-0.001 157.901 161.482z"
										fill="#666666" p-id="1734"></path>
								</svg></span></div>
					</div>
					<div class="lzd-message-item card-emoji"
						style="border: 0.5px solid rgb(165, 203, 233); background-color: rgb(201, 231, 255);">
						<div class="background-default card-img message-emoji" title="[cheer up]"
							data-spm-anchor-id="a1zawi.15103027.0.i13.208f4edfSCAjCK"
							style="height: 160px; width: 160px; background-image: url(&quot;https://sg-live.slatic.net/other/im/901116c5359491b3bfe57fdb299f893f.gif&quot;);">
						</div>
					</div>
					<div class="message-read-type"><span class="read-type unread-type">未读</span></div>
				</div>
				<div class="avatar-holder"></div>
			</div>
			<!-- 图片 -->
			<div class="message-row user-type-2 row-card-image">
				<div class="avatar-holder"></div>
				<div class="message-contain">
					<div class="message-withdraw-active">
						<div class="message-withdraw"><span><svg viewBox="0 0 1024 1024" version="1.1" width="10"
									height="10">
									<path
										d="M321.836 517.083c11.36 11.617 11.339 30.135 0.088 41.727l-0.553 0.555c-11.613 11.364-30.124 11.342-41.711 0.087l-0.555-0.553L71.523 346.61c-11.209-11.461-11.358-29.681-0.471-41.323l0.544-0.567L279.178 93.917c11.585-11.764 30.508-11.906 42.268-0.318 11.573 11.405 11.894 29.921 0.86 41.719l-0.543 0.565-157.477 159.918h517.718c148.563 0 268.996 120.48 268.996 269.1 0 147.133-118.037 266.687-264.547 269.063l-4.449 0.036H235.952c-16.507 0-29.889-13.387-29.889-29.9 0-16.277 13.002-29.517 29.183-29.892l0.706-0.008h446.052c115.549 0 209.22-93.706 209.22-209.3 0-114.436-91.807-207.422-205.76-209.27l-3.46-0.028-518.069-0.001 157.901 161.482z"
										fill="#666666" p-id="1734"></path>
								</svg></span></div>
					</div>
					<div class="lzd-message-item card-image"
						style="border: 0.5px solid rgb(165, 203, 233); background-color: rgb(201, 231, 255);">
						<div class="background-default card-img"
							style="height: 200px; width: 200px; background-image: url(&quot;https://sg-live.slatic.net/other/im/441ffabf19f425ee9bec7e349073f572.png&quot;);"
							@click="scanImgFunc('https://sg-live.slatic.net/other/im/441ffabf19f425ee9bec7e349073f572.png')">
						</div>
					</div>
					<div class="message-read-type"><span class="read-type unread-type">未读</span></div>
				</div>
				<div class="avatar-holder"></div>
			</div>

			<div v-for="item in chatDataList">
				<!-- 文字 -->
				<div class="message-row user-type-2 row-card-text" v-if="item.type == 'text'">
					<div class="simple-avatar circle"><img
							src="//sg-live.slatic.net/original/0f460c08eaf10eaaada4bd51ef2af6ea.png"></div>
					<div class="message-contain">
						<div class="lzd-message-item card-text"
							style="border: 0.5px solid rgb(165, 203, 233); background-color: rgb(201, 231, 255);">
							<div class="message-text-box">
								<div class="lzd-message-text"><span class="emoji-face has-text">{{item.content}}</span>
								</div>
							</div>
						</div>
						<div class="message-read-type"><span class="read-type unread-type">未读</span></div>
					</div>
					<div class="avatar-holder"></div>
				</div>
				<!-- 表情 -->
				<div class="message-row user-type-2 row-card-emoji" v-if="item.type == 'emoji'">
					<div class="simple-avatar circle "><img
							src="//sg-live.slatic.net/original/0f460c08eaf10eaaada4bd51ef2af6ea.png"></div>
					<div class="message-contain">
						<!-- 撤回图标 -->
						<!-- <div class="message-withdraw-active">
							<div class="message-withdraw">
								<span>
									<svg viewBox="0 0 1024 1024" version="1.1" width="10" height="10">
										<path
											d="M321.836 517.083c11.36 11.617 11.339 30.135 0.088 41.727l-0.553 0.555c-11.613 11.364-30.124 11.342-41.711 0.087l-0.555-0.553L71.523 346.61c-11.209-11.461-11.358-29.681-0.471-41.323l0.544-0.567L279.178 93.917c11.585-11.764 30.508-11.906 42.268-0.318 11.573 11.405 11.894 29.921 0.86 41.719l-0.543 0.565-157.477 159.918h517.718c148.563 0 268.996 120.48 268.996 269.1 0 147.133-118.037 266.687-264.547 269.063l-4.449 0.036H235.952c-16.507 0-29.889-13.387-29.889-29.9 0-16.277 13.002-29.517 29.183-29.892l0.706-0.008h446.052c115.549 0 209.22-93.706 209.22-209.3 0-114.436-91.807-207.422-205.76-209.27l-3.46-0.028-518.069-0.001 157.901 161.482z"
											fill="#666666" p-id="1734"></path>
									</svg></span>
							</div>
						</div> -->
						<div class="lzd-message-item card-emoji"
							style="border: 0.5px solid rgb(165, 203, 233); background-color: rgb(201, 231, 255);">
							<div class="background-default card-img message-emoji" :title="[item.name]"
								style="height: 160px; width: 160px;"
								:style="{'background-image':'url('+item.content+')'}">
							</div>
						</div>
						<div class="message-read-type"><span class="read-type unread-type">未读</span></div>
					</div>
					<div class="avatar-holder"></div>
				</div>
				<!-- 图片 -->
				<div class="message-row user-type-2 row-card-image" v-if="item.type == 'img'">
					<div class="avatar-holder"></div>
					<div class="message-contain">
						<div class="lzd-message-item card-image"
							style="border: 0.5px solid rgb(165, 203, 233); background-color: rgb(201, 231, 255);">
							<div class="background-default card-img" style="height: 200px; width: 200px;"
								:style="{'background-image':'url('+item.content+')'}"
								@click="scanImgFunc(item.content)">
							</div>
						</div>
						<div class="message-read-type"><span class="read-type unread-type">未读</span></div>
					</div>
					<div class="avatar-holder"></div>
				</div>
			</div>
			<!-- 点击图片查看大图 -->
			<div class="lzd-preview" v-if="largeImg">
				<div class="lzd-preview__header"><a class="action-btn action-btn--download" download=""
						:href="largeImgUrl" target="_blank"><i
							class="im-components-icon im-components-icon-download im-components-icon-xl"></i></a><span
						class="action-btn action-btn--close" @click="largeImg = !largeImg"><i
							class="im-components-icon im-components-icon-close im-components-icon-xl"></i></span></div>
				<div class="lzd-preview__content">
					<div class="lzd-preview__viewer" :style="{'background-image': 'url('+largeImgUrl+')'}"
						style="transform: scale(1);">

					</div>
				</div>
			</div>
			<!-- 上传图片回显 -->
			<div class="lzd-preview" v-if="dialogVisible">
				<div class="lzd-preview__content">
					<div class="lzd-preview__viewer" :style="{'background-image': 'url('+dialogImageUrl+')'}"
						style="transform: scale(1);">
					</div>
				</div>
				<div class="lzd-preview__footer">
					<el-button size="mini" @click="handleImgFileSend(dialogImageUrl)">发送</el-button>
					<el-button size="mini" @click="dialogVisible = !dialogVisible">取消</el-button>
				</div>
			</div>

			<div v-show="emojiShow"
				class="im-components-balloon im-components-balloon-normal im-components-balloon-medium im-components-balloon-bottom im-components-overlay-inner emotion-popup next-position-bc"
				style="transform-origin: center bottom; position: absolute; left: 505px; bottom: 260px;">
				<div class="im-emotions">
					<div class="simple-scroller emoji-list custom-scroll-bar">
						<div class="scroll-content" style="width: 330px; height: 260px;">
							<div class="emoji-item" v-for="(item,index) in emojiData" :key="index" :index="index"
								@click="sendEmojiFunc(item.src,item.name)">
								<img class="emoji-item-pic" :src="item.src" /><span
									class="emoji-item-label">{{item.name}}</span>
							</div>
						</div>
					</div>
					<div class="simple-tab-container simple-tab-theme-badge">
						<ul class="simple-tab">
							<li class="tab-item" :class="{selected:index==ins}" v-for="(item,index) in emojiTab"
								@click="emojiTabFunc(index)">
								<div class="ripple">
									<img :src="item">
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</el-main>
		<!-- 底部 -->
		<el-footer class="border-top" :height="String(150)">
			<!-- 选择栏 -->
			<el-col :span="24">
				<el-row>
					<el-col :span="4">
						<img src="../../static/images/xiaolian.png" width="30" @click="toggleEmoji" class="m8" />
						<el-upload style="display: inline;" action="https://jsonplaceholder.typicode.com/posts/"
							list-type="picture" :on-success="handlePictureCardPreview">
							<img src="../../static/images/tupian.png" width="30" class="m8" />
						</el-upload>
					</el-col>
					<el-col :span="20">
						<el-select v-model="value1" placeholder="请选择" size="mini" class="m8">
							<el-option label="语言" value="1"></el-option>
						</el-select>
						<el-select v-model="value2" placeholder="请选择" size="mini" class="m8">
							<el-option label="模板类型" value="1"></el-option>
						</el-select>
						<el-select v-model="value3" placeholder="请选择" size="mini" class="m8">
							<el-option label="模板名称" value="1"></el-option>
						</el-select>
					</el-col>
				</el-row>
			</el-col>
			<!-- 输入消息内容框 -->
			<el-col :span="24">
				<el-input type="textarea" :rows="7" placeholder="在此输入消息内容,按回车键发送消息" v-model="textarea" autofocus="true"
					@keydown.native="handleKeyCode($event)" resize="none">
				</el-input>
			</el-col>
			<!-- 回复按钮 -->
			<el-col :span="24">
				<el-row type="flex" class="row-bg mt-mb-8" justify="end">
					<el-button size="mini" type="danger" @click="handleTextSend">回复</el-button>
				</el-row>
			</el-col>
		</el-footer>
	</el-container>
</template>
<script>
	import {
		mapGetters
	} from 'vuex'

	export default {
		props: ['chatData'],
		computed: {
			// 使用对象展开运算符将 getters 混入 computed 对象中
			...mapGetters([
				'getName'
			]),
			// getName() {
			// 	return this.$store.getters.getName
			// }
		},
		data() {
			return {
				starBool: true,
				dialogImageUrl: '',
				dialogVisible: false,
				value1: '1',
				value2: '1',
				value3: '1',
				ins: 0,
				chatDataList: [],
				largeImg: false,
				largeImgUrl: '',
				// name: '',
				textarea: '',
				emojiShow: false,
				emojiTab: [
					'https://sg-live-01.slatic.net/other/im/dc9375aeaba4435212341c2c71bb2c52.png',
					'https://sg-live.slatic.net/other/im/edd7b121015dfc3743316c1e132cecb7.png',
					'https://sg-live.slatic.net/other/im/daa33e1afebefd388e616e82a7dc2071.png'
				],
				emojiData: [],
				staticEmojiData: {
					emoji1: [{
							src: 'https://sg-live.slatic.net/original/0e048d1c6d42835cdc386241b2a855c8.png',
							name: "Happy"
						},
						{
							src: 'https://sg-live.slatic.net/original/bc42a3eff1a2ea9cda78e70ba85ca600.png',
							name: "Very Happy"
						},
						{
							src: 'https://sg-live.slatic.net/original/d66d57245a5a53bfce17c7ee9f305dea.png',
							name: "Laughing"
						},
						{
							src: 'https://sg-live.slatic.net/original/35f56b5e6b4cb8cd7ece01a486990758.png',
							name: "Smirking"
						},
						{
							src: 'https://sg-live.slatic.net/original/c1af284b49ca2855b6250da001eb86ff.png',
							name: "In Love"
						},
						{
							src: 'https://sg-live.slatic.net/original/41bbcbce0b13176ad4cfa9781a935f30.png',
							name: "Thumbs Up"
						},
						{
							src: 'https://sg-live.slatic.net/original/ed3e32239214313a5f88b7f5522e8009.png',
							name: "Surprised"
						},
						{
							src: 'https://sg-live.slatic.net/original/e795a481618af187f6b7df0f68feb527.png',
							name: "Shocked"
						},
						{
							src: 'https://sg-live.slatic.net/original/1ba2df5142564a44966551027b9c6bbc.png',
							name: "Sad"
						},
						{
							src: 'https://sg-live.slatic.net/original/6c7e93fd7740f72bfbccff77504a30d9.png',
							name: "Crying"
						},
						{
							src: 'https://sg-live.slatic.net/original/1eca1d0994cb93f2df2408ffa749c18d.png',
							name: "Confused"
						},
						{
							src: 'https://sg-live.slatic.net/original/cc2b0c1db5ae9014de532155fb114a3e.png',
							name: "Shy"
						},
						{
							src: 'https://sg-live.slatic.net/original/3825aa88b59a9209053655fede4d1131.png',
							name: "Angry"
						},
						{
							src: 'https://sg-live.slatic.net/original/5b23d7bee1985418de4a084e72c16e47.png',
							name: "Disgust"
						},
						{
							src: 'https://sg-live.slatic.net/original/9715a92a20bc87a07988eb4825bf15ca.png',
							name: "Heart"
						},
					],
					emoji2: [{
							src: "https://sg-live.slatic.net/other/im/ac34173dd76c7b099064aa0859d9aeb8.gif",
							name: "Thank you"
						},
						{
							src: "https://sg-live.slatic.net/other/im/901116c5359491b3bfe57fdb299f893f.gif",
							name: "Cheer up"
						},
						{
							src: "https://sg-live.slatic.net/other/im/2ef57a7e72c344f5347da78efc704451.gif",
							name: "Red pocket"
						},
						{
							src: "https://sg-live.slatic.net/other/im/122730d703f7ca3b27c73a97788eef9a.gif",
							name: "Yummy"
						},
						{
							src: "https://sg-live.slatic.net/other/im/a87ad57918b0d593fbd97381afcbe5cf.gif",
							name: "Dance"
						},
						{
							src: "https://sg-live.slatic.net/other/im/2a693f4624ae1491d6ba5743fd8a3ee9.gif",
							name: "Bye"
						},
						{
							src: "https://sg-live.slatic.net/other/im/d9155fd8aff7b428d17c47d5fd8e9642.gif",
							name: "Gift"
						},
						{
							src: "https://sg-live.slatic.net/other/im/c999fa373bab823d8c3f1256d0e810cd.gif",
							name: "Thirsty"
						},
						{
							src: "https://sg-live.slatic.net/other/im/8cef0edb766d587e2cfd29c67e6a48e4.gif",
							name: "Sleepy"
						},
						{
							src: "https://sg-live.slatic.net/other/im/3d09b64b8fb3599e11f38602a080fc3e.gif",
							name: "Fountain"
						},
					],
					'emoji3': [{
							src: "https://sg-live.slatic.net/other/im/9506b5dfcad5de538d711dca50b379f3.png",
							name: "拉齐耶"
						},
						{
							src: "https://sg-live.slatic.net/other/im/9f13596921fa5b2000a8266b557018a9.png",
							name: "Lazzie 礼物"
						},
						{
							src: "https://sg-live.slatic.net/other/im/b8fb565cb055897c3029b7cd011c9a6b.png",
							name: "拉齐心"
						},
						{
							src: "https://sg-live.slatic.net/other/im/1461eb044cbe81614582a83e8efa7bf7.png",
							name: "圣诞节"
						},
					]
				}
			}
		},
		watch: {
			chatData: function(val) {
				this.name = val
			},
			// '$route'(to, from) {
			// 	this.calcHeight()
			// }
		},
		methods: {
			// 滚动条在最底部
			scrollToBottom() {
				this.$nextTick(() => {
					let box = this.$el.querySelector(".chat-main")
					box.scrollTop = box.scrollHeight
				})
			},
			// 表情包整体显示隐藏
			toggleEmoji() {
				this.emojiShow = !this.emojiShow
			},
			// 选择表情包的tab
			emojiTabFunc(num) {
				this.ins = num
				this.emojiData = this.staticEmojiData[`emoji${num+1}`]
			},
			// 键盘回车事件
			handleKeyCode(event) {
				if (event.keyCode == 13) {
					if ((event.keyCode == 13) && (event.keyCode == 17)) {
						this.textarea = this.textarea + '\n';
					} else {
						event.preventDefault();
						this.handleTextSend();
					}
				}
			},
			// 发送消息
			handleTextSend() {
				this.chatDataList.push({
					content: this.textarea,
					type: 'text'
				})
				this.textarea = ''
			},
			// 发送表情包
			sendEmojiFunc(imgSrc, imgName) {
				this.chatDataList.push({
					content: imgSrc,
					name: imgName,
					type: 'emoji'
				})
				// 选择表情隐藏
				this.toggleEmoji()
			},
			// 点击查看大图
			scanImgFunc(imgSrc) {
				this.largeImg = true;
				this.largeImgUrl = imgSrc
			},
			// 选择图片回显
			handlePictureCardPreview(response, file, fileList) {
				// this.$nextTick(() => {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
				// })
			},
			handleImgFileSend(imgSrc) {
				this.chatDataList.push({
					content: imgSrc,
					type: 'img'
				})
				this.dialogVisible = !this.dialogVisible
			}
		},
		mounted() {
			this.emojiData = this.staticEmojiData[`emoji1`]
		},
		beforeUpdate() {
			this.scrollToBottom()
		}
	}
</script>
<style>
	@import "../common/css/window.css";

	.el-upload-list {
		display: none;
	}

	.border-bottom {
		border-bottom: 1px solid #ddd;
	}

	.border-top {
		border-top: 1px solid #ddd;
	}

	.m8 {
		margin: 8px;
	}

	.mt-mb-8 {
		margin: 8px 0;
	}

	.size20 {
		font-size: 20px;
	}

	.size30 {
		font-size: 30px;
		line-height: 60px;
	}

	.btn {
		background-color: #D9001B;
		color: #fff;
	}

	.btn :hover {
		background-color: #D9001B;
		color: #fff;
		opacity: 0.9;
	}
</style>
