<template lang='pug'>
    .login Login
        form.form(@submit.prevent='submit')
            input(type='text' placeholder='login' v-model='user.login')
            .error-box {{ validation.firstError('user.login') }}
            input(type='password' placeholder='password' v-model='user.password')
            .error-box {{ validation.firstError('user.password') }}
            button(type='submit') Отправить
</template>
<script>
    import SimpleVueValidator from 'simple-vue-validator';

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
                            var formData = new FormData();

                            formData.append('name', this.user.login);
                            formData.append('password', this.user.password);
                            fetch('https://webdev-api.loftschool.com/login', {
                                method: 'POST',
                                body: formData
                            })
                                .then((res) => res.json())
                                .then(data => {
                                    console.log(data);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
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
