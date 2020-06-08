<template lang="pug">
    .new-review
        .new-review__title Новая работа
        .new-review__content
            .new-review__form
                .new-review__image
                    label.new-review__image-label
                        .new-review__image-text Перетащите или загрузите для загрузки изображения
                        button.new-review__image-btn Загрузить
                .new-review__content
                    .input-fields
                        -
                            var inputs = [
                                ['Название', 'Дизайн сайта для авто салона Porsche'],
                                ['Ссылка', 'https://www.porsche-pulkovo.ru']
                            ]
                        .input-fields__first-row.input-fields__first-row--column
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
                                    label.data-input__label Описание
                                        .data-input__field.data-input__field--bordered
                                            .data-input__box-container
                                                textarea(name="message" placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей").data-input__box
                        .input-fields__first-row.input-fields__first-row--column
                                .input-fields__item
                                    .data-input
                                        label.data-input__label Добавление тэга
                                            .data-input__field
                                                .data-input__box-container
                                                    input(type='text' name='tags' placeholder= "Jquery, Vue.js, HTML5").data-input__box
                        .input-fields__tags
                            ul.develop-instruments
                                li.develop-instruments__item
                                    .develop-instruments__tag Jquery
                                    button.develop-instruments__remove
                                li.develop-instruments__item
                                    .develop-instruments__tag Vue.js
                                    button.develop-instruments__remove
                                li.develop-instruments__item
                                    .develop-instruments__tag HTML5
                                    button.develop-instruments__remove
                    .new-review__btns
                        .new-review__btns-item
                            button.input-fields__cancel-btn Отмена
                        .new-review__btns-item
                            button.input-fields__submit-btn Сохранить
</template>

<script>
    export default {
        name: "NewWork"
    }
</script>
<style lang="pcss" scoped>
    @import "../../styles/mixins.pcss";
    @import "../../styles/blocks/input-fields.pcss";
    @import "../../styles/blocks/data-input.pcss";
    @import "../../styles/blocks/develop-instruments.pcss";

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

    .new-review__image {
        height: 276px;
        border: 1px dashed #a1a1a1;
        background-color: #dee4ed;
        width: 45%;
        margin-right: 32px;
    }

    .new-review__image-text {
        opacity: 0.5;
        color: $text-color;
        font-size: 16px;
        line-height: 33.89px;
        margin-bottom: 27px;
    }

    .new-review__image-btn {
        color: white;
        text-transform: uppercase;
        width: 181px;
        height: 50px;
        border-radius: 25px;
        background-color: #ffffff;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
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

    .new-review__image {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .new-review__image-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 219px;
    }

    .new-review__content {
        min-width: 612px;
    }

    .new-review__input-field {
        display: none;
    }

    .input-fields {
        font-family: 'Open Sans', Helvetica, sans-serif;
    }

    .input-fields__second-row {
        margin-bottom: 27px;
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
