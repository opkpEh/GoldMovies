import axios from 'axios';

export default axios.create(
      {
            baseURL: "https://7a62-2409-40e3-1005-75ce-8d88-5e0d-270e-65e2.ngrok-free.app/",
            headers: {'ngrok-skip-browser-warning':"true"}
      }
)