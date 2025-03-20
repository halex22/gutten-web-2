let instance

class ExampleClass {
  constructor() {
    if (instance) {
      throw new Error('instance already exits')
    }
    this.bag = []
    instance = this
  }

  getBag() {
    console.log(this.bag)
  }

  addItem(item) {
    this.bag.push(item)
  }
}


const singletonExampleClass = Object.freeze(new ExampleClass())

export default singletonExampleClass;