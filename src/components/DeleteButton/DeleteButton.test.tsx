import { render, screen, fireEvent } from '@testing-library/react';
import DeleteButton from './DeleteButton';

describe('DeleteButton', () => {

  const mockHandleDelete = jest.fn();

  beforeEach(() => { jest.clearAllMocks(); });

  it('passes correct index on multiple clicks', () => {

    const Button = (i: number) => (
      <DeleteButton
        handleDelete={mockHandleDelete}
        i={i}
      />
    );

    const { rerender } = render(Button(0));

    const button = screen.getByRole('button', { name: 'X' });

    fireEvent.click(button);

    rerender(Button(1));

    fireEvent.click(button);

    expect(mockHandleDelete).toHaveBeenCalledWith(1);
  });
});
