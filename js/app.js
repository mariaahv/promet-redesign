$(document).ready(function(){


  var $container=$('#senati');
  function showProyectos(){
  for(var i=0 ;i<data.length;i++){
    var $containerProyectos=$('<div></div>');
    $containerProyectos.addClass(' lista box col-xs-6 col-md-5 container-images');
    $containerProyectos.attr('data-name',data[i].name);
    $containerProyectos.attr('data-toggle','modal');
    $containerProyectos.attr('data-target','.bs-example-modal-lg');
    $container.append($containerProyectos);


  }
}
 // llamando ala funcion
  showProyectos();



  //myModal
  $('.box').on('click',function(){
    for(i=0;i<data.length;i++){
      if($(this).data('name')===data[i].name){
        $('.image1').attr('src',data[i].image1);
        $('.image1').addClass('images-modal');
        $('.image2').attr('src',data[i].image2);
        $('.image2').addClass('images-modal');
        $('.image3').attr('src',data[i].image3);
        $('.image3').addClass('images-modal');
      }
    }
  });

});
