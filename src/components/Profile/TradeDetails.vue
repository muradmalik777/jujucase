<template>
    <div class="spacing full-width">
        <v-data-table
            :headers="headers"
            :items="data"
            hide-actions
            :pagination.sync="pagination"
            class="trades-table">
            <template v-slot:items="props">
                <td>{{ props.item.time }}</td>
                <td>{{ props.item.case_id }}</td>
                <td>{{ props.item.case_name }}</td>
                <td>{{ props.item.case_price }}</td>
                <td>{{ props.item.case_content }}</td>
                <td>{{ props.item.case_percentage }}</td>
            </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages" circle color="#73337a"></v-pagination>
        </div>
    </div>
</template>
<script>
import Api from './../../services/Api.js';

export default {
    name: 'trades',
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    data: function () {
        return {
            headers: [
                {
                    text: 'Time',
                    value: 'time',
                    align: 'left',
                    sortable: false,
                    width: '10%'
                },
                {
                    text: 'Case ID',
                    value: 'case_id',
                    align: 'left',
                    sortable: false,
                    width: '25%'
                },
                {
                    text: 'Case Name',
                    value: 'case_name',
                    align: 'left',
                    sortable: false,
                    width: '15%'
                },
                {
                    text: 'Case Price',
                    value: 'case_price',
                    align: 'left',
                    sortable: false,
                    width: '10%'
                },
                {
                    text: 'Case Content',
                    value: 'case_content',
                    align: 'left',
                    sortable: false,
                    width: '25%'
                },
                {
                    text: 'Case Percentage',
                    value: 'case_percentage',
                    align: 'left',
                    sortable: false,
                    width: '15%'
                }
            ],
            data: [],
            pagination: {
                descending: false,
                page: 5,
                rowsPerPage: 6,
                totalItems: 10
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

</style>
