import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
    el: "#reviews-component",
    template: "#all-reviews",
    components: {
        Flickity
    },
    data() {
        return {
            reviews: [],
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                groupCells: true
            }
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        },
        activateButton() {
            var refs = this.$refs;

            refs.flickity.on('change', function (pos) {
                if (pos === this.slides.length - 1) {
                    refs.nextBtn.style.opacity = '.2';
                } else {
                    refs.nextBtn.style.opacity = '1';
                }

                if (pos === 0) {
                    refs.prevBtn.style.opacity = '.2';
                } else {
                    refs.prevBtn.style.opacity = '1';
                }
            });
        },
        makeArrWithRequireImages(array) {
            return array.map((item) => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;
                return item;
            });
        }
    },
    mounted() {
        this.activateButton();
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequireImages(data);
    }
});
