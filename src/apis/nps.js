import axios from 'axios'

const api_key = `FbpPdSW40LbiGYeGyDMWxQExaqxz8cdukxrjt4sG`;

export default axios.create({
  baseURL: `https://developer.nps.gov/api/v1/parks?api_key=${api_key}`,
    params: {
      stateCode: "ny"
  }
  
});

