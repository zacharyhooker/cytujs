var setupscript = document.createElement('script');
if (!jQuery){
    setupscript.src = '//code.jquery.com/jquery-3.2.1.min.js';
    document.getElementsByTagName('head')[0].appendChild(setupscript); 
}
if (!jQuery.ui){
    setupscript.src = '//code.jquery.com/ui/1.12.1/jquery-ui.min.js';
    document.getElementsByTagName('head')[0].appendChild(setupscript); 
}
$(function(){
$('<a/>', {
    text: 'zimJS',
    href: '#',
    click: function(){$("<p>Direct interaction between slutbot or some channel information.. etc!</p>").dialog();}
}).wrap('<li />').parent().appendTo('.navbar ul');

});
console.log(socket)
console.log('Initialized userscript Cytujs: Channel JS')
