// Test script to simulate the testimonials create controller logic with our fix
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
  studentName: "New Test Student",
  exam: "NEW EXAM",
  rank: "NEW RANK",
  year: "2024",
  story: "New test story",
  quote: "New test quote",
  isActive: "true"  // Testing with string "true"
};

console.log("=== Testing Testimonials Create Fix ===\n");

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
console.log("SQL INSERT that would be executed:");
console.log(`INSERT INTO testimonials (student_name, exam, rank, year, story, quote, is_active, created_at, updated_at)`);
console.log(`VALUES (`);
console.log(`  '${processedData.studentName}',`);
console.log(`  '${processedData.exam}',`);
console.log(`  '${processedData.rank}',`);
console.log(`  ${parseInt(processedData.year) || null},`);
console.log(`  '${processedData.story}',`);
console.log(`  '${processedData.quote}',`);
console.log(`  ${processedData.isActive},`);
console.log(`  NOW(),`);
console.log(`  NOW()`);
console.log(`);`);
console.log();

// Actually perform the insert in the database to verify our fix works
(async () => {
  let client;
  try {
    client = await pool.connect();
    
    // Perform the insert
    const result = await client.query(
      `INSERT INTO testimonials (
         student_name, exam, rank, year, story, quote, is_active, created_at, updated_at
       ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
       RETURNING *`,
      [
        processedData.studentName,
        processedData.exam,
        processedData.rank,
        parseInt(processedData.year) || null,
        processedData.story,
        processedData.quote,
        processedData.isActive
      ]
    );

    console.log("=== DATABASE INSERT RESULT ===");
    if (result.rowCount === 1) {
      console.log("✅ Insert SUCCESSFUL!");
      console.log("Created record:");
      console.log(JSON.stringify(result.rows[0], null, 2));
      
      // Also verify by reading back the record
      const verifyResult = await client.query(
        `SELECT student_name, exam, rank, year, story, quote, is_active FROM testimonials WHERE id = $1`,
        [result.rows[0].id]
      );

      if (verifyResult.rowCount === 1) {
        const created = verifyResult.rows[0];
        console.log("\n=== VERIFICATION FROM DATABASE ===");
        console.log("Retrieved record:");
        console.log({
          studentName: created.student_name,
          exam: created.exam,
          rank: created.rank,
          year: created.year,
          story: created.story,
          quote: created.quote,
          isActive: created.is_active
        });
        
        // Check if our changes were applied correctly
        const studentNameMatch = created.student_name === processedData.studentName;
        const isActiveMatch = created.is_active === processedData.isActive;
        
        console.log(`\nField validation:`);
        console.log(`  studentName matches: ${studentNameMatch ? '✅' : '❌'} (expected: ${processedData.studentName}, got: ${created.student_name})`);
        console.log(`  isActive matches: ${isActiveMatch ? '✅' : '❌'} (expected: ${processedData.isActive}, got: ${created.is_active})`);
        
        if (studentNameMatch && isActiveMatch) {
          console.log("\n🎉 SUCCESS: The fix is working correctly! Create operation properly reflects data in the database.");
        } else {
          console.log("\n❌ ISSUE: Some fields don't match expected values.");
        }
      }
    } else {
      console.log("❌ Insert FAILED - no rows affected");
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
