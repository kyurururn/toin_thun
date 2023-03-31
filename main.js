fetch('https://script.google.com/macros/s/AKfycbwoZZX89ZTEX4OtNq8XY2Nu1IeAmXATLvqXFd_yoVIDnbNPb_BcMsI2aZQb3RjHqlEe/exec')
    .then(response => response.json())
    .then(data => {
        let url = data.url;
        document.getElementById("button").href = url;

        let load = document.getElementById("load");
        load.style.opacity = 0;

        setTimeout(() => {
            load.style.display = "none"
        },500);

    })
    .catch(error => console.error(error));

setTimeout(() => {
    load.style.display = "none"
},10000)