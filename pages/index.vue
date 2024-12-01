<template>
    <main>
        <ContentList path="/article" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <NuxtLink :to="article._path">
                    <div>
                        {{ article.title }}
                    </div>
                </NuxtLink>
            </div>
        </ContentList>
    </main>
</template>