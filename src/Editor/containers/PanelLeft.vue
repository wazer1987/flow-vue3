<script setup >
import wCard from "../components/wCard.jsx";
import wCardItem from "@/Editor/components/wCardItem.jsx";
import wNodeElement from "@/Editor/components/wNodeElement.jsx";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const {t} = useI18n()
const {materialList} = defineProps({
  materialList: Array
})
const emit = defineEmits()
const materials = computed(() => {
  return materialList.filter((item) =>  item.enable)
})
</script>
          
<template>
  <w-card  placement="left" :title="t('L10000')" position="right" :width="250">
    <w-card-item v-for="(item,index) in materials" :key="index" :title="t(item.lang)" :enableFold="true" :bold="true"> 
      <w-node-element
        v-for="(child, childIndex) in item.children.filter(target => target.enable)"
        :key="childIndex"
        :title="child.label"
        :info="child"
      />
    </w-card-item>
  </w-card>
</template>
           
           
<style scoped>
</style>