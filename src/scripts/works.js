import Vue from "vue";

const btns = {
    template: "#works-btns"
};
const thumbs = {
    components: { btns },
    template: "#works-thumbs",
    props: ["works", "currentWork"]
};

const  visual = {
    template: "#works-visual",
    components: { thumbs },
    props: ["currentWork", "works", "currentIndex"],
    methods: {
        handleSlide(direction, selectedIndex) {
            this.$emit('slide', direction, --selectedIndex);
        }
    }
};

const tags = {
    template: "#works-tags",
    props: ["tags"]
};

const info = {
    template: "#works-info",
    components: { tags },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(",");
        }
    }
};

new Vue({
    el: "#works-component",
    template: "#preview-container",
    components: { visual, info },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            this.makeWorksInfinitLoop(value);
        }
    },
    methods: {
        makeWorksInfinitLoop(value) {
            const worksAmountFromZero = this.works.length - 1;
            if (value > worksAmountFromZero) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmountFromZero;
        },
        handleSlide(direction, selectedIndex) {
            switch (direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
                case "select":
                    this.currentIndex = selectedIndex;
                    break;
            }
        },
        makeArrWithRequireImages(array) {
            return array.map((item) => {
               const requirePic = require(`../images/content/${item.photo}`);
               item.photo = requirePic;
               return item;
            });
        }
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequireImages(data);
    }
});
