import { EventEmitter } from 'events';

export default Object.assign({},EventEmitter.prototype,{
  items:['abc'],
  getAll() {
    return this.items;
  },

  addNewItemHandle(text) {
    console.log('push元素');
    this.items.push(text);
  },

  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change',callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change',callback);
  }
})
