<template>
    <div class="news-list">
        <el-form ref="form" :model="form"
          :inline="true" class="search-form">

            <el-form-item label="创建时间" class="float-left"
              prop="dateRange">
              <el-date-picker
                v-model="form.dateRange"
                style="width:350px"
                type="datetimerange"
                align="right"
                range-separator=" 到 "
              ></el-date-picker>
            </el-form-item>

            <el-form-item class="float-left">
                <el-button type="primary" @click="handleSubmit" :loading="isLoading">
                    {{ isLoading ? '' : '搜索' }}
                </el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
        <div style="text-align: right; padding: 5px 0;">
          <el-button type="primary" @click="handleAddNew">创建新闻</el-button>
        </div>
        <grid :remote-method="loadList" :page-index="pageIndex" ref="grid" style="flex: 1;" class="nowrap-list">
            <el-table-column label="操作" min-width="180">
                <template scope="scope">
                    <el-button size="small" 
                      @click="handleEdit(scope.row)">
                        编辑
                    </el-button>
                    <el-button size="small" :type="scope.row.isOnShelve ? 'warning' : 'danger'"  @click="handleToggleStatus(scope.row)">
                        {{scope.row.isOnShelve ? '下架' : '上架'}}
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column label="新闻标题" prop="title" min-width="160">
            </el-table-column>
            <el-table-column label="新闻摘要" 
              min-width="160" prop="summary"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="状态" 
              min-width="160" prop="status">
              <template scope="scope">
                  {{scope.row.isOnShelve ? '已上架' : '已下架'}}
              </template>
            </el-table-column>
            <el-table-column label="创建人" 
              min-width="160" prop="createUserName">
            </el-table-column>
            <el-table-column label="创建时间" 
              prop="createDate" min-width="170">
            </el-table-column>
        </grid>
    </div>

</template>
<script lang="babel" type="text/babel">
  import {
    TableColumn, Button,
    Form, FormItem, MessageBox, DatePicker,
  } from 'element-ui';
  import grid from '@/components/grid';
  import bikeNewsSvc from '@/services/bikeNews';

  export default {
    components: {
      grid,

      elTableColumn: TableColumn,
      elButton: Button,
      elForm: Form,
      elFormItem: FormItem,
      elDatePicker: DatePicker,
    },
    data() {
      return {
        pageIndex: 1,
        isLoading: false,
        form: {
          dateRange: ['', ''],
        },
      };
    },
    async mounted() {
      this.handleSubmit();
    },
    methods: {
      handleReset() {
        this.$refs.form.resetFields();
        this.handleSubmit();
      },
      handleSubmit() {
        this.$refs.grid.loadData(this.form);
      },
      handleRefresh() {
        this.handleSubmit();
      },
      handleEdit(record) {
        this.$emit('edit-record', record);
      },
      handleAddNew() {
        this.$emit('edit-record', {});
      },
      handleToggleStatus(item) {
        MessageBox.confirm(
          `确定要${item.isOnShelve ? '下架' : '上架'}吗?`,
          '提示',
          {
            type: 'warning',
            beforeClose: async (actionType, instance, done) => {
              if (actionType === 'confirm') {
                const upEntity = Object.assign({}, item);
                upEntity.isOnShelve = !upEntity.isOnShelve;
                this.doToggleStatus(upEntity);
              }
              done();
            },
          },
        );
      },
      doToggleStatus(model) {
        bikeNewsSvc.updateNewsInfo(model);
        this.$refs.grid.reload();
      },
      loadList(filterParams) {
        const response = bikeNewsSvc.getNewsList(filterParams);
        return response;
      },
    },
  };
</script>
<style lang="less">
  .news-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;

    .float-left {
      float: left;
    }
  }
</style>

