import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  // возвращает шаблон компонента
  toHTML() {
    console.log(this);
    return '<h1>Hello World</h1>';
  }
}
