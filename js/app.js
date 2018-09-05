const dog_api = 'https://dog.ceo/api/'



function random() {
    const api_url = "https://dog.ceo/api/breeds/list/all"
    $.ajax({
        url: api_url,
        dataType: "json",
        success: data => {
            console.log(data);
            selectBreed.innerHTML += `
            <select name="dog_list" id="${data}">
            <option value="${data.message}">
            ${data.message}</option>
            </select>`
        },
        error: error => {
            console.log("There was an error");
        }
        


    })
}
    //This is the code
  




viewDog.addEventListener('click', random())
