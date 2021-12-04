export const onScrollChange = (refElem, elemHeigtht) => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        prevScrollPos > currentScrollPos
            ? refElem.current.style.top = "0"
            : refElem.current.style.top = `-${elemHeigtht}px`;
        prevScrollPos = currentScrollPos;
    }
}