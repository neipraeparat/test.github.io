var loadingDiv = null;

function CFInspectShowLoading() {
    if (loadingDiv == null) {
        //append loadingDiv if not present
        loadingDiv = window.document.createElement('div');
        loadingDiv.id = "cfInspectorLoader";
        document.getElementsByTagName('body')[0].appendChild(loadingDiv);

        var innerDiv1 = document.createElement('div');
        var innerDiv2 = document.createElement('div');
        innerDiv2.innerHTML = "Loading Visual Inspector<br>Please Wait...";

        innerDiv1.appendChild(innerDiv2);
        loadingDiv.appendChild(innerDiv1);
    }

    if (loadingDiv != null) {
        //show loading
        loadingDiv.style.display = "block";
    }
}

function CFInspectHideLoading() {
    if (loadingDiv != null) {
        loadingDiv.style.display = "none";
    }
}

window.addEventListener("firefox-review-url", function (event) {
    try {
        chrome.runtime.sendMessage(event.detail);
    } catch (e) {

    }
}, false);