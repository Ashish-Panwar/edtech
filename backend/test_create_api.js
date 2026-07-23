// Test script to test the testimonials CREATE API
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Get the JWT token from environment or use a placeholder
const JWT_TOKEN = process.env.JWT_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwibmFtZSI6IkFkbWluIFVzZXIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1Njc4OTAsImV4cCI6MTczNDY1NDI5MH0.test';

// Test data - simulating what would come from FormData
const formData = new FormData();
formData.append('studentName', 'New Test Student');
formData.append('exam', 'NEET 2026');
formData.append('rank', 'AIR 10');
formData.append('year', '2026');
formData.append('story', 'This is a new testimonial story for testing');
formData.append('quote', 'This is a new testimonial quote for testing');
formData.append('isActive', 'true'); // This comes as string from FormData

console.log('=== Testing Testimonials Create API ===');
console.log('Sending FormData:');
console.log(`  studentName: New Test Student (string)`);
console.log(`  exam: NEET 2026 (string)`);
console.log(`  rank: AIR 10 (string)`);
console.log(`  year: 2026 (string)`);
console.log(`  story: This is a new testimonial story for testing (string)`);
console.log(`  quote: This is a new testimonial quote for testing (string)`);
console.log(`  isActive: true (string)`);
console.log();

// Make the POST request
axios.post('http://localhost:4001/testimonials', formData, {
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
  
  if (typeof isActive === 'boolean' && isActive === true) {
    console.log('✅ SUCCESS: Boolean conversion worked correctly for CREATE!');
    
    // Save the ID for verification
    const testimonialId = response.data.id;
    console.log(`\nCreated testimonial ID: ${testimonialId}`);
    
    // Verify in database
    const { execSync } = require('child_process');
    try {
      const stdout = execSync(`PGPASSWORD=postgres psql -h localhost -U postgres -d premium_coaching -t -c "SELECT student_name, exam, rank, year, story, quote, is_active FROM testimonials WHERE id = '${testimonialId}';"`);
      console.log('Database record:', stdout.toString().trim());
    } catch (dbError) {
      console.log('Could not verify in database:', dbError.message);
    }
  } else {
    console.log('❌ FAILURE: Boolean conversion failed for CREATE');
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
