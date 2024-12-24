import { getAllByAltText, getAllByText, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { useContext } from 'react';
import TodoCard from '.' 
import { describe, expect, it, vi } from 'vitest'
import { MOCK_DATA } from '../AllTodo/mockData';
import { apiContext } from '../../../context/apiContext';

describe('Todo Card', () => {
  it('renders the Todo Card  component', () => {
    const deleteData =vi.fn()
    const updateData =vi.fn()
    
    const {getByText} = render(<apiContext.Provider value={{deleteData,updateData}} ><TodoCard {...MOCK_DATA[0]} text={"Test 1"} /></apiContext.Provider>)
    // screen.debug()
    const element = getByText("Test 1")
    expect(element).toBeInTheDocument() 
  })


}) 