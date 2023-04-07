fetch('https://script.google.com/macros/s/AKfycbz6fmaAwoeVNLSrTZ9NlerJtH9aglY6Rycxuvtxg0KX2DfdDvj-yyuxEOxKsvg-X5jk/exec')
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
