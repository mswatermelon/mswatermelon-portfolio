<template lang='pug'>
    .router
        template(v-if="$route.meta.login")
            .login
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
