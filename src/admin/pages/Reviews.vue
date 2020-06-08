<template lang="pug">
    .reviews
        .reviews__container
            .reviews__title Блок "Отзывы"
            .reviews__main
                .reviews__main-container
                    new-review
            .content-blocks
                ul.content-blocks__list
                    li.content-blocks__item
                        button.content-blocks__add-block
                            .content-blocks__add-icon
                            .content-blocks__add-title Добавить отзыв
                    li.content-blocks__item
                        .content-blocks__item-container
                            .content-blocks__item-title
                                .review__author
                                    .review__img-container
                                        .review__img
                                    .review__author-info
                                        h3.review__author-name Владимир Сабанцев
                                        .review__author-profession
                                            p Преподаватель
                            .content-blocks__item-content Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            .content-blocks__item-tools
                                .tools
                                    button.tools__item.tools__edit
                                        .tools__item-text Править
                                        .tools__icon.tools__icon-edit
                                    button.tools__item.tools__delete
                                        .tools__item-text Удалить
                                        .tools__icon.tools__icon-delete
                    li.content-blocks__item
                        .content-blocks__item-container
                            .content-blocks__item-title
                                .review__author
                                    .review__img-container
                                        .review__img
                                    .review__author-info
                                        h3.review__author-name Владимир Сабанцев
                                        .review__author-profession
                                            p Преподаватель
                            .content-blocks__item-content Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            .content-blocks__item-tools
                                .tools
                                    button.tools__item.tools__edit
                                        .tools__item-text Править
                                        .tools__icon.tools__icon-edit
                                    button.tools__item.tools__delete
                                        .tools__item-text Удалить
                                        .tools__icon.tools__icon-delete
                    li.content-blocks__item
                        .content-blocks__item-container
                            .content-blocks__item-title
                                .review__author
                                    .review__img-container
                                        .review__img
                                    .review__author-info
                                        h3.review__author-name Владимир Сабанцев
                                        .review__author-profession
                                            p Преподаватель
                            .content-blocks__item-content Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            .content-blocks__item-tools
                                .tools
                                    button.tools__item.tools__edit
                                        .tools__item-text Править
                                        .tools__icon.tools__icon-edit
                                    button.tools__item.tools__delete
                                        .tools__item-text Удалить
                                        .tools__icon.tools__icon-delete
</template>

<script>
    import NewReview from "../components/NewReview";

    export default {
        name: "Reviews",
        components: {NewReview}
    }
</script>

<style lang="pcss" scoped>
    @import "../../styles/mixins.pcss";
    @import "../../styles/blocks/review.pcss";

    .reviews__title {
        color: $ text-color;
        font-size: 21px;
        font-weight: 700;
        line-height: 34px;
        margin-bottom: 30px;
    }

    .reviews__main {
        width: 100%;
        background-color: $white;
        padding: 30px 15px 50px 30px;
        margin: 30px 0;
    }

    .content-blocks {
    }

    .content-blocks__list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .content-blocks__item {
        height: 380px;
        width: 30%;
        margin: 0 30px 30px 0;

        @include tablets {
            width: 40%
        }

        @include phablets {
            width: 100%
        }
    }

    .content-blocks__add-block {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    }

    .content-blocks__add-title {
        color: $white;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
    }

    .content-blocks__add-icon {
        width: 150px;
        height: 150px;
        border: 2px solid $white;
        border-radius: 50%;
        position: relative;
        margin-bottom: 30px;

        &:before {
            content: "+";
            color: $white;
            font-size: 72px;
             font-weight: 300;
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .content-blocks__item-container {
        background-color: $white;
        padding: 30px 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .content-blocks__item-title {
        padding: 0 10px 30px 10px;
        border-bottom: 1px solid rgba(31, 35, 45, .15);
        margin-bottom: 29px;
    }

    .content-blocks__item-content {
        opacity: 0.7;
        color: $text-color;
        font-size: 16px;
        line-height: 30px;
        flex: 1
    }

    .tools {
        display: flex;
        justify-content: space-between;
    }

    .tools__item {
        color: $text-color;
        font-size: 16px;
        line-height: 30px;
        background: none;
        display: flex;
        align-items: center;
    }

    .tools__item-text {
        opacity: 0.5;
        margin-right: 12px;
    }

    .tools__icon {
        width: 17px;
        height: 17px;
    }

    .tools__icon-edit {
        background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%) center no-repeat;
    }

    .tools__icon-delete {
        background: svg-load("remove.svg", fill=#c92e2e, width=100%, height=100%) center no-repeat;
    }

    .review__author-name {
        line-height: 1.42;
    }

    .review__img {
        width: 50px;
        height: 50px;
        background: url("../../images/content/reviewer2.png") no-repeat;
        background-size: 50px 50px;
    }
</style>
