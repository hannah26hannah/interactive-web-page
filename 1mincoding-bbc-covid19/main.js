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


    // 전역 변수 사용을 회피 하기 위해 즉시 실행 익명 함수를 만들고, 뒤이어 괄호 연산자로 실행을 해준 것. 안에서 변수를 만들면, 블럭 안에 있기 때문에 지역 변수가 되어서 외부에서는 접근을 하지 못한다. 콘솔 창에서 바깥에서 해당 변수에 접근하려고 하면 에러가 난다. 즉, 보호가 된다. 밖에 해버리면, 누구나 접근할 수 있는 값이 되므로, 충돌 가능성이 있기도 하고.
    // 그러나 함수 자체는 호출을 해야 실행이 되므로 자동으로 호출되도록 한 것.
    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0]; 
    // 현재 활성화된(visible class가 붙은) .graphic-item을 지정
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1;
        // console.log(ioIndex);
        // 위 ioIndex를 찍어보면 콘솔창에는 검은색으로 찍히는데, 이는 string을 의미. index의 경우에는 string 보다 number 형태가 더 유용하기 때문에, 숫자로 바꿔주고 써준다. 
        // 문자형 데이터를 숫자로 바꾸는 가장 쉬은 방법은 * 1 FF 개발자 도구에서는 초록색으로 변환된 것을 볼 수 있다. 

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