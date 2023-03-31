fetch('https://script.google.com/macros/s/AKfycbzdi3TnA2yz1fxmveJkyAop_NbXvpB2AvJ2GqYzINQDPhbYt6Q8p9UF_x1zDqliWA5-/exec')
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