import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';
import { useReducer } from 'react';
import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from '../../actions/moodActions';

const Controls = ({ dispatch }) => (
  <section className={styles.Controls}>
    <button onClick={() => dispatch(drinkCoffee())}>Drink Coffee</button>
    <button onClick={() => dispatch(eatSnack())}>Eat Snacks</button>

    <button onClick={() => dispatch(takeNap())}>takeNaps</button>
    <button onClick={() => dispatch(study())}>study</button>
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  ).isRequired
};

export default Controls;
