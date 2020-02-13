import reducer from './moodReducers';
import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, drinkCoffee } from '../actions/moodActions';
import { shallow } from 'enzyme';
import Moods, {
  isTired,
  isHyper,
  isEducated,
  isHungry,
  getFace
} from '../containers/Moods';

describe('mood reducer', () => {
  it('handles a bogus action', () => {
    const action = { type: 'BOGUS' };
    const newState = reducer([], action);
    expect(newState).toEqual([]);
  });

  it('handles a bogus action', () => {
    const action = drinkCoffee(1);

    const initialState = {  }
    const newState = reducer(initalState, action)
    expect(newState).toEqual({coffee: 1});
  });

});
