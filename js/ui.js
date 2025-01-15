window.onload = () => {
    const Slider = function (pages, pagination) {
        let slides = [],
            btns = [],
            count = 0,
            current = 0,
            touchstart = 0,
            animation_state = false;

        const init = () => {
            slides = pages.children;
            count = slides.length;
            for (let i = 0; i < count; i++) {
                slides[i].style.bottom = -(i * 100) + '%';
                let btn = document.createElement('li');
                btn.dataset.slide = i;
                btn.addEventListener('click', btnClick)
                btns.push(btn);
                pagination.appendChild(btn);
            }
            btns[0].classList.add('active');
        }

        const gotoNum = (index) => {
            if ((index != current) && !animation_state) {
                animation_state = true;
                setTimeout(() => animation_state = false, 500);
                btns[current].classList.remove('active');
                current = index;
                btns[current].classList.add('active');
                for (let i = 0; i < count; i++) {
                    slides[i].style.bottom = (current - i) * 100 + '%';
                }
            }
        }

        const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
        const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
        pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
        pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
        pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

        init();
    }

    let pages = document.querySelector('.pages');
    let pagination = document.querySelector('.pagination');
    let slider = new Slider(pages, pagination);

    const siteMapBtn = document.querySelector('.site_map_btn');
    siteMapBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        const allMenuEle = document.getElementById('all_menu');
        // allMenuEle.style.display = 'block'
        allMenuEle.classList.add('all_menu_show');
        
    });

    
    // 닫기 버튼 가져오기
    // const closeAllMenuBtn = document.querySelector('.close_all_menu');

    // closeAllMenuBtn.addEventListener('click', (event) => {
    //     const allMenuEle = document.getElementById('all_menu');
    //     // allMenuEle.style.display = 'block'
    //     allMenuEle.classList.remove('all_menu_show');
    // })

    const depth01Eles = document.querySelectorAll('.depth_01');
    depth01Eles.forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            document.querySelector('.header').classList.add('hover')
        })
        item.addEventListener('mouseleave', (event) => {
            document.querySelector('.header').classList.remove('hover')
        })
    })


}

