/**
 * This service handles form submissions.
 * It is designed to be scalable:
 * 1. Currently: Can use Formspree or EmailJS (Client-side)
 * 2. Future: Easily switch to a custom Backend API by changing the base URL and fetch logic.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjooolq"; 

export const submitInquiry = async (data: any) => {
  //console.log("Submitting inquiry:", data);

  // Formspree (No Backend needed)
  
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.ok;
  

  // OPTION B: Future Backend API
  /*
  const response = await fetch('/api/v1/admissions/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
  */

  // Mock success for now
  //return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
};
