import { initializeTimes, updateTimes } from '../../pages/Reservation';
import * as api from '../../api'; // import fetchAPI from your api file

// Mock fetchAPI
jest.mock('../../api.js');

describe('availableTimes reducer tests', () => {

  beforeEach(() => {
    // Clear previous mocks
    jest.clearAllMocks();
  });

  test('initializeTimes returns array of times', () => {
    api.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

    const result = initializeTimes();

    expect(result).toEqual(["17:00", "18:00", "19:00"]);
    expect(api.fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes returns updated times for selected date', () => {
    const mockDate = new Date('2025-12-08');
    api.fetchAPI.mockReturnValue(["18:00", "19:00", "20:00"]);

    const result = updateTimes([], { date: mockDate });

    expect(result).toEqual(["18:00", "19:00", "20:00"]);
    expect(api.fetchAPI).toHaveBeenCalledWith(mockDate);
  });
});
