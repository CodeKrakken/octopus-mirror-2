import { render, screen, fireEvent, act } from '@testing-library/react';  
import Interface from './Interface';  
import { Synth } from '../../Synth/Synth';  
  
jest.mock('../../Synth/Synth', () => ({  
  Synth: {  
    add: jest.fn(),  
    delete: jest.fn(),  
    start: jest.fn(),  
    stop: jest.fn(),  
    update: jest.fn(),  
    voices: []  
  }  
}));  
  
jest.mock('../Header/Header', () => ({  
  __esModule: true,  
  default: ({ handleStartStop, running, handleAddVoice, showStart }: any) => (  
    <div>  
      Test Title  
      <button data-testid="add-voice" onClick={handleAddVoice}>Add Voice</button>  
      {showStart && (  
        <button data-testid="start-stop" onClick={handleStartStop}>  
          {running ? 'Stop' : 'Start'}  
        </button>  
      )}  
    </div>  
  )  
}));  
  
jest.mock('../Voice/Voice', () => ({  
  __esModule: true,  
  default: ({ handleDelete, i }: any) => (  
    <div data-voice={i}>  
      <button data-testid={`delete-voice-${i}`} onClick={() => handleDelete(i)}>X</button>  
    </div>  
  )  
}));  
  
describe('Interface', () => {  
  beforeEach(() => {  
    jest.clearAllMocks();  
  });  
  
  it('deletes voice when handleDelete is called', async () => {  
    render(<Interface />);  
    await act(async () => { fireEvent.click(screen.getByTestId('add-voice')); });  
    await act(async () => { fireEvent.click(screen.getByTestId('delete-voice-0')); });  
    expect(Synth.delete).toHaveBeenCalledWith(0);  
  });  
  
  describe('start function (lines 48-49)', () => {  
    // it('calls toggleRunning(true) and Synth.start when start is triggered', async () => {  
    //   render(<Interface />);  
    //   await act(async () => { fireEvent.click(screen.getByTestId('add-voice')); });  
    //   const startStopButton = screen.getByTestId('start-stop');  
    //   await act(async () => { fireEvent.click(startStopButton); });  
    //   expect(Synth.start).toHaveBeenCalled();  
    //   expect(startStopButton).toHaveTextContent('Stop');  
    // });  
  });  
  
  describe('stopAll function (lines 53-54)', () => {  
    it('calls toggleRunning(false) and Synth.stop when stop is triggered', async () => {  
      render(<Interface />);  
      await act(async () => { fireEvent.click(screen.getByTestId('add-voice')); });  
      const startStopButton = screen.getByTestId('start-stop');  
      await act(async () => { fireEvent.click(startStopButton); });  
      await act(async () => { fireEvent.click(startStopButton); });  
      expect(Synth.stop).toHaveBeenCalled();  
      expect(startStopButton).toHaveTextContent('Start');  
    });  
  });  
});