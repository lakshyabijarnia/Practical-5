console.log('Youtube Stats Extension loaded!');
//setTimeout(scroll(0, 100), 2000);

if (window.location.href.substring(0, 32) == 'https://www.youtube.com/watch?v='){
    setTimeout(function(){
    
        views = document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerHTML;
        viewShort = document.getElementsByClassName("short-view-count style-scope ytd-video-view-count-renderer")[0].innerHTML;
        views = views.substring(0, views.length-6);

        likes = document.getElementsByClassName("style-scope ytd-toggle-button-renderer style-text")[1].ariaLabel;
        likesShort = document.getElementsByClassName("style-scope ytd-toggle-button-renderer style-text")[1].innerHTML;
    
        message = "Views: " + views + "(" + viewShort +")" + "\nLikes: " + likes + "(" + likesShort + ")"; 
        console.log(message);
        alert(message);
    } ,3000)
}
