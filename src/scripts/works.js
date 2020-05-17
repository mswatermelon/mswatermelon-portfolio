import Vue from "vue";

const btns = {
    template: "#works-btns"
};
const thumbs = {
    template: "#works-thumbs"
};

const  visual = {
    template: "#works-visual",
    components: { thumbs, btns }
};

const tags = {
    template: "#works-tags"
};

const info = {
    template: "#works-info",
    components: { tags }
};

new Vue({
    el: "#works-component",
    template: "#preview-container",
    components: { visual, info }
});
