function doGet(){
    return HtmlService.createTemplateFromFile('web')
                      .evaluate()
                      .setTitle('Servicio de transporte Golden Line');
}

function obtenerDatosHTML(nombre){
   return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}