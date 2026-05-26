import { render, screen, fireEvent } from '@testing-library/react';
import DeleteButton from './DeleteButton';

describe('DeleteButton', () => {
  const mockHandleDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('passes correct index on multiple clicks', () => {
    const { rerender } = render(
      <DeleteButton
        handleDelete={mockHandleDelete}
        i={0}
      />
    );
    const button = screen.getByRole('button', { name: 'X' });
    fireEvent.click(button);

    jest.clearAllMocks();
    
    rerender(
      <DeleteButton
        handleDelete={mockHandleDelete}
        i={1}
      />
    );
    fireEvent.click(button);
    expect(mockHandleDelete).toHaveBeenCalledWith(1);
  });
});
