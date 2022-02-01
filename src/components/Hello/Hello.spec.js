import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import Hello, {HELLO_WORLD} from './index';

const loadingMock = {
  request: {
    query: HELLO_WORLD,
  },
  result: {
    loading: true,
    error: false,
    data: {
      hello: {
        hello: 'world',
      },
    },
  },
};

const successMock = {
  request: {
    query: HELLO_WORLD,
  },
  result: {
    loading: false,
    error: null,
    data: {
      hello: {
        hello: 'world',
      },
    },
  },
};

describe('Hello component', () => {
  it('should render correctly when is loading', () => {
    const {getByText} = render(
      <MockedProvider mocks={[loadingMock]}>
        <Hello />
      </MockedProvider>,
    );

    expect(getByText('Loading...')).toBeDefined();
  });

  it('should render correctly when is error', async () => {
    const {getByText} = render(
      <MockedProvider mocks={[successMock]} addTypename={false}>
        <Hello />
      </MockedProvider>,
    );

    /**
     * O waitFor aguarda até o MockedProvider popular com a resposta de sucesso.
     */
    await waitFor(() => {
      expect(getByText('hello world')).toBeDefined();
    });
  });
});
