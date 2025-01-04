<template>
    <h2>
        <slot></slot> <!-- 文字がここに展開される -->
    </h2>
</template>
<style scoped>
h2 {
    font-size: 26px;
    border-left: solid 3px #F36304;
    padding-left: 8px;
    margin: 32px 0;
}
</style>