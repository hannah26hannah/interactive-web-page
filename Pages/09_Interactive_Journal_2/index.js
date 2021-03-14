(() => {
    const steps = document.querySelectorAll('.step');
    const graphics = document.querySelectorAll('.graphic-item');
    
    let currentItem = graphics[0];
    let ioIndex;

    const io = new IntersectionObserver((entries) => {
        ioIndex = entries[0].target.dataset.index * 1;
    })

    steps.forEach((step, i) => {
        io.observe(step);
        step.dataset.index = i;
        graphics[i].dataset.index = i;
    })
    
    function inactivate() {
        currentItem.classList.remove('visible')

    }

    function activate() {
        currentItem.classList.add('visible')
    }

    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;
        
        for (let i = ioIndex - 1; i <= ioIndex; i++) {
            step = steps[i];
            if (!step) continue;

            boundingRect = step.getBoundingClientRect();
            if (boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8) {
                inactivate();
                currentItem = graphics[step.dataset.index];
                activate();
            }
        }
    })
    window.addEventListener('load', () => {
        setTimeout(() => {
            scrollTo(0, 0);
        }, 100);
    })
    activate();
}) ();