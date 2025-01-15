export class GetEmployees {
    static readonly type = '[Employee] Get';
  }
  
  export class DeleteEmployee {
    static readonly type = '[Employee] Delete';
    constructor(public id: number) {}
  }