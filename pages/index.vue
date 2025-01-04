<script setup lang="ts">
import Card from '~/components/Card.vue';

</script>

<template>
    <main>
        <ContentList path="/article">
            <template #default="{ list }">
                <Card v-for="article in list" :key="article._path">
                    <NuxtLink :to="article._path">
                        <div class="card_body">
                            <div class="card_title">
                                {{ article.title }}
                            </div>
                            <div class="card_date">
                                {{ article.date }}
                            </div>
                        </div>
                    </NuxtLink>
                </Card>
            </template>
            <template #not-found>
                <p>No articles found.</p>
            </template>
        </ContentList>
    </main>
</template>
<style scoped>
.card_body {
    padding: 16px
}
.card_title {
    color: #1A1A1C;
    font-size: 24px;
    font-weight: bold;
}
.card_date {
    margin: 8px 0 0 0;
    color: #4D4D4D;
    font-size: 12px 
}
a {
    text-decoration:none;
}
</style>
<!-- #f9f9f9 -->