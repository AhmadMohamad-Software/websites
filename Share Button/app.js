function share(){
    var shareData={
        title:document.title,
        text:'your title here',
        url:document.location.href
    }
    if(navigator.canShare(shareData)){
        navigator.share(shareData);
    }
}
