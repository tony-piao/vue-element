<template>
  <div style="display: flex; flex-direction: column; flex-grow: 1;">
    <div style="display:flex; flex-grow:1;">
      <el-table
        :data="data"
        height="100%"
        :stripe="true"
        :fit="true"
        :border="true"
        highlight-current-row>
        <slot></slot>
      </el-table>
    </div>

    <el-pagination
      @size-change="_handleSizeChange"
      @current-change="_handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="totalCount">
    </el-pagination>
  </div>
</template>
<script type="text/babel">
  import { Table, Pagination } from 'element-ui';

  let postData;

  export default{
    props: {
      remoteMethod: {
        type: Function,
        required: true,
      },
      defaultPageIndex: {
        type: Number,
        default: 1,
      },
      defaultPageSize: {
        type: Number,
        default: 20,
      },
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30];
        },
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper',
      },
    },
    data() {
      return {
        data: [],
        totalCount: 0,
        pageIndex: 1,
        pageSize: 20,
      };
    },
    mounted() {
      this.pageIndex = this.defaultPageIndex;
      this.pageSize = this.defaultPageSize;
    },
    components: {
      elTable: Table,
      elPagination: Pagination,
    },
    methods: {
      async loadData(params) {
        if (params) {
          postData = Object.assign(params);
        }
        postData.pageIndex = this.pageIndex;
        postData.pageSize = this.pageSize;

        const response = await this.remoteMethod(postData);
        if (response) {
          const { data, recordsCount } = response;
          this.data = data;
          this.totalCount = recordsCount;
        }
      },
      async reload() {
        return this.loadData(postData);
      },
      _handleSizeChange(size) {
        this.pageSize = size;
        this.loadData(postData);
      },
      _handleCurrentChange(current) {
        this.pageIndex = current;
        this.loadData(postData);
      },
    },
  };
</script>
