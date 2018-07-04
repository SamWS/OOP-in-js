// Create extend function to remove repeated code.
function extend(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

// Create a mixin to assign methods to a prototype.
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

function HtmlElement() {
  this.click = function() {
    console.log('click');
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focus');
}

function HtmlSelectElement(val = []) {
  this.items = val;
  this.addItem = function(e) {
    this.items.push(e);
  };
  this.removeItem = function(e) {
    this.items.splice(this.items.indexOf(e), 1);
  }
}

function HtmlImageElement(val = undefined) {
  this.src = val;
}

extend(HtmlSelectElement, HtmlElement);
extend(HtmlImageElement, HtmlElement);

const imageRender = {
  render: function render() {
    return `<img src="${this.src}" />`
  }
};

const elementRender = {
  render: function render() {
    return `
      <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
      </select>`;
  }
}

mixin(HtmlSelectElement.prototype, elementRender);
mixin(HtmlImageElement.prototype, imageRender);
