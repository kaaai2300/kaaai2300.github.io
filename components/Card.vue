<script setup lang="ts">
import { Title } from '#build/components';

</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card {
    margin: 0 0 8px 0;
    border: 1px solid #eaeaea;
    background-color: #f9f9f9;
    border-radius: 12px
}
</style>