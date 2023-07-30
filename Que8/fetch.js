
async function fetchDataFromGooglePage() {
    try {
      const fetch = await import('node-fetch');
      const url = 'https://www.google.com'; 
      const response = await fetch.default(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.text();
      console.log(data); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchDataFromGooglePage();
  


  

// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// async function asyncajaxawait()
// {
//   const res = await fetch('https://www.google.com/')
//   console.log(res);
// }

// asyncajaxawait();


// const fetch = (...args) => import('node-fetch').then(({default: fetch}) =>
// fetch(...args));
// async function asyncajaxawait()
// {
// const res = await fetch('https://www.google.com/')
// console.log(res);
// }
// asyncajaxawait();