<template lang="pug">
    div(v-if="editmode === false").skill-item
        .skill-item__title
            .skill-item__name {{skill.title}}
            .skill-item__btns
                .skill-item__experience
                    .skill-item__value {{skill.percent}}
                    .skill-item__scale %
                button(type="button" @click="removeExistedSkill").skill-item__btn.skill-item__title-edit
                button(type="button" @click="editmode = true").skill-item__btn.skill-item__title-delete

    div(v-else)
        .skill-item__input
            input(type="text" placeholder="Title" v-model="editedSkill.title")
        .skill-item__input
            input(type="text" placeholder="percent" v-model="editedSkill.percent")
        .skill-item__btns
            button(type="button" @click="editExistedSkill") Изменить
            button(type="button" @click="editmode = false") Отменить

</template>
<script>
    import { mapActions } from "vuex";

    export default {
        name: "SkillListItem",
        data() {
            return {
                editmode: false,
                editedSkill: { ...this.skill }
            };
        },
        props: {
            skill: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        methods: {
            ...mapActions("skills", ["removeSkill", "editSkill"]),
            async removeExistedSkill() {
                try {
                    await this.removeSkill(this.skill);
                } catch (error) {}
            },
            async editExistedSkill() {
                try {
                    await this.editSkill(this.editedSkill);
                    this.editmode = false;
                } catch (error) {

                }
            }
        }
    };
</script>
<style>
    .skill-item {
        width: 100%;
    }

    .skill-item__title {
        font-size: 16px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 14px;
    }
    .skill-item__btns {
        display: flex;
    }

    .skill-item__value,
    .skill-item__scale {
        margin-right: 12px;
    }

    .skill-item__scale {
        opacity: .5;
    }

    .skill-item__btn {
        width: 15px;
        height: 15px;
    }

    .skill-item__title-edit {
        opacity: .5;
        margin-right: 12px;
        background: svg-load("pencil.svg", fill=$text-color, width=100%, height=100%) center no-repeat;
    }

    .skill-item__title-delete {
        opacity: .5;
        background: svg-load("trash.svg", fill=$text-color, width=100%, height=100%) center no-repeat;
    }

    .skill-item__experience {
        display: flex;
    }
</style>
</style>
