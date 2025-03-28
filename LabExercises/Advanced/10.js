import fetch from 'node-fetch';

// Ensure global fetch is available (for Node.js)
globalThis.fetch = fetch;

/**
 * Fetch data from a URL using async/await and handle non-JSON responses.
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {Promise<object|null>} - Resolves with JSON data or null on error.
 */
async function fetchURLData(url) {
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // Ensure response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid JSON response");
    }

    return await response.json(); // Parse JSON data
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null; // Return null on failure
  }
}

/**
 * Fetch data from multiple URLs using Promise.all
 * @param {string[]} urls - Array of URLs to fetch.
 * @returns {Promise<object[]>} - Resolves with an array of JSON results.
 */
async function fetchMultipleURLs(urls) {
  try {
    const results = await Promise.all(urls.map(url => fetchURLData(url)));
    return results;
  } catch (error) {
    console.error("Error fetching multiple URLs:", error.message);
    return [];
  }
}

// ✅ **Test with a valid URL**
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log("Valid URL Response:", data))
  .catch(error => console.error("Error:", error));

// ❌ **Test with an invalid URL**
fetchURLData('https://invalid-url.com')
  .then(data => console.log("Invalid URL Response:", data))
  .catch(error => console.error("Error:", error));

// ✅ **Test fetching multiple URLs (mix of valid & invalid)**
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1', // Valid
  'https://jsonplaceholder.typicode.com/todos/2', // Valid
  'https://invalid-url.com' // Invalid
];

fetchMultipleURLs(urls)
  .then(results => console.log("Multiple URL Responses:", results))
  .catch(error => console.error("Error:", error));