<template lang='pug'>
    .login
        .login__form-container
            .login__close
            form.form(@submit.prevent='submit').login__form
                .login__title Авторизация
                label.login__label
                    .login__label-title Логин
                    .login__field
                        .login__field-icon.login__icon-user
                        .login__input-container
                            input(type='text' v-model='user.login').login__input.login__password
                .error-box {{ validation.firstError('user.login') }}
                label.login__label
                    .login__label-title Пароль
                    .login__field
                        .login__field-icon.login__icon-key
                        .login__input-container
                            input(type='password' v-model='user.password').login__input.login__password
                .error-box {{ validation.firstError('user.password') }}
                .login__button
                    button(type='submit').login_submit-btn Отправить
</template>
<script>
    import SimpleVueValidator from 'simple-vue-validator';
    import axios from '../request';

    const Validator = SimpleVueValidator.validator;

    export default {
        name: 'Login',
        mixins: [SimpleVueValidator.mixin],
        validators: {
            'user.login': function (value) {
                return Validator.custom(function () {
                    if (value.length < 5) {
                        return 'Не менее 5 символов';
                    }
                })
            },
            'user.password': function (value) {
                return Validator.custom(function () {
                    if (value.length < 8) {
                        return 'Не менее 8 символов';
                    }
                })
            }
        },
        data() {
            return {
                user: {
                    login: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                this.$validate()
                    .then((success) => {
                        if (success) {
                            console.log('Validation success');
                            axios.post('/login', this.user)
                                .then(({data})=>{
                                    console.log(data);
                                    localStorage.setItem('token', data.token);
                                    return data.json();
                                })
                                .then(data => {
                                    console.log(data);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });

                        } else {
                            console.log('Validation fail')
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    }
</script>
<style lang="postcss">
    @import "../../styles/mixins.pcss";

    .login {
        position: fixed;
        color: #414c63;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("../../images/content/mountain.jpg") center/ cover no-repeat;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0.9;
            background: #2d3c4e;
        }
    }

    .login__form-container {
        position: relative;

        @include phones {
            height: 100%;
            width: 100%;
        }
    }

    .login__title {
        font-weight: 600;
        font-size: 36px;
        line-height: 60px;
        margin-bottom: 34px;
        display: flex;
        justify-content: center;

        @include phones {
            font-weight: 400;
        }
    }

    .login__button {
        display: flex;
        justify-content: center;
    }

    .login_submit-btn {
        padding: 32px 120px;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: $white;
        border: none;
        border-radius: 40px 5px;
        background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);

        @include phones {
            width: 260px;
            padding: 32px 75px;
        }
    }

    .login_submit-btn--disabled {
        background-image: none;
        background-color: rgba(128, 128, 128, 0.41);
    }

    .login__label {
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .login__field {
        font-size: 18px;
        font-weight: 700;
        line-height: 48px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid;
    }

    .login__field-icon {
        width: 30px;
        height: 30px;
        fill: $white;
        opacity: .3;
        margin-right: 16px;
    }

    .login__input-container {
        flex: 1;
    }

    .login__input {
        color: currentColor;
        background: transparent;
        border: none;
        resize: none;
        font-size: 18px;
        font-weight: 700;
        line-height: 36px;

        &::placeholder {
            color: currentColor;
            font-size: 18px;
            font-weight: bold;
        }

        &:focus {
            outline: none;
        }
    }

    .login__form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 50px 78px 60px;
        background: #fff;

        @include phones {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 50px 30px 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    .login__label-title {
        margin-left: 2.8125rem;
        margin-bottom: 0.8125rem;
        color: rgba(65,76,99,.5);
        font-weight: 600;
        opacity: .5;
    }

    .login__icon-user {
        background: svg-load("user.svg", fill=#414c63) no-repeat;
    }

    .login__icon-key {
        background: svg-load("key.svg", fill=#414c63) no-repeat;
    }

    .login__close {
        position: absolute;
        top: 31px;
        right: 29px;
        background: svg-load("remove.svg", fill=#414c63) no-repeat;
        width: 20px;
        height: 20px;
    }

</style>
