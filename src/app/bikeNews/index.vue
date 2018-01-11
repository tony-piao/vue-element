<template>
    <page-view>
        <div style="width: 100%; padding: 0;" v-if="editRecord">
            <bike-news-form :edit-record="editRecord" v-if="editRecord" @close="_handleFormClose"></bike-news-form>
        </div>
        <bike-news-list v-if="!editRecord" @edit-record="_handleEditRecord"></bike-news-list>
    </page-view>
</template>
<script>
import pageView from '@/components/pageView';
import bikeNewsForm from '@/app/bikeNews/form';
import bikeNewsList from '@/app/bikeNews/list';

export default {
  components: {
    pageView,
    bikeNewsForm,
    bikeNewsList,
  },
  data() {
    return {
      editRecord: null,
    };
  },
  methods: {
    _handleEditRecord(record) {
      this.editRecord = record;
    },
    _handleFormClose() {
      this.editRecord = null;
    },
  },
};
</script>
