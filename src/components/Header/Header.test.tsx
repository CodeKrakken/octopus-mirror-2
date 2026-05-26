import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

jest.mock('../../content/data', () => ({
  title: 'Test Title',
  addLabel: 'Test Add'
}));

describe('Header', () => {
  const mockHandleAddVoice = jest.fn();
  const mockHandleStartStop = jest.fn();

  const renderHeader = (props = {}) => {
    return render(
      <Header
        handleAddVoice={mockHandleAddVoice}
        handleStartStop={mockHandleStartStop}
        showStart={true}
        running={false}
        {...props}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays correct button text based on running state', () => {
    const { rerender } = render(
      <Header
        handleAddVoice={mockHandleAddVoice}
        handleStartStop={mockHandleStartStop}
        showStart={true}
        running={false}
      />
    );

    expect(screen.getByRole('button', { name: 'Start' })).toBeInTheDocument();

    rerender(
      <Header
        handleAddVoice={mockHandleAddVoice}
        handleStartStop={mockHandleStartStop}
        showStart={true}
        running={true}
      />
    );

    expect(screen.queryByRole('button', { name: 'Start' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Stop' })).toBeInTheDocument();
  });
});
