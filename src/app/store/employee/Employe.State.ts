import { State, Action, StateContext } from '@ngxs/store';

export interface EmployeeStateModel {
  positions: any[];
}

export class AddPosition {
  static readonly type = '[Employee] Add Position';
  constructor(public position: any) {}
}

@State<EmployeeStateModel>({
  name: 'employee',
  defaults: {
    positions: [],
  }
})
export class EmployeeState {

  @Action(AddPosition)
  addPosition(ctx: StateContext<EmployeeStateModel>, action: AddPosition) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      positions: [...state.positions, action.position]
    });
  }
}
