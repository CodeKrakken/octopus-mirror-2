import { render, screen } from '@testing-library/react';
import Voice from './Voice';
import { setUpVoice } from '../Interface/Interface.functions';
import { VoiceType } from './Voice.types';

jest.mock('../../content/data', () => ({
  fields: {
    bpm: {
      label: 'BPM',
      value: 'bpm',
      input: 'single'
    }
  },
  extrema: ['min', 'max'],
  checkboxGroups: { 
    Sounds: ['sine', 'square']
  }
}));

jest.mock('../Inputs/Inputs.functions', () => ({
  updateField: jest.fn(),
  updateCheckbox: jest.fn()
}));

describe('Voice', () => {
  const mockHandleDelete = jest.fn();
  const mockSetVoices = jest.fn();
  const voices: VoiceType[] = [setUpVoice()];
  voices[0].bpm = 120;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct voice data-attribute', () => {
    const { container } = render(
      <Voice
        i={0}
        voices={voices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    const voiceDiv = container.querySelector('[data-voice="0"]');
    expect(voiceDiv).toBeInTheDocument();
  });

  it('renders with correct custom data-attribute', () => {
    const { container } = render(
      <Voice
        i={0}
        voices={voices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="TestAttribute"
      />
    );
    const voiceDiv = container.querySelector('[data-attribute="TestAttribute"]');
    expect(voiceDiv).toBeInTheDocument();
  });

  it('renders Inputs component with correct props', () => {
    render(
      <Voice
        i={0}
        voices={voices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    // Check if input fields are rendered (from Inputs component)
    const inputs = screen.getAllByRole('checkbox', { hidden: true });
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('renders DeleteButton component', () => {
    render(
      <Voice
        i={0}
        voices={voices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    const deleteButton = screen.getByRole('button', { name: 'X' });
    expect(deleteButton).toBeInTheDocument();
  });

  it('passes correct index to child components', () => {
    const { container } = render(
      <Voice
        i={2}
        voices={[setUpVoice(), setUpVoice(), setUpVoice()]}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    const voiceDiv = container.querySelector('[data-voice="2"]');
    expect(voiceDiv).toBeInTheDocument();
  });

  it('renders voice in a div with row class', () => {
    const { container } = render(
      <Voice
        i={0}
        voices={voices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    const voiceDiv = container.querySelector('.voice');
    expect(voiceDiv).toBeInTheDocument();
  });

  it('passes voices array to Inputs', () => {
    const { rerender } = render(
      <Voice
        i={0}
        voices={voices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    expect(screen.getByDisplayValue('120')).toBeInTheDocument();

    voices[0].bpm = 140;
    rerender(
      <Voice
        i={0}
        voices={voices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    expect(screen.getByDisplayValue('140')).toBeInTheDocument();
  });

  it('handles multiple voices with different indices', () => {
    const multipleVoices = [setUpVoice(), setUpVoice()];
    multipleVoices[0].bpm = 100;
    multipleVoices[1].bpm = 150;

    const { rerender } = render(
      <Voice
        i={0}
        voices={multipleVoices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    expect(screen.getByDisplayValue('100')).toBeInTheDocument();

    rerender(
      <Voice
        i={1}
        voices={multipleVoices}
        handleDelete={mockHandleDelete}
        setVoices={mockSetVoices}
        dataAttribute="Voices"
      />
    );
    expect(screen.getByDisplayValue('150')).toBeInTheDocument();
  });
});
