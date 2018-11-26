

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
  
 // obtem  conteudo atraves do doc json
    $.getJSON('json/conteudo.json', function(json) {
                json.forEach(item=>{
                  
             $("#cont").append(`<div id="txtcont">${item.descUm}</div> <p>${item.valor}</p><span><p>${item.descDois}</p></span>
      `)

      })
     });


  
    

 

    
 }); // fim do body.ready
  

  /*   essa aqui somente para :hover   
    $("#logo").hover(function(){$("#label").slideToggle(1000)}       
                     , function(){$("#label").slideUp(1000)}
        );
        */
    
    
    /* var myVar = setInterval(myTimer ,1000);
    function myTimer() {
        var d = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = d.toLocaleTimeString('pt-BR');
       } else {
          displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
       }
          document.getElementById("demo").innerHTML = displayDate;
    }*/