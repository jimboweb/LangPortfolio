$(document).ready(()=>{
    start();
})



const start = () => {
    console.log("started");
    const jqxhr = $.getJSON( "./links.json", (json) => {
        const links = json["imageLinks"];
        const htm = links.map((item, i, links)=>{
            return $.templates("#thumbnailTmpl").render(links); // Get compiled template
        }).join("");
        const tn = $("#thumbnails").html();
        $("#thumbnails").html(htm);           // Insert HTML string into DOM

    })
    .fail(()=>{
        console.log("not loaded");
    });
}