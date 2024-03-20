export const dynamicFetch = async (url, method, postData) => {
    let response
    try {
        await fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
          })
            .then((res) => res.json())
            .then((data) => {
              response = data
            });

    } catch (error) {
      console.error("Error to load data");
    }
    return response
  };