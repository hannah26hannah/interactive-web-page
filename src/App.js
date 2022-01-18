import Component from './core/Component';
import Items from './components/Items';
import AppBar from './components/AppBar';
import Routes from './components/Routes';

export default class App extends Component {
  setup() {
    this.$state = {
      items: [
        {
          seq: 1,
          title: 'Text SVG Animation 1',
          active: false
        },
        {
          seq: 2,
          title: 'Text SVG Animation 2',
          active: false
        },
        {
          seq: 3,
          title: 'Pulsing Animation',
          active: false
        }
      ]
    }
  }

  template() {
    return `
      <header data-component='appBar'></header>
      <main class='routesContainer' data-component='routes'></main>
      <aside class='navigationContainer' data-component='items'></aside>
    `
  }

  mounted() {
    const { totalItems, activeItem, isMatchedItem, setPage, toggleItem } = this;
    const $appBar = this.$target.querySelector('[data-component="appBar"]');
    const $items = this.$target.querySelector('[data-component="items"]');
    const $routes = this.$target.querySelector('[data-component="routes"]');

    new AppBar($appBar)

    new Items($items, {
      totalItems,
      setPage: setPage.bind(this),
      toggleItem: toggleItem.bind(this)
    })

    new Routes($routes, {
      activeItem,
      isMatchedItem: isMatchedItem.bind(this),
    })
  }

  get totalItems() {
    const { items } = this.$state;
    return items.map(item => item)
  }

  get activeItem() {
    const { items } = this.$state;
    return items.filter(({ active }) => active)
  }

  setPage(seq) {
    const pathName = `/${seq}`;
    window.history.pushState({}, pathName, window.location.origin + pathName)
  }
  isMatchedItem(activeItem) {
    const pathName = document.location.pathname
    const seqNum = pathName.split('/')[1]
    return (activeItem.length > 0) && (activeItem.filter((item) => item.seq == seqNum).length > 0)
  }

  toggleItem(seq) {
    const items = [...this.$state.items];
    const index = items.findIndex(v => v.seq === seq)
    items.forEach(item => {
      item.active = false
    })
    items[index].active = !items[index].active;
    this.setState({ items })
  }


}


