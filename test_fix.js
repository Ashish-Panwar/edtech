// Test script to verify our fix for the testimonials boolean handling
console.log("Testing testimonials boolean conversion fix...");

// Simulate the DTO object as it would come from FormData processing
function testBooleanConversion(inputValue, description) {
    let result = inputValue;
    
    // Apply our fix logic
    if (result !== undefined) {
        result = result === 'true' || result === true;
    }
    
    console.log(`${description}:`);
    console.log(`  Input: ${JSON.stringify(inputValue)} (type: ${typeof inputValue})`);
    console.log(`  Output: ${JSON.stringify(result)} (type: ${typeof result})`);
    console.log();
}

// Test various input values that might come from FormData
testBooleanConversion(true, "Boolean true");
testBooleanConversion(false, "Boolean false");
testBooleanConversion("true", "String 'true'");
testBooleanConversion("false", "String 'false'");
testBooleanConversion("True", "String 'True'");
testBooleanConversion("False", "String 'False'");
testBooleanConversion("", "Empty string");
testBooleanConversion(0, "Number zero");
testBooleanConversion(1, "Number one");
testBooleanConversion(null, "Null value");
testBooleanConversion(undefined, "Undefined value");

console.log("All tests completed!");
