function share(){
    var shareData={
        url:'https://www.youtube.com/channel/UCUyDEO4Nkjba5qn6RmpBrOA'
    }
    if(navigator.canShare(shareData)){
        navigator.share(shareData);
    }
}