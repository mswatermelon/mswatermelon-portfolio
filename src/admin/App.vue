<template lang='pug'>
    .router
        template(v-if="$route.meta.login")
            router-view
        template(v-else)
            .admin
                router-link(to="/") Перейти в about
                router-link(to="/works") Перейти в works
                router-link(to="/reviews") Перейти в reviews

                router-view
</template>
<script>
</script>

<style lang="pcss">
    @import "normalize.css";
    @import "../styles/mixins.pcss";
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

    body {
        font-family: 'Open Sans', Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.42;
    }
</style>
