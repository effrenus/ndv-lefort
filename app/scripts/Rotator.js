
class Rotator {
	defaultOptions = {
		parentSelector: '',
		itemsSelector: '.news',
	}

	constructor(options) {
		this.options = options;
		this.parentElm = document.querySelector(this.options.parentSelector);
		this.items = Array.prototype.slice.call(this.parentElm.querySelectorAll(this.options.itemsSelector));
		this.initControls();
		this.setActiveElement(0);
	}

	initControls() {
		const control = this.control = document.createElement('ul');
		control.className = 'controls';

		this.items.forEach((item, i) => {
			const ctrl = document.createElement('li');
			ctrl.className = 'controls__item';
			ctrl.setAttribute('data-index', i);
			control.appendChild(ctrl);
		});

		this.parentElm.addEventListener('click', this.handleClick.bind(this), false);
		this.parentElm.appendChild(control);
	}

	setActiveElement(index) {
		Array.prototype.slice.call(this.control.querySelectorAll('.controls__item')).forEach((item, i) => {
			item.className = item.className.replace(/is-active/, '');
			if (i === index) {
				item.className += ' is-active';
			}
		});

		this.items.forEach((item, i) => {
			item.className = item.className.replace(/is-active/, '');
			if (i === index) {
				item.className += ' is-active';
			}
		});
	}

	handleClick(event) {
		const index = parseInt(event.target.getAttribute('data-index'), 10);

		this.setActiveElement(index);
	}

}

export default Rotator;
