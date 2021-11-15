<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="订单" name="first">
      <el-input placeholder="全部"></el-input>
      <div style="overflow: auto;" :style={height:vdaH}>
        <div v-for="o in dingdanData" :key="o" class="text item">
          <el-card class="box-card" style="margin: 5px;">
            <div slot="header" class="clearfix">
              <img src="../../static/images/dingdan.png" width="18">
              <span style="font-size:15px;"><b>平台订单状态</b></span>
              <span class="color-9B" style="float: right; padding: 3px 0">普源订单状态</span>
              <br />
              <span>平台订单号<label><img src="../../static/images/fuzhi_o.png" width="20" alt="复制" title="复制"></label></span>
            </div>
            <div>
              <el-row>
                <el-col :span="4"><img src="../../static/images/xiaolian.png" width="50" alt="hh">
                </el-col>
                <el-col :span="16">
                  <el-row>
                    <div
                      style="font-size:16px;width: 150px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden; ">
                      <b>titletitletitletitletitletitletitle</b>
                    </div>
                    <div class="color-9B">子sku属性</div>
                    <div class="color-9B">店铺子sku：店铺子sku</div>
                  </el-row>
                  <el-row style="text-align: center;margin-top: 10px;color: #0073BD;cursor: pointer;">
                    查看全部
                  </el-row>
                </el-col>
                <el-col :span="4" class="text-align-right">111<br>x 2</el-col>
              </el-row>
              <hr>
              <el-row style="margin-top:8px">
                <el-col :span="12" class="color-9B"><img src="../../static/images/qianbao.png" width="15"
                    style="margin:0 10px;">订单金额</el-col>
                <el-col :span="12" class="text-align-right" style="color: #D9001B;font-weight: bold;">Rp
                  11,211</el-col>
              </el-row>
              <el-row style="margin-top:8px">
                <el-col :span="12" class="color-9B"><img src="../../static/images/wuliuchaxun.png" width="15"
                    style="margin:0 10px;">物流信息</el-col>
                <el-col :span="12" class="text-align-right">
                  <el-button size="mini" type="danger" plain>查看物流</el-button>
                </el-col>
              </el-row>
              <el-row style="margin-top:0px">
                <el-col :span="12" class="color-9B"><img src="../../static/images/rili.png" width="16"
                    style="margin:0 10px;">订单时间</el-col>
                <el-col :span="12" class="text-align-right">33</el-col>
              </el-row>
              <el-row style="margin-top:8px">
                <el-col :span="12" class="color-9B"><img src="../../static/images/rili.png" width="16"
                    style="margin:0 10px;">普源发货时间</el-col>
                <el-col :span="12" class="text-align-right">44</el-col>
              </el-row>
              <el-row class="text-align-right">
                <el-button type="danger" size="mini" @click="">发送</el-button>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="商品" name="second">
      <el-row>
        <el-col :span="16">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="标题" value="1"></el-option>
              <el-option label="Item ID" value="2"></el-option>
              <el-option label="店铺子SKU" value="3"></el-option>
              <el-option label="ShopSKU" value="4"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value" placeholder="请选择">
            <el-option label="90天销量倒序" value="1"></el-option>
            <el-option label="刊登时间倒序" value="2"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <div style="overflow: scroll;height:100%;">
        <div v-for="o in 4" :key="o" class="text item">
          <el-card class="box-card" style="margin: 5px;">
            <div>
              <el-row>
                <el-col :span="4"><img src="../../static/images/xiaolian.png" width="50" alt="hh">
                </el-col>
                <el-col :span="20">
                  <el-row>
                    <div
                      style="font-size:15px;width: 300px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden; ">
                      <b>titletitletitletitletitletitletitletitletitletitletitletitletitletitle</b>
                    </div>
                    <el-tag type="danger" size="mini" style="font-weight: bold;margin-top: 4px;">
                      item id</el-tag><img src="../../static/images/fuzhi_o.png" width="18"><br>
                    <el-tag type="warning" size="mini" style="font-weight: bold;margin-top: 4px;">
                      店铺子sku</el-tag><img src="../../static/images/fuzhi_o.png" width="18">
                    <div style="font-weight: bold;color: #D9001B;margin-top: 4px;">Rp 123,456</div>
                  </el-row>
                </el-col>
              </el-row>
              <hr>
              <el-row>
                <el-col :span="12">
                  <span class="color-9B">在线库存123</span> | 90天销量456
                </el-col>
                <el-col :span="12" class="text-align-right">
                  <el-button size="mini">详情</el-button>
                  <el-button type="danger" size="mini">发送</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="优惠券" name="third">
      <div style="overflow: scroll;height:100%;">
        <el-radio-group v-model="isCollapse" size="mini">
          <el-radio-button :label="true">进行中</el-radio-button>
          <el-radio-button :label="false">未开始</el-radio-button>
        </el-radio-group>
        <div v-for="item in 4" :key="item" class="text item">
          <el-card class="box-card" style="margin-top: 5px;">
            <el-row>
              <el-col :span="4">
                <div style="text-align: center;margin-top: 30px;">
                  <img src="../../static/images/shangdian.png" width="50" alt="hh">
                </div>
                <div style="text-align: center;margin-top: 5px;">类型</div>
              </el-col>
              <el-col :span="20">
                <el-row>
                  <div style="font-weight: bold;font-size: 20px;color: #D9001B;">优惠金额</div>
                  <div style="margin-top: 5px;">优惠券名称</div>
                  <div style="margin-top: 5px;" class="color-9B">优惠券ID</div>
                  <div style="margin-top: 5px;" class="color-9B">最低消费金额：rp 64k</div>
                </el-row>
                <hr />
                <el-row style="height: 30px;line-height: 30px;">
                  <el-col :span="4">
                    <el-tag type="success" size="mini">进行中</el-tag>
                  </el-col>
                  <el-col :span="16">
                    2021年12月12日-2022年12月12日
                  </el-col>
                  <el-col :span="4" class="text-align-right">
                    <el-button type="danger" size="mini" @click="sendVoucher(item)">发送</el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second',
        dingdanData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        vdaH: 0,
        input3: '',
        select: '1',
        value: '1',
        isCollapse: true
      }
    },
    created() {
      let h = document.documentElement.clientHeight || document.body.clientHeight;
      this.vdaH = h - 130 + 'px';
    },
    methods: {
      sendVoucher(item) {

      }
    },
    watch: {

    }
  }
</script>

<style>
  .text-align-right {
    text-align: right;
  }

  .color-9B {
    color: #9B9B9B;
  }

  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
