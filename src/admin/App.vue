<template lang='pug'>
    .app-root
        .app-root__container
            header.app-root__header.header
                .header__container
                    .current-user
                        .current-user__avatar
                        .current-user__info
                            p.current-user__name Владимир Астаханов
                            a.current-user__exit Выйти
                        .header__title Панель администрирования
                    .header__actions
                        a.header__exit(@click.prevent="logOut") Выйти
            .app-root__router
                template(v-if="$route.meta.login")
                    router-view
                template(v-else)
                    .app-root__btns
                        ul.view-links
                            li.view-links__item
                                router-link(to="/", exact-active-class="view-links__to--active").view-links__to  Обо мне
                            li.view-links__item
                                router-link(to="/works", exact-active-class="view-links__to--active").view-links__to Работы
                            li.view-links__item
                                router-link(to="/reviews", exact-active-class="view-links__to--active").view-links__to Отзывы
                    .app-root__main
                        router-view
</template>
<script>
    import { mapActions } from "vuex";

    export default {
        methods: {
            ...mapActions("user", ["logout"]),
            logOut() {
                this.logout();
                this.$router.replace("/login");
            }
        }
    }
</script>

<style lang="pcss">
    @import "normalize.css";
    @import "../styles/mixins.pcss";
    @import "../styles/layout/base.pcss";
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

    body {
        font-family: 'Open Sans', Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.42;
    }

    .admin-wrapper {
        display: flex;

        .maincontent {
            width: 100%;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
    }

    .header {
        color: $white;
        background-color: #3e3e59;
        background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    }

    .header__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 60px 19px;

        @include tablets {
            padding: 16px 30px 19px;
        }

        @include phablets {
            padding: 16px 21px 19px;
        }
    }

    .header__title {
        opacity: 0.5;
        font-size: 14px;

        @include phablets {
            display: none;
        }
    }

    .current-user {
        display: flex;
        align-items: center;
    }

    .current-user__avatar {
        width: 45px;
        height: 45px;
        fill: $white;
        margin-right: 16px;
        overflow: hidden;
        border-radius: 50%;
        background: url("../images/content/user.jpg") no-repeat;
        background-size: 45px 45px;
    }

    .current-user__info {
        margin-right: 28px;

        @include phablets {
            display: flex;
            flex-direction: column;
        }
    }

    .current-user__name {
        font-size: 18px;
        line-height: 34px;
        margin: 0;
    }

    .current-user__exit {
        display: none;

        @include phablets {
            display: block;
        }
    }

    .header__exit {
        @include phablets {
            display: none;
        }
    }

    .current-user__exit,
    .header__exit {
        opacity: 0.7;
        font-size: 16px;
        line-height: 24px;
        text-decoration: underline;
    }

    .view-links {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .view-links__to {
        text-decoration: none;
        color: $text-color;
        font-size: 16px;
        line-height: 36.14px;
        padding: 30px;
        border-bottom: 3px solid transparent;

        @include tablets {
            padding-left: 28px;
            padding-right: 28px;
        }

        @include phablets {
            padding-left: 19px;
            padding-right: 19px;
        }
    }

    .view-links__item {
        padding: 26px;

        @include tablets {
            padding-left: 28px;
            padding-right: 28px;
        }

        @include phablets {
            padding-left: 19px;
            padding-right: 19px;
        }
    }

    .view-links__to--active {
        border-color: #383bcf;
        color: #383bcf;
    }

    .app-root {
        height: 100%;
    }

    .app-root__btns {
        padding: 0 60px;

        @include tablets {
            padding: 0 32px;
        }

        @include phablets {
            padding: 0 24px;
        }
    }

    .app-root__main {
        flex: 1;
        padding: 60px 58px 30px 60px;
        background: url("../images/content/Mountain_Baloon.png") center / cover no-repeat;
    }

    .app-root__router {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .app-root__container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
