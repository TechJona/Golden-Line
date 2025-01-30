function doGet(){
    return HtmlService.createTemplateFromFile('web')
                      .evaluate()
                      .setTitle('Servicio de transporte Golden Line');
}

function obtenerDatosHTML(nombre){
   return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
   let hoja = SpreadsheetApp.openById('1G0Jt0WyEQ4vc0ExseKJitmSOCuYvuMXRd5Smp_hk2ag').getActiveSheet();
   let datos = hoja.getDataRange().getValues();
   return datos;
}