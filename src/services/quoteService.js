// Frontend service layer for the Quote Request Form.
// No backend exists yet, so submission is mocked with a resolved promise.
// Once an API exists, import { apiClient } from './api' and replace the
// body of submitQuoteRequest with:
//
//   const { data } = await apiClient.post('/quote-requests', payload);
//   return data;

export const submitQuoteRequest = async (payload) => {
  // Simulated network latency + success response.
  await new Promise((resolve) => setTimeout(resolve, 1100));

  return {
    success: true,
    id: `mock-${Date.now()}`,
    receivedAt: new Date().toISOString(),
    payload,
  };
};
