export default function handleResponse(response) {
    return response.json().then(text => {
      const data = text;
      if (!response.ok) {
        const error = Object.assign(
          {},
          {
            status: response.status,
            statusText: response.statusText
          }
        );
        return Promise.reject(error);
      }
  
      return data;
    });
  }