const UrlForm = document.getElementById("link-form");
const UrlList = document.getElementById("url-list");
const UrlInput = UrlForm.querySelector("input");
const link = document.getElementById("btn");
const urls_KEY = "urls"

let Urls = [];


function saveUrls() {
    localStorage.setItem("Urls", JSON.stringify(Urls));
}

function deleteUrls(event) {
    const li = (event.target.parentElement);
    li.remove();
    Urls = Urls.filter(toUrl => toUrl.id !== parseInt(li.id));
    saveUrls();
}


function paintUrls(newUrl) {
    const li = document.createElement("li");
    li.className="listname";
    li.id = newUrl.id;
    const a = document.createElement("a");
    a.href = `https://www.${newUrl.text}.com/`;
    a.innerText = newUrl.text;
    const button = document.createElement("button");
    button.innerText = "✗";
    button.className="btn-outline-primary";
    button.addEventListener("click",deleteUrls);
    li.appendChild(a);
    li.appendChild(button);
    UrlList.appendChild(li);
}


function handleUrlssubmit(event) {
    event.preventDefault();
    const newUrl = UrlInput.value;
    UrlInput.value = "";
    const newUrlObj = {
        text:newUrl,
        id: Date.now(),
    }
    Urls.push(newUrlObj);
    paintUrls(newUrlObj);
    saveUrls();
}

UrlForm.addEventListener("submit", handleUrlssubmit);


const saveUrl = localStorage.getItem("Urls");


if(saveUrl !== null) {
    const parsedUrls = JSON.parse(saveUrl);
    Urls = parsedUrls;
    parsedUrls.forEach(paintUrls);
}

function handleLinkClick() {
    const hidden = "hidden";
    if(UrlForm.classList.contains(hidden)){
    UrlForm.classList.remove(hidden);
    UrlList.classList.remove(hidden);
    }
    else {
        UrlForm.classList.add(hidden);
        UrlList.classList.add(hidden);
    }
}
    link.addEventListener("click", handleLinkClick);

