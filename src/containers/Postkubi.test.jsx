import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Postkubi from '../containers/Postkubi';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const url =
  'https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51';

const mockServer = setupServer(
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          _id: '8675309',
          name: 'Roger Dodger',
          image: 'example.com/image.png',
        },
      ])
    );
  })
);

describe('Postkubi container', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('im very unsure', async () => {
    render(<Postkubi />);

    const url = screen.findByRole('textbox', { name: 'url' });
    userEvent.type(
      url,
      '{selectall}{del}https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51'
    );

    const radio = await screen.findByDisplayValue('GET');
    fireEvent.click(radio);
    expect(radio).toBeChecked();
    
  });
});
