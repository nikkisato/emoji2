import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import {
  drinkCoffee,
  eatSnacks,
  takeNaps,
  study
} from '../components/actions/moodActions';
import { reducer } from '../components/reducers/moodReducers';

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if (isTired(state) && isHungry(state)) return '🤬';
  if (isHyper(state) && isHungry(state)) return '🤮';
  if (isTired(state)) return '😴';
  if (isHyper(state)) return '🙀';
  if (isEducated(state)) return '🤯';
  if (isHungry(state)) return '😡';

  return '😀';
};

export default class Moods extends Component {
  state = {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  };

 

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
