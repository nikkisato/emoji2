import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import {
  drinkCoffee,
  eatSnacks,
  takeNaps,
  study
} from '../actions/moodActions';
import { getFace } from '../selectors/moodSelectors';
import reducer from '../reducers/moodReducers';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' }
];
export default function Moods() {
  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    naps: 0,
    studies: 0,
    snacks: 0
  });
  const face = getFace(state);

  return (
    <>
      <Controls actions={actions} dispatch={dispatch} />
      <Face emoji={face} />
    </>
  );
}
