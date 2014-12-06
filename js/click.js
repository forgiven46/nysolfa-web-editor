/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
//    $('#do').click(function (e) {
//       alert(e);
//    
//    
    $('#new').click(function (e) {
       alert("merci mon Dieu");
    });
    $('#open').click(function (e) {
       alert("merci mon Dieu");
    });
    $('#print').click(function (e) {
//       alert("merci mon Dieu");
        envoyer($("#txt_content").val());
    });
    $('#download').click(function (e) {
       alert(e);
    });
    $('#upload').click(function (e) {
       alert("merci mon Dieu");
    });
    $('#play').click(function (e) {
       alert("merci mon Dieu");
    });
    $('#save').click(function (e) {
       alert("merci mon Dieu");
    });
    
    $('#copy').click(function (e) {
       alert(e);
    });
    $('#paste').click(function (e) {
       alert("merci mon Dieu");
    });
     $('#paste').click(function (e) {
       alert("merci mon Dieu");
    });
/**************  clé  *********************************/
    
   /**les notes ******/
    $('#do').click(function (e) {
       inserer('d');
    });
    $('#re').click(function (e) {
       inserer('r');
    });
    $('#me').click(function (e) {
       inserer('m');
    });
    $('#fa').click(function (e) {
       inserer('f');
    });
    $('#sol').click(function (e) {
       inserer('s');
    });
    $('#la').click(function (e) {
       inserer('l');
    });
    $('#ti').click(function (e) {
       inserer('t');
    });
    
    /******autres symboles******************************/
    $('#point').click(function (e) {
       inserer('.');
    });
    $('#virg').click(function (e) {
       inserer(',');
    });
    $('#virg2').click(function (e) {
       inserer(',,');
    });
    $('#pause').click(function (e) {
       inserer(',,');
    });
    $('#apos').click(function (e) {
       inserer("'");
    });
    $('#apos2').click(function (e) {
       inserer("''");
    });
    $('#tire').click(function (e) {
       inserer('-');
    });
    $('#point2').click(function (e) {
       inserer(':');
    });
    $('#exclam').click(function (e) {
       inserer('!');
    });
    $('#barre').click(function (e) {
       inserer('|');
    });
    $('#cross_open').click(function (e) {
       inserer('[');
    });
    $('#cross_close').click(function (e) {
       inserer(']');
    });
    $('#encol_open').click(function (e) {
       inserer('{');
    });
    $('#encol_close').click(function (e) {
       inserer('}');
    });
    $('#del').click(function (e) {
//       inserer('}');
    });
});


