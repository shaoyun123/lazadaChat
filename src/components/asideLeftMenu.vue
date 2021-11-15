<template>
  <!-- <el-menu> -->
  <el-tabs v-model="activeSaleSite" @tab-click="handleClick" class="asideLeftMenuTab">
    <el-tab-pane>
      <span slot="label">
        <el-badge :value="200" :max="99" class="item">
          SG
        </el-badge>
      </span>
      <div class="infinite-list-wrapper" style="overflow:auto;" :style="{height:divHeight+'px'}">
        <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <!-- <li v-for="item in asideMenu1" class="list-item">{{ item.name }}</li> -->
          <el-row v-for="(item,index) in asideMenu1" :key="index" v-if="!item.hidden"
            :style="[enterVal == index?active:'',clickVal == index?clickActive:'']" style="padding: 10px 5px;">
            <div @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave" :index="item.id"
              @click="toChat(item.name,index)">
              <el-col :span="4">
                <img src="../../static/images/xiaolian.png" width="50" />
              </el-col>
              <el-col :span="16">
                <el-row>
                  <span style="font-weight: bold;">{{item.name}}</span><br>
                  <span style="color: #bbb;">Do you speak Chinese?</span><br>
                  <span>
                    <el-tag type="danger" size="mini">首次下单买家</el-tag>
                  </span>
                </el-row>
              </el-col>
              <el-col :span="4" style="text-align: right;">
                11:11
              </el-col>
            </div>
          </el-row>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>



    </el-tab-pane>
    <el-tab-pane><span slot="label">
        VN
      </span></el-tab-pane>
    <el-tab-pane><span slot="label">
        <!-- <el-badge :value="200" :max="99" class="item"> -->
        TH
        <!-- </el-badge> -->
      </span></el-tab-pane>
    <el-tab-pane><span slot="label">
        <!-- <el-badge :value="200" :max="99" class="item"> -->
        PH
        <!-- </el-badge> -->
      </span></el-tab-pane>
    <el-tab-pane><span slot="label">
        <el-badge :value="200" :max="99" class="item">
          ID
        </el-badge>
      </span></el-tab-pane>
    <el-tab-pane><span slot="label">
        <el-badge :value="200" :max="99" class="item">
          MY
        </el-badge>
      </span></el-tab-pane>
    <el-tab-pane><span slot="label">
        <el-badge :value="200" :max="99" class="item">
          MY
        </el-badge>
      </span></el-tab-pane>
    <el-tab-pane><span slot="label">
        <el-badge :value="200" :max="99" class="item">
          MY
        </el-badge>
      </span></el-tab-pane>
    <el-tab-pane><span slot="label">
        <el-badge :value="200" :max="99" class="item">
          MY
        </el-badge>
      </span></el-tab-pane>
  </el-tabs>
  <!-- </el-menu> -->
</template>

<script>
  export default {
    props: ['asideLeftMenu'],
    watch: {
      asideLeftMenu: function(val) {
        console.log(val)
        this.asideMenu1 = val[0] // ?????????????
        this.asideMenu = this.asideMenu1.slice(0, 30)
      }
    },
    computed: {
      noMore() {
        return this.asideMenu.length >= this.asideMenu1.length
      },
      disabled() {
        return this.loading || this.noMore
      }
    },
    data() {
      return {
        activeSaleSite: 'SG',
        asideMenu: [],
        asideMenu1: [],
        active: {},
        enterVal: '',
        clickActive: {},
        clickVal: '',
        // count: 10,
        loading: false,
        curPage: 1,
        divHeight: 0
      }
    },
    mounted() {
      this.asideMenu = this.asideMenu1.slice(0, 30);
      window.onresize = () => {
        this.calcHeight()
      }
    },
    methods: {
      calcHeight() {
        this.divHeight = window.innerHeight - 100
      },
      handleClick(tab, event) {
        this.calcHeight()
      },
      toChat(name, index) {
        this.clickVal = index;
        this.clickActive = {
          'background-color': '#ecf5ff'
        };
        this.$store.commit('TOCHAT', name)
      },
      // 移入
      mouseEnter(index) {
        this.enterVal = index;
        this.active = {
          'background-color': '#ecf5ff',
          'cursor': 'pointer'
        };
        // // 操作dom 获取p标签改变其样式
        // var acps = this.$refs.acp
        // acps.style.color = "red"
      },
      // 移出
      mouseLeave() {
        this.enterVal = "";
        this.active = "";
        // this.$refs.acp.style = ''
      },
      load() {
        this.loading = true
        setTimeout(() => {
          this.curPage += 1
          this.asideMenu = this.asideMenu1.slice(0, 30 + 10 * this.curPage);
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style>
  .infinite-list-wrapper {
    height: 80%;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .el-tabs__nav-next,
  .el-tabs__nav-prev {
    line-height: 78px;
  }

  .asideLeftMenuTab .el-tabs__nav-scroll {
    height: 80px;
    line-height: 80px;
  }

  /* .tabSaleSite * {
		line-height: 24px;
	} */
</style>
