/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function inserer(){
    var txt ="";
    var tit = "Hira :";
    var comp = "Namorona ny feony :";
    var arr = "Nandika ny feony:";
    var aut = "Tonony :";
    
    var titre = $("#titre").val();
    var composer = $("#composer").val();
    var arranger = $("#arranger").val();
    var auteur = $("#auteur").val();
    
    var zn_text = document.forms.zn_text.txt_content;
    var val_txt = $("#txt_content").val();
    var delim = "\n";
    var thead = val_txt.split(delim);
//    if(thead.length >= 6){
        thead[0] = tit+" "+titre;
        thead[1] = comp+" "+composer;
        thead[2] = arr+" "+arranger;
        thead[3] = aut+" "+auteur;
        thead[4] = "";
        thead[5] = "";
        thead[6] = "#";
//    }
    for(var i=0;i<thead.length;i++){
        txt += thead[i]+"\n";
    }
    $("#txt_content").val(txt);
}
function test() {
    alert("Nombre de paramètres: " + arguments.length);
    for(var i=0; i<arguments.length; i++) {
        alert("Paramètre " + i + ": " + arguments[i]);
    }
}

function getSelection() {
    if (this.setSelectionRange)
            return this.value.substring(this.selectionStart, this.selectionEnd);
    else if (document.selection) {
            this.focus();
            return document.selection.createRange().text;
    }
}
 function getSelectionStart() {
    if ( typeof this.selectionStart != 'undefined' )
            return this.selectionStart;
    // IE Support
    this.focus();
    var range = this.createTextRange();
    range.moveToBookmark(document.selection.createRange().getBookmark());
    range.moveEnd('character', this.value.length);
    return this.value.length - range.text.length;
}
function getSelectionEnd() {
    if( typeof this.selectionStart != 'undefined') {
        return this.selectionEnd;
    }
    this.focus();
    var range = this.createTextRange();
    range.moveToBookmark(document.selection.createRange().getBookmark());
    range.moveStart('character',-this.value.length);
    return range.text.length;
}
function setCaretPos(start, end) {
    end = end || start; 	this.focus();
    if (this.setSelectionRange)
            this.setSelectionRange(start, end);
    else if (document.selection) {
            var range = this.createTextRange();
            range.moveStart('character', start);
            range.moveEnd('character', - this.value.length + end);
            range.select();
    }
}
function replaceSelection(str, keep) {
    this.focus();
    var start = this.getSelectionStart();
    var stop = this.getSelectionEnd();
    var end = start + str.length;
    var scrollPos = this.scrollTop;
    this.value = this.value.substring(0, start) + str + this.value.substring(stop);
    if ( keep ) this.setCaretPos(start, end);
    else this.setCaretPos(end);
    this.scrollTop = scrollPos;
} 

function envoyer(text)
{
//    $post()
    alert(text);
}

