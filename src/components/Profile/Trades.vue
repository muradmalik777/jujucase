<template>
    <div class="spacing full-width">
        <v-data-table
            :headers="headers"
            :items="data"
            hide-actions
            :pagination.sync="pagination"
            class="trades-table">
            <template v-slot:items="props">
                <td>{{ props.item._id }}</td>
                <td>{{ props.item.amount }}</td>
                <td>{{ props.item.status }}</td>
                <td>{{ props.item.code }}</td>
                <td>{{ props.item.bot_id }}</td>
                <td>{{ props.item.time }}</td>
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
                    text: 'ID',
                    value: 'id',
                    align: 'left',
                    sortable: false
                },
                {
                    text: 'Amount',
                    value: 'amount',
                    align: 'left',
                    sortable: false
                },
                {
                    text: 'Status',
                    value: 'status',
                    align: 'left',
                    sortable: false
                },
                {
                    text: 'Code',
                    value: 'code',
                    align: 'left',
                    sortable: false
                },
                {
                    text: 'Bot',
                    value: 'bot',
                    align: 'left',
                    sortable: false
                },
                {
                    text: 'Time',
                    value: 'time',
                    align: 'left',
                    sortable: false
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
    },
    mounted: function() {
        let self = this;
        let api = new Api('/users')
        let endpoint = this.user.steam_id + '/trades';
        api.get(endpoint).then(response =>{
            self.data = response;
        }).catch(() => {

        })
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.trades-table {
    width: 100%;
}
</style>
