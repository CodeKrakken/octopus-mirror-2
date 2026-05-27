import { render, screen, fireEvent } from '@testing-library/react';
import Field from './Field';
import { setUpVoice } from '../Interface/Interface.functions';
import { updateField } from '../Inputs/Inputs.functions';
import { VoiceType } from '../Voice/Voice.types';

jest.mock('../../content/data', () => ({
  fields: {
    bpm: {
      label: 'BPM',
      value: 'bpm',
      input: 'single'
    },
    level: {
      label: 'Level',
      value: 'Level',
      input: 'range'
    },
    length: {
      label: 'Length',
      value: 'Length',
      input: 'range'
    }
  },
  extrema: ['min', 'max']
}));

jest.mock('../Inputs/Inputs.functions', () => ({
  updateField: jest.fn()
}));

describe('Field', () => {
  const mockSetVoices = jest.fn();
  const voices: VoiceType[] = [setUpVoice()];

  voices[0].bpm = 120;
  voices[0].minLevel = 30;
  voices[0].maxLevel = 80;

  beforeEach(() => { jest.clearAllMocks(); });
  

  it('calls updateField when range max input changes', () => {
    // const { updateField } = require('../Inputs/Inputs.functions');
    
    render(
      <Field
        fieldName="level"
        i={0}
        voices={voices}
        setVoices={mockSetVoices}
      />
    );
    const maxInput = screen.getByDisplayValue('80');
    fireEvent.change(maxInput, { target: { value: '90' } });

    expect(updateField).toHaveBeenCalledWith(
      expect.any(Object),
      'maxLevel',
      voices,
      0,
      mockSetVoices
    );
  });
});
