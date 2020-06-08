<template lang="pug">
    .skill-container
        .skill__title
            .skill__title-name {{category.category}}
            .skill__title-btns
                button(type="button" @click="removeExistedSkill").skill__btn.skill__title-edit
                button(type="button" @click="editmode = true").skill__btn.skill__title-delete
        .skill__content
            skill-list-item(v-for="skill in category.skills" :key="skill.id" :skill="skill")

        form(@submit.prevent="addNewSkill" :class={blocked: loading}).add-skill
            input(type="text" placeholder="Новый навык" v-model="skill.title").add-skill__name
            input(type="text" placeholder="0" v-model="skill.percent").add-skill__percent
            .skill__scale %
            button(type="submit" :disabled="loading").skill__add
                .skill__add-btn
</template>

<script>
    import {mapActions} from "vuex";
    import SkillListItem from "../components/SkillListItem"

    export default {
        name: "SkillList",
        components: {SkillListItem},
        data() {
            return {
                loading: false,
                file: {},
                skill: {
                    title: "",
                    percent: 0,
                    category: this.category.id
                }
            };
        },
        props: {
            category: {
                type: Object,
                default: () => {
                },
                required: true
            }
        },
        methods: {
            ...mapActions("skills", ["addSkill"]),
            async addNewSkill() {
                this.loading = true;
                try {
                    await this.addSkill(this.skill);

                    this.skill.title = "";
                    this.skill.percent = "";
                } catch (error) {
                    // handling error
                } finally {
                    this.loading = false;
                }
            }
        }
    }
</script>

<style lang="pcss" scoped>
    .skill-container {
        padding: 29px 20px;
        color: $ text-color;
        height: 360px;
        display: flex;
        flex-direction: column;
    }

    .skill__title {
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 14px;
        border-bottom: 1px solid rgba(31, 35, 45, .15);
    }

    .skill__title-btns {
        display: flex;
    }

    .skill__btn {
        width: 15px;
        height: 15px;
    }

    .skill__title-edit {
        opacity: .5;
        margin-right: 12px;
        background: svg-load("pencil.svg", fill=$ text-color, width=100%, height=100%) center no-repeat;
    }

    .skill__title-delete {
        opacity: .5;
        background: svg-load("trash.svg", fill=$ text-color, width=100%, height=100%) center no-repeat;
    }

    .skill__content {
        padding-top: 29px;
        flex: 1;
    }

    .add-skill {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: $text-color;
    }

    .add-skill__name,
    .add-skill__percent {
        margin-right: 8px;
        border: none;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
        text-align: center;
    }

    .add-skill__name,
    .skill__scale {
        color: rgba(31, 35, 45, .70);
    }

    .add-skill__percent {
        font-size: 16px;
        font-weight: 600;
    }

    .skill__scale {
        border: none;
        padding-bottom: 2px;
        border-bottom: 1px solid black;
        margin-right: 24px;
        font-size: 15px;
    }

    .add-skill__name {
        width: 35%
    }

    .add-skill__percent {
        width: 15%
    }

    .skill__add {
        width: 40px;
        height: 40px;
        background: none;
        padding: 0;
    }

    .skill__add-btn {
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #006aed, #3f35cb);
        display: flex;
        align-items: center;
        border-radius: 50%;
        position: relative;

        &:before {
            content: "+";
            font-size: 28px;
            color: $white;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            font-weight: 400;
        }

    }

    .skill-container {
        margin: 0 28px 28px 0;
        background: $white;
    }
</style>
