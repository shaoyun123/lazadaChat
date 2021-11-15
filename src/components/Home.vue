<template>
	<el-row class="container">
		<el-col :span="24" class="main">
			<aside class="menu-expanded">
				<el-row class="aside_header">
					Lazada Chat
				</el-row>
				<el-menu>
					<el-row class="">
						<el-form :inline="true" style="padding: 10px;">
							<el-col :span="24" class="input-width-200">
								<el-select v-model="value1" placeholder="请选择" size="mini">
									<el-option v-for="item in options1" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col :span="24">
								<el-select v-model="value2" multiple placeholder="请选择" size="mini">
									<el-option v-for="item in options2" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-button type="danger" round size="mini" style="margin-top: 10px;">查询</el-button>
						</el-form>
					</el-row>

					<div class="infinite-list-wrapper" style="overflow:auto">
						<ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
							<template v-for="(item,index) in leftData" v-if="!item.hidden" style="margin-top: 300px;">
								<el-menu-item :index="item.id.toString()" @click="leftMenu1Func(item.name)">
									{{item.name}}
									<el-badge :value="200" :max="99" style="float: right;">
									</el-badge>
								</el-menu-item>
							</template>
						</ul>
						<p v-if="loading">加载中...</p>
						<p v-if="noMore">没有更多了</p>
					</div>
				</el-menu>
			</aside>
			<!--二级导航-->
			<aside class="menu-expanded">
				<aside-left-menu :asideLeftMenu="asideLeftMenu"></aside-left-menu>
			</aside>
			<!-- chat -->
			<section class="content-container">
				<!-- <transition name="fade" mode="out-in">
					<router-view :chatData="chatData"></router-view>
				</transition> -->
        <chat :chatData="chatData"></chat>
			</section>
			<aside class="menu-expanded-right">
				<aside-right-menu></aside-right-menu>
			</aside>
		</el-col>
	</el-row>
</template>

<script>
	// import user from './nav1/user.vue'
	import asideRightMenu from './asideRightMenu.vue'
	import asideLeftMenu from './asideLeftMenu.vue'
  import chat from './Chat.vue'

	export default {
		components: {
			'aside-right-menu': asideRightMenu,
			'aside-left-menu': asideLeftMenu,
      'chat':chat
		},
		computed: {
			noMore() {
				return this.leftData.length >= this.leftData1.length
			},
			disabled() {
				return this.loading || this.noMore
			}
		},
		data() {
			return {
				options1: [{
					value: '1',
					label: 'lazada客服专员'
				}],
				options2: [{
					value: '1',
					label: '店铺多选'
				}],
				value1: '1',
				value2: ['1'],
				chatData: '',
				circleUrl: "http://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				sizeList: ["large", "medium", "small"],
				sysName: 'VUEADMIN',
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				leftData1: [],
				leftData: [],
				curPage: 1,
				loading: false,
				asideLeftMenu: []
			}
		},
		methods: {
			load: function() {
				this.loading = true
				setTimeout(() => {
					this.curPage += 1
					this.leftData = this.leftData1.slice(0, 30 + 10 * this.curPage);
					this.loading = false
				}, 1000)
			},
			handleselect: function(a, b) {},
			//退出登录
			logout: function() {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			leftMenu1Func(childrenObj) {
				if (childrenObj == '导航1') {
					this.$set(this.asideLeftMenu, 0, [{
							name: 1,
							id: 1
						},
						{
							name: 2,
							id: 2
						}, {
							name: 3,
							id: 3
						}, {
							name: 4,
							id: 4
						}, {
							name: 5,
							id: 5
						}, {
							name: 6,
							id: 6
						}, {
							name: 7,
							id: 7
						}, {
							name: 8,
							id: 8
						},{
							name: 1,
							id: 1
						},
						{
							name: 2,
							id: 2
						}, {
							name: 3,
							id: 3
						}, {
							name: 4,
							id: 4
						}, {
							name: 5,
							id: 5
						}, {
							name: 6,
							id: 6
						}, {
							name: 7,
							id: 7
						}, {
							name: 8,
							id: 8
						},{
							name: 1,
							id: 1
						},
						{
							name: 2,
							id: 2
						}, {
							name: 3,
							id: 3
						}, {
							name: 4,
							id: 4
						}, {
							name: 5,
							id: 5
						}, {
							name: 6,
							id: 6
						}, {
							name: 7,
							id: 7
						}, {
							name: 8,
							id: 8
						},{
							name: 1,
							id: 1
						},
						{
							name: 2,
							id: 2
						}, {
							name: 3,
							id: 3
						}, {
							name: 4,
							id: 4
						}, {
							name: 5,
							id: 5
						}, {
							name: 6,
							id: 6
						}, {
							name: 7,
							id: 7
						}, {
							name: 8,
							id: 8
						},{
							name: 1,
							id: 1
						},
						{
							name: 2,
							id: 2
						}, {
							name: 3,
							id: 3
						}, {
							name: 4,
							id: 4
						}, {
							name: 5,
							id: 5
						}, {
							name: 6,
							id: 6
						}, {
							name: 7,
							id: 7
						}, {
							name: 8,
							id: 8
						},{
							name: 1,
							id: 1
						},
						{
							name: 2,
							id: 2
						}, {
							name: 3,
							id: 3
						}, {
							name: 4,
							id: 4
						}, {
							name: 5,
							id: 5
						}, {
							name: 6,
							id: 6
						}, {
							name: 7,
							id: 7
						}, {
							name: 8,
							id: 8
						}
					])
				} else if (childrenObj == '导航2') {
					this.$set(this.asideLeftMenu, 0, [])
				} else {
					this.$set(this.asideLeftMenu, 0, [{
							name: 1,
							id: 1
						},
						{
							name: 2,
							id: 2
						}, {
							name: 3,
							id: 3
						}, {
							name: 4,
							id: 4
						}
					])
				}
			}
		},
		mounted() {
			// var user = sessionStorage.getItem('user');
			// if (user) {
			// 	user = JSON.parse(user);
			// 	this.sysUserName = user.name || '';
			// 	this.sysUserAvatar = user.avatar || '';
			// }

			for (let i = 0; i < 100; i++) {
				this.leftData1.push({
					id: i,
					name: '导航' + i
				})
			}
			this.leftData = this.leftData1.slice(0, 30)
		}
	}
</script>

<style scoped lang="scss">
	// @import '~scss_vars';

	.infinite-list-wrapper {
		height: 80%;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		height: 100%;

		// .input-width-200 div.el-input {
		// 	width: 200px !important;
		// }

		.header {
			height: 60px;
			line-height: 60px;
			background: #D9001B;
			color: #fff;
		}

		.main {
			display: flex;
			position: absolute;
			top: 0px;
			bottom: 0px;
			overflow: hidden;

			aside {
				flex: 0 0 230px;
				width: 230px;

				.el-menu {
					height: 100%;
					// overflow: scroll;
				}
			}

			.aside_header {
				height: 80px;
				background-color: #D9001B;
				color: #fff;
				font-size: 20px;
				text-align: center;
				line-height: 80px;
			}

			.menu-expanded {
				flex: 0 0 300px;
				width: 330px;
			}

			.menu-expanded-right {
				flex: 0 0 470px;
				width: 500px;
			}

			.content-container {
				flex: 1;
			}
		}
	}
</style>
