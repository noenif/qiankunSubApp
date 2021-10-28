// export default {
//   data() {
//     return {
//       pagination: {
//         onChange: current => this.onPage(current),
//         pageSize: 10,
//         current: 1,
//         showQuickJumper: false,
//         showSizeChanger: false,
//         total: 0
//       }
//     }
//   },
//   methods: {
//     /* eslint-disable */
//     onPage(current) {
//       this.$error({ title: 'pagination mixin 必须要覆盖翻页方法' })
//     },
//     onSizeChange(current, size) {
//       this.pagination.current = 1
//       this.pagination.pageSize = 10
//       this.$error({ title: 'pagination mixin 必须要覆盖切换pageSize方法' })
//     }
//   }
// }

export default {
  data() {
    return {
      pagination: {
        onChange: current => this.onPage(current),
        onShowSizeChange: (current, size) => this.onSizeChange(current, size),
        pageSize: 10,
        current: 1,
        showSizeChanger: true,
        showQuickJumper: false,
        pageSizeOptions: ['10', '20', '30'],
        total: 0,
      }
    }
  },
  methods: {
    /* eslint-disable */
    onPage(current) {
      this.$error({ title: 'pagination mixin 必须要覆盖翻页方法' })
    },
  }
}
