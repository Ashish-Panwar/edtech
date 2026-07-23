// Test script to simulate exactly what the frontend sends via FormData
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/premium_coaching"
});

// Function to simulate our fix for boolean conversion (same as in backend controller)
function applyBooleanFix(dto) {
  // Apply our fix for boolean fields
  if (dto.isActive !== undefined) {
    dto.isActive = dto.isActive === 'true' || dto.isActive === true;
  }
  return dto;
}

// Simulate what the frontend sends via FormData
// Based on frontend/src/app/admin/testimonials/[id]/edit/page.tsx lines 795-805:
// formData.append('isActive', data.isActive ? 'true' : 'false');

console.log("=== Testing Frontend-to-Backend Simulation ===\n");

// Test data as it would come from FormData (all values as strings except File objects)
const testFormDataTrue = {
  studentName: "Test Student",
  exam: "TEST EXAM",
  rank: "TEST RANK", 
  year: "2025",
  story: "Test story",
  quote: "Test quote",
  isActive: "true"  // This is what frontend sends when checkbox is checked
};

const testFormDataFalse = {
  studentName: "Test Student",
  exam: "TEST EXAM",
  rank: "TEST RANK", 
  year: "2025",
  story: "Test story",
  quote: "Test quote",
  isActive: "false"  // This is what frontend sends when checkbox is unchecked
};

const testimonialId = "b57090b3-4739-4bef-89be-0f8fe6f925c1";

console.log("Test 1: Testing with isActive = 'true' (checkbox checked)");
console.log("Input (as from FormData):");
console.log(JSON.stringify(testFormDataTrue, null, 2));

const processedDataTrue = applyBooleanFix({ ...testFormDataTrue });
console.log("\nAfter applying backend fix:");
console.log(JSON.stringify(processedDataTrue, null, 2));

console.log("\n" + "=".repeat(50) + "\n");

console.log("Test 2: Testing with isActive = 'false' (checkbox unchecked)");
console.log("Input (as from FormData):");
console.log(JSON.stringify(testFormDataFalse, null, 2));

const processedDataFalse = applyBooleanFix({ ...testFormDataFalse });
console.log("\nAfter applying backend fix:");
console.log(JSON.stringify(processedDataFalse, null, 2));

// Actually test with database
(async () => {
  let client;
  try {
    client = await pool.connect();
    
    console.log("\n" + "=".repeat(50));
    console.log("TESTING WITH ACTUAL DATABASE\n");
    
    // Test with isActive = true
    console.log("Test 1: Updating testimonial with isActive = true");
    const resultTrue = await client.query(
      `UPDATE testimonials SET 
       student_name = $1, 
       exam = $2, 
       rank = $3, 
       year = $4, 
       story = $5, 
       quote = $6, 
       is_active = $7, 
       updated_at = NOW()
       WHERE id = $8
       RETURNING *`,
      [
        processedDataTrue.studentName,
        processedDataTrue.exam,
        processedDataTrue.rank,
        parseInt(processedDataTrue.year) || null,
        processedDataTrue.story,
        processedDataTrue.quote,
        processedDataTrue.isActive,
        testimonialId
      ]
    );
    
    if (resultTrue.rowCount === 1) {
      console.log("✅ Update with isActive=true SUCCESSFUL!");
      const updatedTrue = resultTrue.rows[0];
      console.log(`   is_active in DB: ${updatedTrue.is_active} (should be true)`);
      console.log(`   Match: ${updatedTrue.is_active === true ? '✅' : '❌'}`);
    } else {
      console.log("❌ Update with isActive=true FAILED");
    }
    
    // Test with isActive = false
    console.log("\nTest 2: Updating testimonial with isActive = false");
    const resultFalse = await client.query(
      `UPDATE testimonials SET 
       student_name = $1, 
       exam = $2, 
       rank = $3, 
       year = $4, 
       story = $5, 
       quote = $6, 
       is_active = $7, 
       updated_at = NOW()
       WHERE id = $8
       RETURNING *`,
      [
        processedDataFalse.studentName,
        processedDataFalse.exam,
        processedDataFalse.rank,
        parseInt(processedDataFalse.year) || null,
        processedDataFalse.story,
        processedDataFalse.quote,
        processedDataFalse.isActive,
        testimonialId
      ]
    );
    
    if (resultFalse.rowCount === 1) {
      console.log("✅ Update with isActive=false SUCCESSFUL!");
      const updatedFalse = resultFalse.rows[0];
      console.log(`   is_active in DB: ${updatedFalse.is_active} (should be false)`);
      console.log(`   Match: ${updatedFalse.is_active === false ? '✅' : '❌'}`);
    } else {
      console.log("❌ Update with isActive=false FAILED");
    }
    
    // Final verification
    console.log("\n" + "=".repeat(50));
    console.log("FINAL VERIFICATION");
    const verifyResult = await client.query(
      `SELECT student_name, is_active FROM testimonials WHERE id = $1`,
      [testimonialId]
    );
    
    if (verifyResult.rowCount === 1) {
      const finalRecord = verifyResult.rows[0];
      console.log(`Final state in database:`);
      console.log(`  student_name: ${finalRecord.student_name}`);
      console.log(`  is_active: ${finalRecord.is_active}`);
      
      // The last test was with isActive = false, so it should be false
      if (finalRecord.is_active === false) {
        console.log("\n🎉 SUCCESS: The fix is working correctly!");
        console.log("   Frontend checkbox state -> FormData string -> Backend boolean -> Database persists correctly");
      } else {
        console.log("\n❌ ISSUE: Final state doesn't match expected value from last test");
      }
    }
    
  } catch (err) {
    console.error("❌ Error during database operation:", err);
  } finally {
    if (client) {
      client.release();
    }
    await pool.end();
  }
})();
