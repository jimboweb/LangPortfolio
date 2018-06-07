const slideInterval = 2;

$(document).ready(()=>{
    start();
})



const start = () => {
    const jqxhr = $.getJSON( "./links.json", (json) => {
        const links = json["imageLinks"];
        const htm = $.templates("#thumbnailTmpl").render(links);
        $("#thumbnails").html(htm);           // Insert HTML string into DOM

    })
    .fail(()=>{
        console.log("not loaded");
    })
    .done(()=>{
        slideShow();
    });
}

const slideShow = () => {
    doSwitchSlide();
    setInterval(doSwitchSlide, slideInterval*1000);
}

const doSwitchSlide = () => {
    const slideDiv = $("#slideshow");
    const nextTnDiv = parseInt(slideDiv.attr("data-next"));
    const thumbnails = $("#thumbnails").children();
    const nextTn = thumbnails.eq(nextTnDiv);
    const imgSrc = nextTn.find("img").attr("src");
    const caption = nextTn.find("figcaption").text();
    const link = nextTn.find("a").attr("href")
    $("img#slideImage").attr("src", imgSrc);
    $("figcaption#slideCaption").html(caption);
    $("a#slideLink").attr("href",link);
    const newDiv = (nextTnDiv+1)%thumbnails.length;
    slideDiv.attr("data-next", newDiv);
}