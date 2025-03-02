// src/app/state/position.state.ts
import { State, Action, StateContext } from '@ngxs/store';
import { EmployeePosition } from '../models/employee-postion/employee-position.component';
import { PositionService } from '../../services/PositionService';

import { Injectable } from '@angular/core';

export class LoadPositions {
  static readonly type = '[Position] Load Positions';
}

export class AddPosition {
  static readonly type = '[Position] Add Position';
  constructor(public payload: EmployeePosition) {}
}

@State<EmployeePosition[]>({
  name: 'positions',
  defaults: [],
})
@Injectable()
export class PositionState {
  constructor(private positionService: PositionService) {}

  @Action(LoadPositions)
  loadPositions(ctx: StateContext<EmployeePosition[]>) {
    return this.positionService.getPositions().subscribe(positions => {
      ctx.setState(positions);
    });
  }

  @Action(AddPosition)
  addPosition(ctx: StateContext<EmployeePosition[]>, action: AddPosition) {
    return this.positionService.addPosition(action.payload).subscribe(() => {
      ctx.dispatch(new LoadPositions());
    });
  }
}