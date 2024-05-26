/* 
    Created with ❤ and 💪 by: I'm Rikka (YuukiC) 

    You must connect your computer/device to the Internet to load online Font Awesome CSS/Javascript. 
*/

document.addEventListener("DOMContentLoaded", () => {
    const cbxToggle = document.getElementById("checkbox");

    const isLightMode = localStorage.getItem("lightMode") === "true";
    if (isLightMode) {
        document.body.classList.add("light-mode")
        cbxToggle.checked = false;
    }

    cbxToggle.addEventListener("change", () => {
        if (!cbxToggle.checked) {
            document.body.classList.add("light-mode");
            localStorage.setItem("lightMode", "true");
        }
        else {
            document.body.classList.remove("light-mode");
            localStorage.setItem("lightMode", "false")
        }
    });
});

function setTheme(themeName) 
{
    localStorage.setItem("themeToggle", themeName);
    document.documentElement.className = themeName;
}

function change() {
    
    if (localStorage.getItem("themeToggle") === "dark") {
        setTheme("light");
    } 
    else {
        setTheme("dark");
    }
    
    var cbx = document.getElementById('checkbox');
    /* These are controls that want to change their theme */
    var header = document.querySelector('header');
    var techXYZLogo = document.getElementsByClassName("techXYZ-logo"); 
    var navigationMenu = document.getElementById("navigationMenu");
    var menuButton = document.querySelectorAll(".menuButton");
    var input = document.querySelectorAll('input');
    var footer = document.querySelector('footer');
    var info = document.getElementsByClassName("animated-info-content");
    var darkmode_button = document.getElementById("darkmode-button");
    var dropdown_button = document.getElementsByClassName("dropdown-button");
    var customLink = document.getElementsByClassName("custom-a");

    if (!cbx.checked) {
        document.body.style.backgroundColor = "#efefef"
        document.body.style.color = "black"
        header.style.backgroundColor = "#dddddd"
        navigationMenu.style.backgroundColor = "#dddddd"
        for (var d = 0; d < menuButton.length; d++) {
            menuButton[d].style.color = "black";
        }
        for (var e = 0; e < input.length; e++) {
            input[e].style.backgroundColor = "#c7c7c7"
            input[e].style.color = "black"
        }
        for (var e1 = 0; e1 < dropdown_button.length; e1++)
        {
            dropdown_button[e1].style.backgroundColor = "#cbcbcb"
            dropdown_button[e1].style.color = "black"
        }
        for (var e2 = 0; e2 < techXYZLogo.length; e2++) {
            techXYZLogo[e2].src = "Icon/tech.xyz_blacktext-transparent.png"
        }
        footer.style.backgroundColor = "#dddddd"
        footer.style.color = "black"
        for (var f = 0; f < info.length; f++) {
            info[f].style.color = "black"
        }
        darkmode_button.style.backgroundColor = "#cacaca"
        darkmode_button.style.color = "black"
        for (var g = 0; g < customLink.length; g++) {
            customLink[g].style.color = "black";
        }
    }
    else {
        document.body.style.backgroundColor = "#0f0f29"
        document.body.style.color = "white"
        header.style.backgroundColor = "#26164d"
        navigationMenu.style.backgroundColor = "#291752"
        for (var a = 0; a < menuButton.length; a++) {
            menuButton[a].style.color = "white"
        }
        for (var b = 0; b < input.length; b++) {
            input[b].style.backgroundColor = "#3c2969"
            input[b].style.color = "white"
        }
        for (var b1 = 0; b1 < dropdown_button.length; b1++)
        {
            dropdown_button[b1].style.backgroundColor = "#3c2969";
            dropdown_button[b1].style.color = "white"
        }
        for (var b2 = 0; b2 < techXYZLogo.length; b2++) {
            techXYZLogo[b2].src = "Icon/tech.xyz_whitetext-transparent.png"
        }
        footer.style.backgroundColor = "#251a4b"
        footer.style.color = "white"
        for (var c = 0; c < info.length; c++) {
            info[c].style.color = "white"
        }
        darkmode_button.style.backgroundColor = "#351d6e";
        darkmode_button.style.color = "white"
        for (var c1 = 0; c1 < customLink.length; c1++) {
            customLink[c1].style.color = "white";
        }
    }
}

window.onload = async () => {
    if (localStorage.getItem("themeToggle") === "dark")
    {
        setTheme("dark");
        document.getElementById("checkbox").checked = true;
    } 
    else {
        setTheme("light");
        document.getElementById("checkbox").checked = false;
    }

    var errorContent = document.getElementById("errNoInternet-container");
    var loadingContent = document.getElementById("loading-container");
    var bodyContent = document.getElementById("body-content");
    var resErrorContent = document.getElementById("errRNS-container");

    // Gets the current year for id "year"
    let year = document.getElementById("year");
    var getYear = new Date();
    year.innerHTML = getYear.getFullYear();

    let online = window.navigator.onLine;

    loadingContent.style.animation = "opacity 2s";
    loadingContent.style.animationPlayState = "paused";
    bodyContent.style.display = "none";
    errorContent.style.display = "none";

    setTimeout(() => {
        if (online) {
            setTimeout(() => {
                loadingContent.style.animationPlayState = "running";
                loadingContent.style.display = "none";
                bodyContent.style.display = "block";
            }, 100);
            errorContent.style.display = 'none';
            resErrorContent.style.display = 'none';
        }
        else {
            bodyContent.style.display = 'none';
            setTimeout(() => {
                loadingContent.style.display = 'none';
                errorContent.style.display = 'block';
            }, 10) // You can change the ms for debugging purposes.
        } 
    }, 100);

    // Refresh page
    const refresh = document.getElementById("refresh");
    refresh.addEventListener('click', () => {
        window.location.reload();
    });

    // Newsletter event
    var sendNews = document.getElementById("request-newsLetter");
    var emailText = document.getElementById("type-email");

    const showNotification = () => {
        sendNews.addEventListener("click", () => {
            if (emailText != null) {
                var email = new Notification("tech.xyz", {
                    icon: "/Icon/tech.xyz_whitetext-transparent.png",
                    body: "Subscribed!",
                    vibrate: true
                });

                setTimeout(() => {
                    email.close();
                }, 10000);
            }
            else {
                alert("Can't request the subscription");
            }
        });
    }

    let isGranted = false;

    if (Notification.permission === 'granted') {
        isGranted = true;
    }
    else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        isGranted = permission === 'granted' ? true : false;
    }

    isGranted ? showNotification() : showError();

    const showError = () => {
        alert("Can't show the notification");
    }

    // Navigation click event

    var navigation = document.getElementsByClassName("menuButton")

    for (let i = 0; i < navigation.length; i++)
    {
        switch (navigation) {
            case navigation[i] == 0:
                window.location.href = self.location.pathname + "#home";
                break;
            case navigation[i] == 1:
                window.location.href = self.location.pathname + "#project";
                break;
            case navigation[i] == 2:
                window.location.href = self.location.pathname + "#members";
                break;
            case navigation[i] == 3:
                window.location.href = self.location.pathname + "#home";
                break;
            case navigation[i] == 4:
                window.location.href = self.location.pathname + "#home";
                break;
        }
    }
}

window.onscroll = () => {
    // Back to top
    let bttButton = document.getElementById("back-to-top");

    if (document.documentElement.scrollTop > 430) {
        bttButton.style.display = 'block';
    }
    else {
        bttButton.style.display = 'none';
    }

    bttButton.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
}