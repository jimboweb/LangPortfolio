$(document).ready(()=>{
    start();
})
const start = () => {
    console.log("started");
    const jqxhr = $.getJSON( "./links.json", (json) => {
        const links = json["imageLinks"];
        links.map((item, i, links)=>{
            console.log(item["image"]);
        })
   })
        .fail(()=>{
            console.log("not loaded");
        });
}