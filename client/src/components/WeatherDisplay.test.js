import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('WeatherDisplay Component', () => {
  test('Form submission with valid city name', async () => {
    const mockedData = {
      temperature: 25,
      description: 'Sunny',
      city: 'New York',
      humidity: 60,
      wind: 10,
    };

    axios.get.mockResolvedValueOnce({ data: mockedData });

    render(<WeatherDisplay />);

    const cityInput = screen.getByPlaceholderText('Enter city name');
    const submitButton = screen.getByText('Get Weather');

    await act(async () => {
      fireEvent.change(cityInput, { target: { value: 'New York' } });
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/weather/New York');
      });
    });
  });
});
