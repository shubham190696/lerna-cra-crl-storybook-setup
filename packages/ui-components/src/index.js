import React from 'react';
import Button from './button';
import styles from './styles.module.css';

export const ExampleComponent = () => (
  <div className={styles.test}>
    Example Component:
  </div>
);

export const SSButton = (props) => <Button {...props} />;
