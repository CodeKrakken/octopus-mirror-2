import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { InputProps } from '../Input/Input.types';

export default function (props: InputProps) {

  const { min, max } = props

  return <RangeSlider min={min} max={max} />
}