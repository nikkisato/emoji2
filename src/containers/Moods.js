import React, { Component, useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import {
  drinkCoffee,
  eatSnacks,
  takeNaps,
  study
} from '../actions/moodActions';
import { getFace } from '../selectors/moodSelectors';
import { reducer } from '../reducers/moodReducers';

export default class Moods extends Component {
  const [mood, dispatch] = useReducer(reducer, [])

 //accumulator = state
 //current value = value 

  render() {
    const face = getFace(this.state);
    const controlActions = actions.map(action => ({
      ...action,
      count: this.state[action.stateName]
    }));

    return (
      <>
        <Controls
          actions={controlActions}
          handleSelection={this.handleSelection}
        />
        <Face emoji={face} />
      </>
    );
  }
}
