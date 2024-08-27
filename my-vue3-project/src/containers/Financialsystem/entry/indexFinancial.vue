<template>
  <div>
    <el-row class="title">
      <el-col :span="24">任意键</el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="4">
        13qrw
      </el-col>
      <el-col :span="20">123</el-col>
    </el-row>
  </div>
</template>  
    
  <script>
import { ElRow, ElCol } from "element-plus";

export default {
  components: {
    ElRow,
    ElCol,
  },
  data() {
    return {
      message: "Hello Vue in Single File Component!",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Message Changed!";
    },
  },
};
</script>  
    
  <!-- 可选的CSS部分 -->  
  <style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  color: blue;
}
.title {
  padding: 16px;
  margin: 0;
  background-color: #18305b;
  color: #fff;
  font-weight: 400;
}
el-col {
  background: red;
  border: 1px red solid;
}
.content{
  background: red;
}
button {
  margin-top: 20px;
}
</style>