// Test script to test the testimonials CREATE API with simple data
const axios = require('axios');

// Get the JWT token from environment or use a placeholder
const JWT_TOKEN = process.env.JWT_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwibmFtZSI6IkFkbWluIFVzZXIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQ1Njc4OTAsImV4cCI6MTczNDY1NDI5MH0.test';

// Test data - simple object (no file)
const testData = {
  studentName: 'Test Student',
  exam: 'TEST EXAM',
  rank: 'TEST RANK',
  year: 2025,
  story: 'Test story',
  quote: 'Test quote',
  isActive: true
};

console.log('=== Testing Testimonials Create API (Simple Object) ===');
console.log('Sending JSON data:');
console.log(JSON.stringify(testData, null, 2));
console.log();

// Make the POST request
axios.post('http://localhost:4001/testimonials', testData, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
})
.then(response => {
  console.log('✅ API Response:');
  console.log(`Status: ${response.status}`);
  console.log('Data:', JSON.stringify(response.data, null, 2));
  
  // Verify the boolean value
  const isActive = response.data.isActive;
  console.log(`\nisActive value: ${isActive} (type: ${typeof isActive})`);
  
  if (typeof isActive === 'boolean' && isActive === true) {
    console.log('✅ SUCCESS: Boolean value is correct!');
    
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
    console.log('❌ FAILURE: Boolean value is incorrect');
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
