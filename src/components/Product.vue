<template>
  <div class="container">
    <div class="image-container">

    </div>
    <div class="detail-container">
      <div class="title">
        {{product.name}}
      </div>
      <div class="description">

      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
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

.title {
  font-size: 16px;
}

.description{
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis
}
</style>