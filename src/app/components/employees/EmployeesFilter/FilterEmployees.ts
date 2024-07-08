export default class FilterEmployees {

  private query: string

  constructor({
    query = '',
  } = {}) {
    this.query = query // String
  }

  getQuery() {
    return this.query
  }
  setQuery(newVal: string){
    this.query = newVal
  }
}

