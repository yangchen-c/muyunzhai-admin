<template>

  <vue2-org-tree :data="data1" :horizontal="false" :label-class-name="labelClassName" collapsable
    @on-expand="onExpand" />
</template>

<script>
  import {
    teamList
  } from '@/api/api'
  export default {
    name: '',
    data() {
      return {
        labelClassName: "bg-color-orange",
        data1: {},
        data: {
          id: 0,
          label: "XXX科技有限公司",
          children: [{
              id: 2,
              label: "产品研发部",
              children: [{
                  id: 5,
                  label: "研发-前端"
                },
                {
                  id: 6,
                  label: "研发-后端"
                },
                {
                  id: 9,
                  label: "UI设计"
                },
                {
                  id: 10,
                  label: "产品经理"
                }
              ]
            },
            {
              id: 3,
              label: "销售部",
              children: [{
                  id: 7,
                  label: "销售一部"
                },
                {
                  id: 8,
                  label: "销售二部"
                }
              ]
            },
            {
              id: 4,
              label: "财务部"
            },
            {
              id: 9,
              label: "HR人事"
            }
          ]
        }
      }
    },
    created() {
      this.getList();
    },
    methods: {

      getList() {
        const params = {
          id: 1,

        };
        const params1 = {
          //   name: this.listQuery.name !== "" ? this.listQuery.name : undefined,
        };
        teamList(params, params1)
          .then((response) => {
            console.log(123, response.data.data)
            this.data1 = response.data.data
          })
          .catch(() => {
            console.log('失败')
          });
      },

      collapse(list) {
        console.log(123)
        var _this = this;
        list.forEach(function (child) {
          if (child.expand) {
            child.expand = false;
          }
          child.children && _this.collapse(child.children);
        });
      },
      onExpand(e, data) {
        console.log(data)

        if ("expand" in data) {
          data.expand = !data.expand;
          if (!data.expand && data.children) {
            this.collapse(data.children);
          }
        } else {
          this.$set(data, "expand", true);
        }
      },
    }
  }

</script>


<style lang="less">
  .bg-color-orange {
    color: #fff;
    background-color: orange;
  }

</style>


<style lang="less" scoped>

</style>
