// A function that simulates an asynchronous operation (e.g., fetching data from an API)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 2000); // Simulate a 2-second delay
  });
}

// An async function that uses await
async function processData() {
  console.log("Starting data processing...");

  try {
    // await pauses the execution of processData until fetchData's Promise resolves
    const apiData = await fetchData();
    console.log(apiData); // "Data successfully fetched!"
    const finalResult = apiData + 100;
    console.log("finalResult", finalResult);
    console.log("Data processing complete.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the async function
processData();
