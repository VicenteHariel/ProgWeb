

 $("body").ready(function (){

 //  ao passar mouse sobre a logo    
    $("#logo").hover(function(){$("#label").slideToggle(1000)}    );     
       
// função ao clicar no botão saiba mais   
    $("#btn").click(function(){
        $("#box").css("display","flex")
        });
    

    $("#fechar").click(function(){$("#box").css("display","none")
        });
    
    $("#btEnviar").click(function(){
      $("#box").css("display","none"),
      window.alert("Dados Enviados")
    });
    
    $.getJSON('json/conteudo.json', function(json) {
         json.forEach(item=>{
          $("#cont").append(`
            <div id="txtcont">${item.descUm}</div>
            <p>${item.valor}</p>
            <span><p>${item.descDois}</p></span>

            `)
         })
       });
//faz o primeiro paragrafo aparecer
    $("h2").click(function(){
      $("#p1").slideToggle(2000)
    });
 

 // Alerta obtendo conteudo do 2 paragrafo
    $("#btn1").click(function(){
      txt = $("#conteudo2").html();
      $(".alert-success").html(txt);
      $(".alert-success").fadeToggle();
     });


//adiciona titulo ao segundo paragrafo
    $("#btn2").click(function(){
     $('#conteudo2').prepend(`<h3>Diferencial</h3>`);
     });

// adiciona frase no final do 1 paragrafo
        $("#btn3").click(function(){
     $('#p1').append(`<h3>FRASE NO FINAL DO PRAGRAFO!</h3>`);
     });

// MUDA COR DE FUNDO
  $("#btn4").click(function(){
     $('#botoes').css("background-color", "#61bfd880");
     });

//adiciona borda inferior pontilhada
  $("#btn5").click(function(){
     $('#paragrafos').css("border", "dotted");
     });
 
var prof = ["John","rafael","Rodrigo"];
var dis = ["Prog web", "Banco de Dados", "Webdesign"];


//gera table atraves dos arrays
$("#btn6").click(function(){             
for (i=0; i<3;i++){
  $("table").append(`<tr><td>${prof[i]}</td><td>${dis[i]}</td></tr>
    `)
}
});



 }); // fim do body.ready
  

  /*   essa aqui somente para :hover   
    $("#logo").hover(function(){$("#label").slideToggle(1000)}       
                     , function(){$("#label").slideUp(1000)}
        );
        */
    
    
