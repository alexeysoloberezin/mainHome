<template>
  <div class="priceBox">
    <div v-if="price.monthlyX1" class="priceBox-item">
      <span>Monthly</span>
      <span>{{ calcPrice(price.monthlyX1) }} IDR <span>/ month</span></span>
    </div>
    <div v-if="price.monthlyX2" class="priceBox-item">
      <span>Two months</span>
      <span>{{ calcPrice(price.monthlyX2) }} IDR <span>/ month</span></span>
    </div>
    <div v-if="price.monthlyX3" class="priceBox-item">
      <span>Three months</span>
      <span>{{ calcPrice(price.monthlyX3) }} IDR <span>/ month</span></span>
    </div>

    <div v-if="price.yearly" class="priceBox-item">
      <span>Yearly</span>
      <span>{{ calcPrice(price.yearly) }} IDR</span>
    </div>

    <div class="hiddenBtn" @click="hide = !hide">
      {{ $t('hiddenPrice') }}
    </div>
    <div class="pl-3" v-if="!hide">
      <div v-if="price.weekX2" class="priceBox-item small">
        <span>Two weeks</span>
        <span>{{ calcPrice(price.weekX2) }} IDR</span>
      </div>
      <div v-if="price.week" class="priceBox-item small">
        <span>Week</span>
        <span>{{ calcPrice(price.week) }} IDR</span>
      </div>
      <div v-if="price.daily" class="priceBox-item small">
        <span>Daily</span>
        <span>{{ calcPrice(price.daily) }} IDR</span>
      </div>
    </div>

  </div>
</template>

<script>
import {makePrice} from "~/helper/makeMillion"

export default {
  name: "PriceBox",
  props: {
    price: Object
  },
  data(){
    return {
      hide: true
    }
  },
  methods: {
    calcPrice(price){
      return makePrice(price)
    }
  }
}
</script>

<style scoped lang="scss">
.hiddenBtn{
  cursor: pointer;
  text-decoration: underline;
  margin: 5px 0;
}
.priceBox{
  &-item{
    display: grid;
    grid-template-columns: 120px 1fr;
    border-bottom: 1px solid rgba(220, 220, 220, 0.3);
    padding: 8px 0;
    font-size: 19px;
    font-weight: 500;
    color: #4d4d4d;
    span:first-child{
      font-weight: 600;
    }
    &>span>span{
      font-size: 16px;
      color: rgba(133, 133, 133, 0.75);
    }
    &.small{
      font-size: 17px;
      color: rgba(133, 133, 133, 0.75);
    }
   }
}
</style>
