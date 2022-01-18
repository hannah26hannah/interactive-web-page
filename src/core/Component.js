// 구현에 필요한 코어 중 Componentclass 
export default class Component {
  $target;
  $props;
  $state;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props; // $props 할당 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨주기 위해서.
    this.setup();
    this.setEvent(); // constructor에서 한 번만 실행한다. 
    this.render();
  }
  setup() { };
  mounted() { };
  template() { return ''; }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted(); // render 후에 mounted가 실행된다. render 이후에 추가적인 기능을 수행하기 위해서이다.
  }
  setEvent() { }
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    // selector에 명시한 것보다 더 하위 요소가 선택되는 경우엔 closest를 이용해 처리한다.
    const isTarget = target => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    })
  }
}