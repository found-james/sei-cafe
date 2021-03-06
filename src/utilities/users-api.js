const BASE_URL = '/api/users';

export async function signUp(userData) {
   
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(userData)
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Invalid Sign Up');
    }
  }

  export async function checkToken() {

  }

  export async function login () {
    
  }
// Fetch uses an options object as a second arg to make requests
// other than basic GET requests, include data, headers, etc.
// Fetch requires data payloads to be stringified
// and assigned to a body property on the options object
// Check if request was successful
// res.json() will resolve to the JWT
