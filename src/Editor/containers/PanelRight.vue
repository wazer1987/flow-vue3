          
<template>
  <w-card placement="right"
          position="left"
          :width="360"
          :title="t('L10003')">
          <w-card-item v-if="isEnableOptions" :title="t('L10004')" :enableFold="true" :bold="true">
            <w-options :editorConfig="props.editorConfig" :toolList="props.toolList" :currentItem="props.currentItem"></w-options>
          </w-card-item>
  </w-card>
</template>

<script setup>
import wCard from "../components/wCard.jsx";
import wCardItem from "@/Editor/components/wCardItem.jsx";
import wOptions from "@/Editor/components/wOptions.jsx";
import { useI18n } from "vue-i18n";
import { computed, reactive, watch,defineProps } from "vue";
import infoPanelop from '../../config/infoPanel.js'
const { t } = useI18n()
const props = defineProps({
  editorConfig: Object,
  toolList: Array,
  currentItem: Array,
})
const infoPanel = computed(() => {
  return  infoPanelop
})
const isEnableOptions = computed(() => {
  return infoPanel.value.options.enable
})
const isEnableNavigator = computed(() => {
  return infoPanel.value.navigator.enable
})
const isEnablePanel = computed(() => {
  return isEnableOptions.value || isEnableNavigator
})


</script>

           
           
<style scoped>
</style>