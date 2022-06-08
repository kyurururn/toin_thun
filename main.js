if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 ){
    document.write('<link rel="stylesheet" type="text/css" href="main.css">');
}else{
    document.write('<link rel="stylesheet" type="text/css" href="pc.css">');
}