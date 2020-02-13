import { getFace } from './moodSelectors';

describe('mood selector', () => {
  it('can return correct mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const face = getFace(state);
    expect(face).toEqual('🤬');
  });

  it('can return Smiley mood emoji', () => {
    const state = {
      coffees: 1,
      snacks: 2,
      naps: 1,
      studies: 0
    };

    const face = getFace(state);

    expect(face).toEqual('😀');
  });

  it('can return Educated mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 1,
      studies: 7
    };
    const face = getFace(state);
    expect(face).toEqual('🤯');
  });

  it('can return Hyper and hungry mood emoji', () => {
    const state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const face = getFace(state);
    expect(face).toEqual('🤮');
  });

  it('can return tired mood emoji', () => {
    const state = {
      coffees: 0,
      snacks: 6,
      naps: 0,
      studies: 6
    };
    const face = getFace(state);
    expect(face).toEqual('😴');
  });

  it('can return Hyper mood emoji', () => {
    const state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 4
    };
    const face = getFace(state);
    expect(face).toEqual('🤮');
  });

  it('can return angry emoji', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const face = getFace(state);
    expect(face).toEqual('🤬');
  });

  it('can return HYPER emoji', () => {
    const state = {
      coffees: 2,
      snacks: 0,
      naps: 0,
      studies: 3
    };
    const face = getFace(state);
    expect(face).toEqual('🤯');
  });
});
