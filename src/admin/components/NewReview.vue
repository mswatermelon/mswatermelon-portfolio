<template lang="pug">
    .new-review
        .new-review__title Новый отзыв
        .new-review__content
            .new-review__form
                .new-review__photo
                    .new-review__default-photo
                    label.new-review__photo-label
                        input(type="file").new-review__input-field
                        .new-review__photo-link Добавить фото
                .new-review__content
                    .input-fields
                        -
                            var inputs = [
                                ['Имя автора', 'Ковальчук Дмитрий'],
                                ['Титул автора', 'Основатель LoftSchool']
                            ]
                        .input-fields__first-row
                            each input in inputs
                                .input-fields__item
                                    .data-input
                                        label.data-input__label= input[0]
                                        .data-input__field
                                            .data-input__box-container
                                                input(type='text' name=`${input[0]}` placeholder= `${input[1]}`).data-input__box
                        .input-fields__second-row
                            .input-fields__item
                                .data-input
                                    label.data-input__label Отзыв
                                        .data-input__field.data-input__field--bordered
                                            .data-input__box-container
                                                textarea(name="message" placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!").data-input__box
                    .new-review__btns
                        .new-review__btns-item
                            button.input-fields__cancel-btn Отмена
                        .new-review__btns-item
                            button.input-fields__submit-btn Сохранить
</template>

<script>
    export default {
        name: "NewReview"
    }
</script>
<style lang="pcss" scoped>
    @import "../../styles/mixins.pcss";
    @import "../../styles/blocks/input-fields.pcss";
    @import "../../styles/blocks/data-input.pcss";

    .new-review {
        color: $text-color;
    }

    .new-review__title {
        font-size: 18px;
        font-weight: 700;
        line-height: 34px;
        padding-bottom: 30px;
        margin-bottom: 49px;
        border-bottom: 1px solid rgba(31, 35, 45, .15);
    }

    .new-review__form {
        display: flex;
    }

    .new-review__default-photo {
        width: 200px;
        height: 200px;
        background-color: #dee4ed;
        border-radius: 50%;
        position: relative;
        margin-bottom: 27px;

        &:before {
            content: "";
            width: 113px;
            height: 113px;
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background: svg-load("user.svg", fill=$white) center center no-repeat;
        }
    }

    .new-review__photo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 30px;
    }

    .new-review__photo-link {
        color: #383bcf;
        font-size: 16px;
        line-height: 33.89px;
    }

    .new-review__photo-label {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .new-review__content {
        min-width: 612px;
        width: 60%;
    }

    .new-review__input-field {
        display: none;
    }

    .input-fields {
        font-family: 'Open Sans', Helvetica, sans-serif;
    }

    .input-fields__item {
        margin-right: 30px;
    }

    .data-input__label {
        padding-bottom: 19px;
    }

    .new-review__btns {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .input-fields__cancel-btn {
        margin-right: 60px;
        color: #383bcf;
        font-size: 16px;
        line-height: 33.89px;
        background-color: $white;
    }

    .input-fields__submit-btn {
        border-radius: 30px;
        padding: 8px 40px;
        background: linear-gradient(to right, #006aed 0%, #3f35cb 100%)
    }
</style>
