<template lang="pug">
    .about
        .about__container
            .about__title Блок "Обо мне"
            button.about__add Добавить группу
        .about__main-content
            .about__main-container
                ul.skill-list
                    li.skill-list__item(v-for="category in categories" :key="category.id")
                        skill-list(:category="category")
</template>

<script>
    import { mapActions, mapState } from "vuex";
    import SkillList from "../components/skillList";

    export default {
        name: "About",
        components: { SkillList },
        data() {
            return {
                category: {
                    title: ''
                },
                categories: [{
                    id: 0,
                    category: "Frontend",
                    skills: [{
                        id: 0,
                        title: "HTML",
                        percent: '50'
                    }]
                }, {
                    id: 1,
                    category: "Frontend",
                    skills: [{
                        id: 0,
                        title: "HTML",
                        percent: '50'
                    }]
                }, {
                    id: 2,
                    category: "Frontend",
                    skills: [{
                        id: 0,
                        title: "HTML",
                        percent: '50'
                    }]
                }]
            }
        },
        created() {
            this.fetchCategories();
        },
        computed: {
            // ...mapState("categories", ['categories'])
        },
        methods: {
            ...mapActions('categories', ['addCategory', 'fetchCategories']),
            createNewCategory() {
                this.addCategory(this.category.title);
                this.category.title = '';
            }
        }
    }
</script>

<style lang="pcss" scoped>
    @import "../../styles/mixins.pcss";

    .about__title {
        color: $text-color;
        font-size: 21px;
        font-weight: 700;
        line-height: 34px;
        margin-right: 60px;
    }

    .about__container {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }

    .about__add {
        color: $links-color;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 0;
        border: none;
        background: none;

        &:before {
             content: "+";
             display: block;
             width: 20px;
             height: 20px;
             border-radius: 50%;
             background-image: linear-gradient(to right, #006aed, #3f35cb);
             line-height: 20px;
             color: #fff;
             margin-right: 13px;
             flex-shrink: 0;
             flex-basis: 20px;
         }
    }

    .skill-list {
        display: flex;
        flex-wrap: wrap;
    }

    .skill-list__item {
        width: 50%;
    }
</style>
