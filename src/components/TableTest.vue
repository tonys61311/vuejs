<template>
    <div class="TableTest">

        <el-table
        :data="tableData"
        style="width: 100%"
        @sort-change="changeSort"
        :default-sort="{prop: 'date', order: 'ascending'}"
        border>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          :sort-orders="['ascending', 'descending']"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          :sort-by="['name', 'address']"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          sortable="custom">
        </el-table-column>
      </el-table>
  
  
    </div>
</template>

<!--排序參考 https://www.cnblogs.com/steamed-twisted-roll/p/11069821.html -->
  
  <script>
  import { useStore } from 'vuex'
  import { computed, ref, reactive, toRefs, watch } from 'vue'
  import { useRouter, useRoute } from "vue-router";
  
  export default {
    name: 'TableTest',
  
    // 組合式API
    setup(props,context){
      const store = useStore() ;
      const router = useRouter();
      const route = useRoute();

      var tableData = [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }];

  
      return {
        tableData
      }
      
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

  
  .TableTest .red{
      color: red ;
  }
  
  .TableTest .show{
    display:none
  }

  .TableTest .el-table .ascending .sort-caret.ascending{
    border-bottom-color:pink ;
  } 

  .TableTest .el-table .descending .sort-caret.descending{
    border-top-color:pink ;
  }

  
  
  </style>
  