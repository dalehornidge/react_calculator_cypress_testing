import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add numbers together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const operatorAdd = container.getByTestId('operator-add')
    fireEvent.click(operatorAdd)
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('9');
  })

  it('should subtract numbers together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const operatorSubtract = container.getByTestId('operator-subtract')
    fireEvent.click(operatorSubtract)
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply numbers together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const operatorMultiply = container.getByTestId('operator-multiply')
    fireEvent.click(operatorMultiply)
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide numbers together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const operatorDivide = container.getByTestId('operator-divide')
    fireEvent.click(operatorDivide)
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatonate numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('21');
  })

  it('should handle multiple operations together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const operatorAdd = container.getByTestId('operator-add')
    fireEvent.click(operatorAdd)
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const operatorMultiply = container.getByTestId('operator-multiply')
    fireEvent.click(operatorMultiply)
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const equalButton = container.getByTestId('operator-equals')
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('18');
  })


  it('should clear click', () => {
  const runningTotal = container.getByTestId('running-total');
  const button5 = container.getByTestId('number5');
  fireEvent.click(button5);
  const operatorMultiply = container.getByTestId('operator-multiply')
  fireEvent.click(operatorMultiply)
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const equalButton = container.getByTestId('operator-equals')
  fireEvent.click(equalButton)
  const clearButton = container.getByTestId('clear')
  fireEvent.click(clearButton)
  expect(runningTotal.textContent).toEqual('0');
})

})


