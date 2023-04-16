async function SubmitVars() {
    document.addEventListener('submit', (event)=> event.preventDefault());
  
      // data sent from the POST request
      var fd = new FormData(document.forms[0])
      
  
      // get all form keys and values
      // var obj = Object.fromEntries(Array.from(formData.keys())
      //     .map(key => [key, formData.getAll(key).length > 1 ?
      //         formData.getAll(key) : formData.get(key)]))
  
     // var jsonreq = (`${JSON.stringify(obj)}`)
      let kw = fd.get('ip1')
      console.log(kw);
      const url = `http://127.0.0.1:8000/summary/judgements/list/${kw}`;
       
      const response = await fetch(url, {
      method: "GET",
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    console.log(url);
  
    const responseText = await response.text();
    console.log(responseText); // logs 'OK'
    var index_page = document.getElementById("answer"); 
    index_page.style.color = "blue"; 
    if(JSON.stringify(responseText).indexOf('overlap') > -1){index_page.style.color = "red"};
    index_page.innerHTML = (responseText);
  }