$(window).on("load", function () {
    let gameLink;

    let observer = new MutationObserver(function (mutations) {
        gameLink = document.querySelector("[data-a-target = 'stream-game-link']");
        if (gameLink) {
            console.log(gameLink.text);
            observer.disconnect();
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
});


