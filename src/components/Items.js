import Component from '../core/Component.js';

export default class Items extends Component {
  
  template () {
    const { totalItems } = this.$props;

    return `
      <ul class='container'>
        ${totalItems.map(({seq, title, active}) => `
          <li data-seq='${seq}' class='cardBox'>
            <h3 class='item-title'>${title}</h3>
            <button class='openBtn' style='color: ${active ? 'blue' : 'gray'}'>
              ${active ? '활성' : '비활성'}
            </button>
          </li>
        `).join('')}
      </ul>
    `
  }

  setEvent() {
    const { setPage, toggleItem } = this.$props;
    
    this.addEvent('click', '.openBtn', ({target}) => {
      setPage(Number(target.closest('[data-seq]').dataset.seq));
      toggleItem(Number(target.closest('[data-seq]').dataset.seq));
    })

  }
}
