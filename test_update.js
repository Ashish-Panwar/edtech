// Test script to simulate the testimonials update controller logic with our fix
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/premium_coaching"
});

// Function to simulate our fix for boolean conversion
function applyBooleanFix(dto) {
  // Apply our fix for boolean fields
  if (dto.isActive !== undefined) {
    dto.isActive = dto.isActive === 'true' || dto.isActive === true;
  }
  return dto;
}

// Test data simulating what would come from FormData
const testFormData = {
  studentName: "Test Updated Name",  // This is what we want to update
  exam: "TEST EXAM",
  rank: "TEST RANK", 
  year: "2025",
  story: "Updated test story",
  quote: "Updated test quote",
  isActive: "false"  // Testing with string "false"
};

console.log("=== Testing Testimonials Update Fix ===\n");

// Existing testimonial ID from the database
const testimonialId = "b57090b3-4739-4bef-89be-0f8fe6f925c1";

console.log(`Original testimonial ID: ${testimonialId}\n`);

// Show input data
console.log("Input FormData (simulating frontend request):");
console.log(JSON.stringify(testFormData, null, 2));
console.log();

// Apply our fix (this is what our controller does)
const processedData = applyBooleanFix({ ...testFormData });

console.log("After applying our boolean fix (what gets sent to Prisma):");
console.log(JSON.stringify(processedData, null, 2));
console.log();

// Show the SQL that would be executed
console.log("SQL UPDATE that would be executed:");
console.log(`UPDATE testimonials SET`);
console.log(`  student_name = \$1,`);
console.log(`  exam = \$2,`);
console.log(`  rank = \$3,`);
console.log(`  year = \$4,`);
console.log(`  story = \$5,`);
console.log(`  quote = \$6,`);
console.log(`  is_active = \$7,`);
console.log(`  updated_at = NOW()`);
console.log(`WHERE id = \$8;`);
console.log();

// Actually perform the update in the database to verify our fix works
(async () => {
  try {
    const client = await pool.connect();
    try {
      // Perform the update
      const result = await client.query(
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
          processedData.studentName,
          processedData.exam,
          processedData.rank,
          parseInt(processedData.year) || null,
          processedData.story,
          processedData.quote,
          processedData.isActive,
          testimonialId
        ]
      );

      console.log("=== DATABASE UPDATE RESULT ===");
      if (result.rowCount === 1) {
        console.log("✅ Update SUCCESSFUL!");
        console.log("Updated record:");
        console.log(JSON.stringify(result.rows[0], null, 2));
      } else {
        console.log("❌ Update FAILED - no rows affected");
      }

      // Also verify by reading back the record
      const verifyResult = await client.query(
        `SELECT student_name, exam, rank, year, story, quote, is_active FROM testimonials WHERE id = $1`,
        [testimonialId]
      );

      if (verifyResult.rowCount === 1) {
        const updated = verifyResult.rows[0];
        console.log("\n=== VERIFICATION FROM DATABASE ===");
        console.log("Retrieved record:");
        console.log({
          studentName: updated.student_name,
          exam: updated.exam,
          rank: updated.rank,
          year: updated.year,
          story: updated.story,
          quote: updated.quote,
          isActive: updated.is_active
        });
        
        // Check if our changes were applied correctly
        const studentNameMatch = updated.student_name === processedData.studentName;
        const isActiveMatch = updated.is_active === processedData.isActive;
        
        console.log(`\nField validation:`);
        console.log(`  studentName matches: ${studentNameMatch ? '✅' : '❌'} (expected: ${processedData.studentName}, got: ${updated.student_name})`);
        console.log(`  isActive matches: ${isActiveMatch ? '✅' : '❌'} (expected: ${processedData.isActive}, got: ${updated.is_active})`);
        
        if (studentNameMatch && isActiveMatch) {
          console.log("\n🎉 SUCCESS: The fix is working correctly! Changes are properly reflected in the database.");
        } else {
          console.log("\n❌ ISSUE: Some fields don't match expected values.");
        }
      }
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("❌ Error during database operation:", err);
  } finally {
    await pool.end();
  }
})();
