import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

describe('Button component', () => {
  it('xxxxx', () => {
    const {getByText} = render(<Button />);
    expect(getByText('Não exibindo')).toBeDefined();

    fireEvent.press(getByText('Clique aqui'));
    expect(getByText('Exibindo')).toBeDefined();
  });
});
