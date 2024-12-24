import {  render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import FormDialog from '.' 
import { describe, expect, it, vi } from 'vitest'
import { apiContext } from '../../../context/apiContext';

describe('Add Todo', () => {
  it('renders the From Dialog component', () => {
    const addData=vi.fn()
    
    const {getByPlaceholderText,getByTestId,getByTitle,getByText,getAllByText} = render(<apiContext.Provider value={{addData:addData}} ><FormDialog show={true} /></apiContext.Provider>)
    screen.debug()
    const button = getByText("+")
    expect(button).toBeInTheDocument()
    expect(getByText("Text")).toBeInTheDocument()
    // screen.debug(); // prints out the jsx in the App component unto the command line
  })
}) 