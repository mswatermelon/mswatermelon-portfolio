const parallax = document.querySelector(".parallax");
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {
    Array.from(layers).forEach((layer, index) => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 150;

        if (index !== 0) {
            layer.style.transform = `translateY(-${strafe}%)`;
        }

    });
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
});
