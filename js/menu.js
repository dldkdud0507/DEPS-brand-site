window.onload = () => {
    // 전체메뉴 가져오기
    // let pages = document.querySelector('.pages');
    // let pagination = document.querySelector('.pagination');
    // let slider = new Slider(pages, pagination);

    const siteMapBtn = document.querySelector('.site_map_btn');
    siteMapBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const allMenuEle = document.getElementById('all_menu');
        // allMenuEle.style.display = 'block'
        allMenuEle.classList.add('all_menu_show');

    });


    // 닫기 버튼 가져오기
    const closeAllMenuBtn = document.querySelector('.close_all_menu');

    closeAllMenuBtn.addEventListener('click', (event) => {
        const allMenuEle = document.getElementById('all_menu');
        // allMenuEle.style.display = 'block'
        allMenuEle.classList.remove('all_menu_show');
    })

    // // 2차메뉴 떼기 01
    // const depth01Eles = document.querySelectorAll('.depth_01');
    // depth01Eles.forEach((item) => {
    //     item.addEventListener('mouseover', (event) => {
    //         document.querySelector('.header').classList.add('hover')
    //     })
    //     item.addEventListener('mouseleave', (event) => {
    //         document.querySelector('.header').classList.remove('hover')
    //     })
    // })

    // 2차메뉴 떼기 02
    const depth01Eles = document.querySelector('.menu_wrap');
    const bgEles = document.querySelector('.bg');

    [depth01Eles, bgEles].forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            document.querySelector('.header').classList.add('hover')
        });
        item.addEventListener('mouseleave', (event) => {
            document.querySelector('.header').classList.remove('hover')
        })
    });
}

