document.addEventListener("DOMContentLoaded", function (event) {
    // 显示隐藏toc
    document.getElementById("menu-toc").addEventListener("click", () => {
        toc = document.querySelector("#toc")
        if (toc == undefined)
            return
        if (toc.style.visibility === "hidden") {
            toc.style.visibility = "visible"
        } else {
            toc.style.visibility = "hidden"
        }
    })
    // 回到顶部
    document.getElementById("menu-top").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
    // 显示按钮提示
    document.querySelectorAll(".post-menu a").forEach(el => {
        const BOTTONS = {
            TOP: "menu-top",
            TOC: "menu-toc"
        }
        el.addEventListener("mouseenter", e => {
            tipEl = document.getElementById("menu-tip")
            tipEl.style.visibility = "visible"
            switch (e.target.id) {
                case BOTTONS.TOC:
                    tipEl.innerText = "show/hide TOC"
                    break
                case BOTTONS.TOP:
                    tipEl.innerText = "back to top"
                    break
            }
        })
        el.addEventListener("mouseleave", e => {
            document.getElementById("menu-tip").style.visibility = "hidden"
        })
    })
    $('#toc').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
})
