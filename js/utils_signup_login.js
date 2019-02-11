(function(){
    // DOCUMENT READY
    try {
        document.getElementById('link_signup').addEventListener('click',function(){
            window.location.href = "./web/signup.html";
        });   
    } catch (error) {
        console.log(error);
    }
    try {
        document.getElementById('link_login').addEventListener('click',function(){        
            window.location.href = "../index.html";
        });
    } catch (error) {
        console.log(error);
    }
})();