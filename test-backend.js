const axios = require('axios');

const baseUrl = 'http://localhost:8080/api/tutorials';

async function testBackend() {
  try {
    console.log('Testing backend connection...');
    
    // Test GET all tutorials
    const getAllResponse = await axios.get(baseUrl);
    console.log('GET all tutorials response:', getAllResponse.data);
    
    // Test POST new tutorial
    const newTutorial = {
      title: 'Test Tutorial',
      description: 'This is a test tutorial',
      published: false
    };
    
    const createResponse = await axios.post(baseUrl, newTutorial);
    console.log('POST tutorial response:', createResponse.data);
    
    // Test GET the created tutorial
    const tutorialId = createResponse.data.id;
    const getOneResponse = await axios.get(`${baseUrl}/${tutorialId}`);
    console.log('GET one tutorial response:', getOneResponse.data);
    
  } catch (error) {
    console.error('Error testing backend:', error.response?.data || error.message);
  }
}

testBackend();
