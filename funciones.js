const HOJA = SpreadsheetApp.openById('1G0Jt0WyEQ4vc0ExseKJitmSOCuYvuMXRd5Smp_hk2ag').getActiveSheet();

function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Servicio de transporte Golden Line');
}

function doPost(){
  return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Servicio de transporte Golden Line');
}

function obtenerDatosHTML(nombre){
   return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
   return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre,apellido, correo, telefono){
  HOJA.appendRow([nombre,apellido, correo, telefono]);
}

function borrarContacto(numFila){
  HOJA.deleteRow(numFila);
}

function modificarContacto(numFila, datos){
  let celdas = HOJA.getRange('A'+numFila+':D'+numFila);
  celdas.setValues([[datos.nombre, datos.apellido, datos.correo, datos.telefono]]);
}

function importarContactos(){
  let url = 'https://randomuser.me/api/?results=5&inc=name,email,phone,picture';
  respuesta = UrlFetchApp.fetch(url).getContentText();
  let datos = JSON.parse(respuesta);

  datos.results.forEach(insertarContactoJSON);

}

function insertarContactoJSON(contacto){
  HOJA.appendRow([contacto.name.first, contacto.name.last, contacto.email, contacto.phone, contacto.picture.medium]);
}