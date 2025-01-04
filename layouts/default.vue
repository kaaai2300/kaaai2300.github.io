<template>
    <div style="height: 100%;">
        <header>kaaai2300</header>
        <div class="container">
            <slot></slot>
        </div>
        <footer>
            © kaaai2300 2025
        </footer>
    </div>
</template>
  
<style scoped>
header {
    font-size: 24px;
    font-weight: bold;
    padding: 16px;
    margin: 0 0 32px 0;
    border-bottom: 1px solid #eaeaea;
}
footer {
    margin-top: 32px;
    padding: 4px;
}
.container {
  width: auto;
  height: 100%;
  max-width: 1032px;
  margin: 0 auto;
}
</style>