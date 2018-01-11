<template>
  <el-card
    class="bike-news-page"
    style="padding: 0; margin-bottom: 12px; min-height: 100%;"
  >
    <el-form ref="form" :model="form" label-width="140px">
      <el-row>
        <el-col :span="16">
          <el-form-item label="新闻标题"
            prop="title"
            :rules="[
              { required: true, message: '请填新闻标题' },
            ]">
            <el-input
              type="input"
              :maxlength="30"
              placeholder="请填新闻标题"
              v-model="form.title">
            </el-input>
          </el-form-item>
          <el-form-item label="新闻摘要"
            prop="summary"
            :rules="[
              { required: true, message: '请填新闻摘要' },
            ]">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
              placeholder="请输入新闻摘要"
              :maxlength="200"
              v-model="form.summary">
            </el-input>
          </el-form-item>

          <el-form-item label="新闻正文"
            class="content-editor"
            style="line-height: initial"
            prop="content"
            :rules="[
              { required: true, message: '请填新闻正文' },
            ]">
            <div>
              <ue-editor v-model="form.content"></ue-editor>
            </div>
          </el-form-item>

          <el-form-item label="相关链接">
            
            <el-row>
              <el-col :span="19">
                <el-row v-for="(urlObj, $index) in form.relatedLinks" 
                  :key="$index" style="margin-top: 7px">
                <el-col :span="9">
                  <el-input
                    type="input"
                    placeholder="文字"
                    v-model="urlObj.relatedTitle">
                  </el-input>
                </el-col>
                <el-col :span="9" :offset="1">
                  <el-input
                    type="input"
                    placeholder="url"
                    v-model="urlObj.relatedLink">
                  </el-input>
                </el-col>
                <el-col :span="2" :offset="1">
                  <el-button type="danger" size="small"
                    :disabled="$index === 0"
                    @click="handlePop($index)">
                    <i class="el-icon-delete"></i>
                  </el-button>
                </el-col>
              </el-row>
              </el-col>
              <el-col :span="3">
                <el-button type="primary" 
                  :disabled="form.relatedLinks.length >= 5"
                  @click="handleAddUrl">添加</el-button>
              </el-col>
            </el-row>

          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12" :offset="12">
            <el-form-item>
              <el-button @click="handleClose">关闭</el-button>
              <el-button :loading="isSaving"
                        type="primary"
                        :disabled="form.actStatus>0"
                        @click="handleSubmit">
                提交
              </el-button>
              <el-button type="info" plain 
                :disabled="!this.form.content"
                @click="handlePreview">预览</el-button>
            </el-form-item>
          </el-col>
      </el-row>

      <el-dialog
        title="预览"
        :visible.sync="dialogVisible"
        width="100%">
        <div v-html="form.content"></div>
      </el-dialog>
    </el-form>
  </el-card>
</template>
<script type="text/babel">
  /* eslint-disable new-cap */
  import {
    Message as messageService,
    Card, Row, Col,
    Form, FormItem, Input, Button, Dialog,
  } from 'element-ui';
  import ueEditor from '@/components/ueEditor';
  import bikeNewsSvc from '@/services/bikeNews';

  export default {
    props: {
      editRecord: {
        type: Object,
      },
      type: {
        type: String,
      },
    },
    components: {
      elCard: Card,
      elRow: Row,
      elCol: Col,
      elForm: Form,
      elFormItem: FormItem,
      elInput: Input,
      elButton: Button,
      elDialog: Dialog,
      ueEditor,
    },
    data() {
      return {
        dialogVisible: false,
        isSaving: false,
        form: {
          title: '',
          summary: '',
          content: '',
          relatedLinks: [{
            relatedLink: '',
            relatedTitle: '',
          }],
        },
      };
    },
    async created() {
      const item = Object.assign({}, this.editRecord);
      if (item.guid) {
        this.$set(this, 'form', item);
      }
    },
    methods: {
      handlePicSelect(base64) {
        this.form.posPicUrl = base64;
      },
      handleClose() {
        this.$emit('close');
      },
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            const model = Object.assign({}, this.form);
            // 新增后上架
            if (!model.guid) {
              model.isOnShelve = true;
            }

            const flag = this.form.relatedLinks.every(item => (item.relatedLink && item.relatedTitle)
              || (!item.relatedLink && !item.relatedTitle));

            if (!flag) {
              messageService({
                message: '文字与URL必须同时存在',
                type: 'warning',
              });
              return;
            }

            this.doSubmit(model);
          }
        });
      },
      handleAddUrl() {
        this.form.relatedLinks.push({});
      },
      handlePop(index) {
        this.form.relatedLinks.splice(index, 1);
      },
      handlePreview() {
        this.dialogVisible = true;
      },
      doSubmit(model) {
        bikeNewsSvc.updateNewsInfo(model);
      },
    },
  };
</script>
<style lang="less">
  .bike-news-page {

    .content-editor {
      width: 100%;

      div.el-form-item__content {
        line-height: initial;
      }
    }
  }
</style>
