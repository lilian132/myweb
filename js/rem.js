(function() {
    console.log('====rem', process.browser)
    if(!process.browser) return
    if (!document.addEventListener) return;
    const docEl = document.documentElement;
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function() {
        const clientWidth = docEl.clientWidth;
        if (!clientWidth || clientWidth > 1080) return;
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
    };
    window.addEventListener(resizeEvt, recalc, false);
    recalc()
    // document.addEventListener('DOMContentLoaded', recalc, false);
})()
