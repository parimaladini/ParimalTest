document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous result
    document.getElementById('result').innerHTML = '';
  
    // Get user input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    // Validate inputs
    if (isNaN(weight) || isNaN(height)) {
      showError('Please enter valid weight and height.');
      return;
    }
  
    if (weight <= 0 || height <= 0) {
      showError('Weight and height must be positive values.');
      return;
    }
  
    // Calculate BMI
    const bmi = weight / Math.pow(height / 100, 2);
    const bmiResult = 'Your BMI is: ' + bmi.toFixed(2);
  
    // Display result
    document.getElementById('result').textContent = bmiResult;
  });
  
  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = message;
    document.getElementById('result').appendChild(errorDiv);
  }
  