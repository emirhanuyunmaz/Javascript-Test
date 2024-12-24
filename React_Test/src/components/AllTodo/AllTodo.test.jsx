import {  render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { DiProvider,injectable } from 'react-magnetic-di';
import AllTodo from '.' 
import { describe, expect, it, vi } from 'vitest'
import { apiContext } from '../../../context/apiContext';
import { MOCK_DATA } from './mockData';

describe('All Todo', () => {
  it('renders the All Todo component', () => {
    const getData=vi.fn()
    
    const TodoCardComponent = () => {return (<div data-testid="test1">hello</div>)}
    
    const {getByPlaceholderText,getByTestId,getByTitle,getByText,getAllByText} = render(<apiContext.Provider value={{todoList:MOCK_DATA,getData:getData}} ><AllTodo TodoCardComponent={TodoCardComponent} /></apiContext.Provider>)
    // screen.debug()
    // console.log(getAllByText("hello").length);
    
    expect(getAllByText("hello")).length(MOCK_DATA.length)
    expect(getByPlaceholderText("Search")).toBeInTheDocument()
    // screen.debug(); // prints out the jsx in the App component unto the command line
  })
}) 