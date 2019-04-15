<template>
    <div class="spacing full-width">
        <v-data-table
            :headers="headers"
            :items="data"
            hide-actions
            :pagination.sync="pagination"
            class="trades-table">
            <template v-slot:items="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.amount }}</td>
                <td>{{ props.item.status }}</td>
                <td>{{ props.item.code }}</td>
                <td>{{ props.item.bot }}</td>
                <td>{{ props.item.time }}</td>
            </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages" circle color="#73337a"></v-pagination>
        </div>
    </div>
</template>
<script>
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
            data: [
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                },
                {
                    id: '#44',
                    amount: '$5.04',
                    status: 'DECLINED',
                    code: '34534534ingwe3',
                    bot: 'Bot 3',
                    time: '02/03/209 11:47:56'
                }
            ],
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

.trades-table {
    width: 100%;
}
</style>
