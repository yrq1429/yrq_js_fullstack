<template>
  <div id="app">
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo"
          mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo" default-active="1">
          <el-menu-item index="1">活动发布</el-menu-item>
          <el-menu-item index="2">活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step">
            <el-step title="活动信息"></el-step>
            <el-step title="报名签到"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>
          </el-steps>
          <div class="step1">
            <!-- ref  锚点 -->
            <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
              <el-form-item prop="name" label="活动名称">
                <el-input v-model="ruleForm.name" size="larget"></el-input>
              </el-form-item>
              <el-form-item prop="fenLei" label="">
                <el-row style="height:35px;" type="flex" align="middle">
                  <el-col :span="3" style="width:90px;">
                    <div class="el-form-item__label">活动分类</div>
                  </el-col>
                  <el-col :span="2" style="width:90px;">
                    <el-button type="text" @click.prevent="dialogFormFenLeiVisible=true">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenlei">
                  <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
              <el-form>
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenLeis" type="primary"  :key="fenLei.name" @close="handleClose(fenLei.name)" closable>{{fenLei.name}}</el-tag>
                  <el-input v-model="text"></el-input>
                  <div class="sureButton">
                    <el-button type="primary" @click.prevent="addActive()">确定</el-button>
                    <el-button type="primary">取消</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </el-dialog>
              <el-row style="height:35px;" type="flex" align="middle">
                <el-col :span="3" style="width:90px;">
                  <div class="el-form-item__label">活动标签</div>
                </el-col>
              </el-row>
              <el-row style="height:35px;" type="flex" align="middle">
                <el-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleCloseLabel(tag)">
                  {{tag}}
                </el-tag>
                <button type="button" class="el-button el-button--default el-button--large" style="vertical-align: middle; margin: 10px;" @click.prevent="dynamicTagsVisible=true"><i class="el-icon-plus"></i></button>
              </el-row>
              <el-dialog title="设置活动标签" :visible.sync="dynamicTagsVisible">
                <el-input></el-input>
                  <div class="addLabelButton">
                    <el-button type="primary">确定</el-button>
                    <el-button type="primary">取消</el-button>
                  </div>
              </el-dialog>
              <el-row style="height:35px;" type="flex" align="middle">
                <el-col :span="3" style="width:90px;">
                  <div class="el-form-item__label">活动时间</div>
                </el-col>
              </el-row>
              <el-row class="rowLabel" style="height:35px;" type="flex" align="middle">
                <el-date-picker v-model="value2" align="right" type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <el-time-picker
                  v-model="value6"
                  type="datetime"
                  placeholder="开始时间"
                  :default-time="['12:00:00']">
                </el-time-picker>
                <div class="el-col el-col-1" style="text-align: center;">—</div>
                <el-date-picker v-model="value7" align="right" type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <el-time-picker
                  v-model="value8"
                  type="datetime"
                  placeholder="开始时间"
                  :default-time="['12:00:00']">
                </el-time-picker>
              </el-row>
              <el-row style="height:35px;" type="flex" align="middle">
                <el-col :span="3" style="width:90px;">
                  <div class="el-form-item__label">报名时间</div>
                </el-col>
              </el-row>
              <el-row class="rowLabel" style="height:35px;" type="flex" align="middle">
                <el-date-picker v-model="value2" align="right" type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <el-time-select
                placeholder="请选择时间点"
                v-model="value9"
                :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
              </el-time-select>
                <div class="el-col el-col-1" style="text-align: center;">—</div>
                <el-date-picker v-model="value7" align="right" type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
                <el-time-select
                placeholder="请选择时间点"
                v-model="value9"
                :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                </el-time-select>
              </el-row>
              <el-row class="rowLabel" style="height:35px;" type="flex" align="middle">
                <el-col :span="3" style="width:90px;">
                  <div class="el-form-item__label">活动地点</div>
                </el-col>
              </el-row>
              <el-row style="height:35px;" type="flex" align="middle">
                <el-col :span="3" style="width:90px;">
                  <div class="el-form-item__label">活动人数</div>
                </el-col>
              </el-row>
              <el-row class="rowLabel" style="height:35px;" type="flex" align="middle">
                <el-radio v-model="radio" label="无限制">无限制</el-radio>
                <el-radio v-model="radio" label="限制">限制</el-radio>
                <el-col :span="6" class="leftLabel">
                <el-input placeholder="0"  size="large" v-model="people" :disabled="radio == '无限制'"><template slot="append">人</template></el-input>
                </el-col>
              </el-row>
              <el-row style="height:35px;" type="flex" align="middle">
                <el-col :span="3" style="width:90px;">
                  <div class="el-form-item__label">活动封面</div>
                </el-col>
              </el-row>
              <el-row class="rowLabel" type="flex" align="middle">
                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-row>
              

          </div>

          <!-- 按钮组 上一步 下一步 发布活动 v-show="step!=0"  v-show="step!=4"-->
          <el-button-group>
            <el-button
            type="primary"
            v-show="preStep"
            @click.native.prevent="handlePreStep">上一步</el-button>
            <el-button type="primary" v-show="nextStep"
             @click.native.prevent="handleNextStep">下一步</el-button>
            <el-button type="primary">发布活动</el-button>
          </el-button-group>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      people: '',
      value2:'',
      radio: "无限制",
      step: 2,
      value7:'',
      value8:'',
      value6: '',
      value9:'',
      value10:'',
      preStep: true,
      text: '',
      nextStep: true,
      dialogFormFenLeiVisible: false,
      dynamicTagsVisible: false,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
      },
      },
      ruleForm: {
        name: '',
        fenLeis: [
          {
            name: '未发布'
          },
          {
            name: '测试活动'
          },
          {
            name: '精彩活动'
          }
        ],
        fenLei: '测试活动',
        tags: []
      },
      dynamicTags: ['精彩活动'],
    };
  },
  components: {
    
  },
  mounted() {
    
  },
  methods: {
    
    handleClose(tag) {
      this.dialogFormFenLeiVisible = false
      for (let index = 0; index < this.ruleForm.fenLeis.length; index++) 
      {
        if (this.ruleForm.fenLeis[index].name == tag) {
          this.ruleForm.fenLeis.splice(index, 1);
          return;
        }
      }
    },
    handleCloseLabel(tag) {
      this.dynamicTags.splice(tag)
    },
    handlePreStep() {
      this.step--;
      this.goStep(this.step);
    },
    handleNextStep() {
      this.step++;
      this.goStep(this.step);
    },
    addActive() {
      // if (this.text != '') {
        this.ruleForm.fenLeis.push({name:this.text.trim()})
      // } 
      //   for (var i = 0; i < this.ruleForm.fenLeis.length; i++) {
      //   if (this.ruleForm.fenLeis[i].name == this.test) {
      //     console.log("重复");
      //     return;
      //   }
      // }
      
      
    },
    goStep(n) {
      switch (n) {
        case 0:
          this.preStep = false;
          this.nextStep = true;
          break;
        case 1:
          this.preStep = true;
          this.nextStep = true;
        case 2:
          this.preStep = true;
          this.nextStep = true;
          break;
        case 3:
          this.preStep = true;
          this.nextStep = false;
          break;
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
.addLabelButton {
  margin-left: 480px;
  margin-top: 20px;
}
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: 4px solid #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header.el-menu-demo {
  padding-left: 300px !important;
}
main {
  margin-top: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-left {
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}
.leftLabel {
  margin-left: 10px;
}
.el-upload__tip {
  text-align: center
}
.rowLabel {
  margin-bottom: 20px;
}
main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}
main .el-menu {
  background-color: transparent !important;
}
.sureButton {
  float: right;
}
</style>
