<template>
  <div class="main-container">
    <div class="app-title">
      <p>
        LexMea
      </p>
    </div>
    <div class="filter-container">
      <div class="column">Filter1</div>
      <div class="column">Filter2</div>
      <div class="column">Filter3</div>
    </div>
    <span v-if="isPending">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <div v-else class="list-container">
      <div v-bind="containerProps" class="list-container">
        <div v-bind="wrapperProps">
          <div v-for="product in products" :key="product.id" class="item-container">
            <div class="list-item">
              <div class="image-container">

              </div>
              <div class="detail-container">
                <p class="item-title">
                  {{product.name}}
                </p>
                <p class="item-description">
                  {{product.description}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useVirtualList } from '@vueuse/core';
import { ref, } from 'vue';
import { useQuery } from '@tanstack/vue-query'

const url = `https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json`
const products = ref([]);

const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['products'],
  queryFn:  async () => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const {products} = await response.json()
    return products
  },
})
// Update items when data changes
products.value = data.value || [];

// Use virtual list
const virtualList = useVirtualList(products, {
  /**
   * Implement itemHeight function to specify the height of each item.
   * Adjust this according to your actual item height.
   */
  itemHeight: () => 100,
});

</script>

<style scoped>
.main-container{
  width: 100%;
  height: 90vh;
}
.app-title {
  background-color: #3498db;
  text-align: center;
  color: #ecf0f1;
  height: 40px;
  padding-top:1px;
  align-items: center; /* Vertical alignment */
  justify-content: center; /* Horizontal alignment */
}
.filter-container {
  background-color: #ecf0f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.column {
  flex: 1;
  text-align: center;
}
.list-container{
  width: 100%;
  height: 500px;
}
.item-container{
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically (optional) */
  height: 100px;
}

.list-item {
  border: 2px solid #bdc3c7;
  border-radius: 1px;
  display: flex;
  flex: 1;
  height: 100%;
  margin-top: 20px;
}

.image-container{
  width: 30%;
  height: 100%;
}

.detail-container{
  width: 70%;
  height: 100%;
}

.item-title {
  font-size: 16px;
}

.item-description{
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis
}
</style>
