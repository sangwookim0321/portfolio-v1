<template>
  <div v-if="isLoading" class="modal__wrap active">
    <div class="spinner-container">
      <div class="spinner" />
    </div>
  </div>
</template>

<script>

export default {
    props: {
        isLoading: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    name: "LoadingSpinner"
}
</script>


<style scoped>
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;
}
.spinner {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid #e0e0e0;
    border-bottom: 5px solid #fe9616;
    animation: spin 1s linear infinite;
    position: relative;
    z-index: 9999;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>