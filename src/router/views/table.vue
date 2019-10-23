<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Table',
    meta: [{ name: 'description', content: 'The Table page.' }],
  },
  components: { Layout },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortBy: 'term',
      sortDesc: false,
      fields: [
        { key: 'id', stickyColumn: false, isRowHeader: false },
        { key: 'term', sortable: true },
        'url',
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <h1>Table</h1>
    <div>
      <b-table
        style="height: 790px"
        :sticky-header="stickyHeader"
        striped
        :items="items"
        :fields="fields"
        primary-key="id"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        responsive
      >
        <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
        <template v-slot:head(id)>
          <div class="text-nowrap">ID</div>
        </template>
        <template v-slot:head()="scope">
          <div class="text-nowrap">
            {{ scope.label }}
          </div>
        </template>
        <!-- A custom formatted column -->
        <template v-slot:cell(url)="data">
          <b-img-lazy
            thumbnail
            :src="data.value"
            fluid
            alt="Responsive image"
            width="300"
          ></b-img-lazy>
        </template>
      </b-table>
      <div>
        Sorting By: <b>{{ sortBy }}</b
        >, Sort Direction:
        <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
      </div>
    </div>
  </Layout>
</template>
