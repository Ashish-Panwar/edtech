// Test script to simulate the full controller logic for testimonials create/update
console.log("Testing testimonials controller logic with FormData simulation...");

// Simulate the CreateTestimonialDto and UpdateTestimonialDto objects
function simulateFormDataProcessing(formData) {
    // This simulates what happens when FormData is processed by the controller
    const dto = {};
    
    // Process each field from FormData (simulating formData.get())
    for (const [key, value] of Object.entries(formData)) {
        // Special handling for file fields (we'll ignore those for this test)
        if (key !== 'image') {
            dto[key] = value;
        }
    }
    
    // Apply our fix for boolean fields
    if (dto.isActive !== undefined) {
        dto.isActive = dto.isActive === 'true' || dto.isActive === true;
    }
    
    return dto;
}

// Test cases simulating different FormData inputs
const testCases = [
    {
        name: "All fields present with boolean true",
        formData: {
            studentName: "John Doe",
            exam: "TEST EXAM",
            rank: "A+",
            year: "2025",
            story: "Test story",
            quote: "Test quote",
            isActive: "true"
        },
        expectedIsActive: true
    },
    {
        name: "All fields present with boolean false",
        formData: {
            studentName: "Jane Smith",
            exam: "TEST EXAM",
            rank: "B-",
            year: "2024",
            story: "Another story",
            quote: "Another quote",
            isActive: "false"
        },
        expectedIsActive: false
    },
    {
        name: "isActive missing (partial update scenario)",
        formData: {
            studentName: "Bob Johnson",
            exam: "TEST EXAM",
            rank: "C",
            // Intentionally omitting isActive
            year: "2023",
            story: "Third story",
            quote: "Third quote"
        },
        expectedIsActive: undefined // Should remain undefined
    }
];

testCases.forEach(testCase => {
    console.log(`\n--- Test: ${testCase.name} ---`);
    const result = simulateFormDataProcessing(testCase.formData);
    
    console.log("Input FormData:", JSON.stringify(testCase.formData, null, 2));
    console.log("Processed DTO:", JSON.stringify(result, null, 2));
    
    if (testCase.expectedIsActive !== undefined) {
        const success = result.isActive === testCase.expectedIsActive;
        console.log(`isActive check: ${success ? "✓ PASS" : "✗ FAIL"} (expected: ${testCase.expectedIsActive}, got: ${result.isActive})`);
    } else {
        const isUndefined = result.isActive === undefined;
        console.log(`isActive check: ${isUndefined ? "✓ PASS (correctly undefined)" : "✗ FAIL (should be undefined)"} (got: ${result.isActive})`);
    }
});

console.log("\nAll tests completed!");
