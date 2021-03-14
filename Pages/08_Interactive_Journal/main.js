(() => {

    const actions = {
        birdFlies(key) {
            if (key) {
                document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
            } else {
                document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
            }
        },
        birdFlies2(key) {
            if (key) {
                document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`;
            } else {
                document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
            }
        }
    };

    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0]; 
    // 현재 활성화된(visible class가 붙은) .graphic-item을 지정
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1;
    });


    for (let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]); // 모든 stepElemns가 관찰 대상으로 등록이 되는 것
        // 방법 1 setAttribute
        // stepElems[i].setAttribute('data-index', i);
        
        // 방법 2 dataset
        // data- 으로 시작하는 문법은 특이해서, 이미 이런 dataset이 만들어져 있음. 
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }
    
    function inactivate(action) {
        currentItem.classList.remove('visible');
        if (action) {
            actions[action](false);
        }
    }
    function activate(action) {
        currentItem.classList.add('visible');
        if (action) {
            actions[action](true);
        }
    }
    window.addEventListener('scroll', () => {
        // scroll 이벤트가 실행될 때
        let step;
        let boundingRect;

        // for (let i = 0; i < stepElems.length; i++) {
        for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
            step = stepElems[i];
            if (!step) continue;
            // i가 -1일 경우 undefined 의 getBoundingClientRech를 할 수 없으므로, continue로 아래 코드를 실행하지 않고, 다음 turn으로 넘겨줌.
            boundingRect = step.getBoundingClientRect();

            if (boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8) {
                
                inactivate(currentItem.dataset.action);
                currentItem = graphicElems[step.dataset.index];
                activate(currentItem.dataset.action);
            }
        }
    })
    window.addEventListener('load', () => {
        setTimeout(() => {
            scrollTo(0, 0);
        }, 100);
    })
    activate();
})();