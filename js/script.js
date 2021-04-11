var menu = $('.menu div');
menu.click(function (){
    menu.toggleClass('active-humberger')
    
    // show items in down humberger 
    var items = $('.menu-items');
    items.toggleClass('transitoin-menu-items');
    setTimeout(function() {
        if(items.css('visibility') ==='visible'){
            items.css('visibility' ,'hidden');
            items.css('position' ,'absolute');
        }else {
            items.css('visibility' ,'visible');
            items.css('position' , 'relative');
        }
    } , 100)
})