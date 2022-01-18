import Component from '../core/Component';

export default class Keyframes extends Component {

    template() {
        return `
            <div class='svgWrapper svgWrapper2 pulserWrapper'>
                <h1>Pulsing Animation</h1>
                <div class='pulser'></div>

                <h1>Animation Steps</h1>
                <label class='toggle for='toggle-element'>
                <span class='toggle__label'>Turn steps on</span>

                <input type='checkbox' role='switch' class='toggle__element' id='toggle-element' />
                <div class='toggle__decor' aria-hidden='true'>
                    <div class='toggle__thumb'></div>
                </div>
                </label>

                <div class='steps'></div>
            </div>
    `
    }

    mounted() {
        const toggle = document.querySelector('#toggle-element');
        const steps = document.querySelector('.steps');

        toggle.addEventListener('change', ({ target }) => {
            steps.style.animationTimingFunction = target.checked ? 'steps(10, end)' : 'linear'
        })
    }
}

