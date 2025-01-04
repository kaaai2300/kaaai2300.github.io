<template>
    <p class="mb-4">
        <slot></slot> <!-- 文字がここに展開される -->
    </p>
</template>
<style scoped>
p{
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: .5px;
    font-style: normal;
    margin: 33px 0;
    color: #454545;
}
</style>