import { updateField, updateCheckbox } from './Inputs.functions';
import { setUpVoice } from '../Interface/Interface.functions';
import { VoiceType } from '../Voice/Voice.types';


describe('Inputs.functions', () => {
  let voices: VoiceType[];
  let setVoices: jest.Mock;

  beforeEach(() => {
    voices = [setUpVoice(), setUpVoice()];
    voices[0].label = 1;
    voices[0].bpm = 120;
    voices[1].label = 2;
    voices[1].bpm = 100;
    setVoices = jest.fn();
    jest.clearAllMocks();
  });

  describe('updateField', () => {

    it('handles range field updates (maxLevel)', () => {
      const mockEvent = { target: { value: '99' }} as any;

      updateField(mockEvent, 'maxLevel', voices, 0, setVoices);

      expect(voices[0].maxLevel).toBe(99);
    });
  });

  describe('updateCheckbox', () => {
    
    it('preserves other values when adding a checkbox', () => {

      const mockEvent = { target: { value: 'square' } } as any;

      updateCheckbox(mockEvent, 'activeSounds', voices, 0, setVoices);

      expect(voices[0].activeSounds).toContain('sine');
      expect(voices[0].activeSounds).toContain('square');
    });

    it('preserves other values when removing a checkbox', () => {
      
      voices[0].activeSounds = ['sine', 'square', 'triangle'];
      const mockEvent = { target: { value: 'square' } } as any;

      updateCheckbox(mockEvent, 'activeSounds', voices, 0, setVoices);

      expect(voices[0].activeSounds).toContain('sine');
      expect(voices[0].activeSounds).toContain('triangle');
      expect(voices[0].activeSounds).not.toContain('square');
    });
  });
});
