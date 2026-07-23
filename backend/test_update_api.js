// Test script to simulate the actual API call with FormData
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Get the JWT token from environment or use a placeholder for now -  scenario' you would bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 use a placeholder
const JWT_TOKEN = process.env.JWT_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwibmFtZSI6IkFkbWluIFVzZXIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1Njc4OTAsImV4cCI6MTczNDY1NDI5MH0.test';

// Test data - simulating what would come from FormData
const formData = new FormData();
formData.append('studentName', 'Test Updated Name');
formData.append('exam', 'TEST EXAM');
formData.append('rank', 'TEST RANK');
formData.append('year', '2025');
formData.append('story', 'Updated test story');
formData.append('quote', 'Updated test quote');
formData.append('isActive', 'false'); // This comes as string from FormData

// ID of testimonial to update (from our earlier test)
const testimonialId = 'b57090b3-4739-4bef-89be-0f8fe6f925c1';

console.log('=== Testing Testimonials Update API ===');
console.log('Sending FormData:');
console.log(`  studentName: Test Updated Name (string)`);
console.log(`  exam: TEST EXAM (string)`);
console.log(`  rank: TEST RANK (string)`);
console.log(`  year: 2025 (string)`);
console.log(`  story: Updated test story (string)`);
console.log(`  quote: Updated test quote (string)`);
console.log(`  isActive: false (string)`);
console.log();

// Make the PATCH request
axios.patch(`http://localhost:4001/testimonials/${testimonialId}`, formData, {
  headers: {
    ...formData.getHeaders(),
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
})
.then(response => {
  console.log('✅ API Response:');
  console.log(`Status: ${response.status}`);
  console.log('Data:', JSON.stringify(response.data, null, 2));
  
  // Verify the boolean conversion worked
  const isActive = response.data.isActive;
  console.log(`\nisActive value: ${isActive} (type: ${typeof isActive})`);
  
  if (typeof isActive === 'boolean' && isActive === false) {
    console.log('✅ SUCCESS: Boolean conversion worked correctly!');
  } else {
    console.log('❌ FAILURE: Boolean conversion failed');
  }
})
.catch(error => {
  if (error.response) {
    console.log('❌ API Error Response:');
    console.log(`Status: ${error.response.status}`);
    console.log('Data:', JSON.stringify(error.response.data, null, 2));
  } else if (error.request) {
    console.log('❌ No response received:', error.message);
  } else {
    console.log('❌ Error setting up request:', error.message);
  }
});
