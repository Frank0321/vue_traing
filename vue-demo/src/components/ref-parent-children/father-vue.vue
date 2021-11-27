<template>
  <div>
    father vue
    <children ref="chid-item"></children>
    <children ref="chiditem"></children>
    <children ref="chid-item2"></children>
    <children ref="chid-item3"></children>
    <children ref="chid-item4"></children>
    <children></children>
    <h1 class="text-center">{{header}}</h1>
    <child-controller></child-controller>
  </div>
</template>

<script>
import children from '../ref-parent-children/children-vue'
import childController from '../ref-parent-children/child-controller'
export default {
  name: "fatherVue",
  components: {
    children,
    childController,
  },
  data() {
    return {
      header: "我是父子組件的 header"
    }
  },
  mounted() {
    //獲取子組件
    // console.log(this.$refs);
    console.log("父元件操作子元件")
    this.$refs["chid-item"].focus();

    this.$refs["chid-item"].renameHeader('父子組件修改');
    this.$refs.chiditem.val = '我被父元件修改了';
    console.log(this.$children);

    this.$children[3].renameHeader("修改第三個標頭");
  },
  methods: {
    parentRename(data){
      this.header = data;
    }
  }
}
</script>

<style scoped>

</style>