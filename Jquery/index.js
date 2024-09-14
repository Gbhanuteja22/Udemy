$("h1").addClass("big-title border-10");
console.log($("a").attr("href"));
$("a").attr("href","https://www.bing.com")
$("input").keypress(function(e){
    $("h1").text(e.key);
})
$("button").click(function(){
    $("h1").slideToggle();
    // $("h1").animate({opacity:0.5})
})