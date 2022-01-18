import Component from "../core/Component.js";
import NotFound from './NotFound';
import TextSVGAnimation1 from '../pages/TextSVGAnimation1';
import TextSVGAnimation2 from '../pages/TextSVGAnimation2';
import Keyframes from "../pages/Keyframes.js";

export default class Routes extends Component {
  template() {
    return `<section data-component='routes-item'></section>`
  }

  mounted() {
    const { activeItem, isMatchedItem } = this.$props;
    const $routesItem = this.$target.querySelector('[data-component="routes-item"]')

    if (isMatchedItem(activeItem)) {
      switch (window.location.pathname.split('/')[1]) {
        case '1':
          new TextSVGAnimation1($routesItem, {})
          break;
        case '2':
          new TextSVGAnimation2($routesItem, {})
          break;
        case '3':
          new Keyframes($routesItem, {})
          break;
      }

    } else {
      new NotFound($routesItem, {})
    }
  }
}