/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var val_txt;
var thead = [];
var tmesure = [];
tmesure[0] = "";
tmesure[1] = "";
tmesure[2] = "|               :               ";
tmesure[3] = "|               :               :               ";
tmesure[4] = "|               :               !               :               ";

function inserer_meta_part(){
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
    thead = val_txt.split(delim);
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
function inserer_mesure(conf){
    var result = true;
    var zn_text = document.forms.zn_text.txt_content;
    val_txt = $("#txt_content").val();
    var delim = "\n";
    thead = val_txt.split(delim);
    if(thead[0]===undefined || thead[1]===undefined){
//        alert("vide");
        inserer_key();
    }
    else
    {
//        alert("not vide");
        if(conf==1){
            result = confirm("voulez-vous vraiment la structure de la partition?");
        }
        
    }
    if(result === true) {
        var txt ="";
        var nb_mes_by_ligne = $("#nb_mes_by_ligne").val();
        var nb_ligne = $("#nb_ligne").val();

        var temp_num = $("#temp_num").val();
        var temp_den = $("#temp_den").val();
        
//        alert("temp_num "+temp_num+" temp_den "+temp_den);
        var cpt = 10; 
        
        for(var l=1;l<=nb_ligne;l++)
        {
            for(var r=0;r<4;r++)
            {
                thead[cpt] = "";
                for(var m=0;m<nb_mes_by_ligne;m++)
                {
                    if(m==nb_mes_by_ligne-1)
                    {
                        thead[cpt] += tmesure[temp_num]+"}";
                    }
                    else
                    {
                        thead[cpt] += tmesure[temp_num];
                    }
                }
                cpt++;
            }
            if(l != nb_ligne)
            {
                thead[cpt] = "";
                cpt++;
                thead[cpt] = "";
                cpt++;
                thead[cpt] = "#";
                cpt++;
                thead[cpt] = "";
                cpt++;
                thead[cpt] = "";
                cpt++;
            }
        }
        for(var i=0;i<cpt;i++){
            txt += thead[i]+"\n";
        }
        $("#txt_content").val(txt);
    }
    else{
        return false;
    }
}

function inserer_key(){
    var result = true;
    var zn_text = document.forms.zn_text.txt_content;
    val_txt = $("#txt_content").val();
    var delim = "\n";
    thead = val_txt.split(delim);
    if(thead[0]===undefined || thead[1]===undefined){
        inserer_meta_part();
    }
    else
    {
        result = confirm("voulez-vous vraiment changer la clef de la partition?");
    }
    if(result===true){
        var txt ="";
        var tit = "Do dia";
        var dim = "";
        var key_note = $("#key_note").val();
        var aug_dim = $("#aug_dim").is(':checked');
        var bemole = $("#bemole").is(':checked');
        var dieze = $("#dieze").is(':checked');

        var temp_num = $("#temp_num").val();
        var temp_den = $("#temp_den").val();

        if(aug_dim){
            if(bemole){
                dim += 'b';
            }
            else
            {
                dim += '#';
            }
        }

    //    alert(" titre :"+key_note+" titre :"+aug_dim+" titre :"+bemole+" titre :"+dieze);
    //    
        thead[7] = tit+" "+key_note+""+dim+" "+temp_num+"/"+temp_den;
        thead[8] = "]";
        for(var i=0;i<thead.length;i++){
            txt += thead[i]+"\n";
        }
        $("#txt_content").val(txt);
        inserer_mesure(2);
    }
    else{
        return false;
    }
}
function insert_char(){
    
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
/*Positionner le curseur*/
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
    var txt = this.value.toString();
//                alert(txt.substring(0,3));
    var contenu = document.forms.zn_text.txt_content;
    this.focus();
    var start = getSelectionStart.call(contenu);
    var stop = getSelectionEnd.call(contenu);
    var long = str.length;
//    alert(long);
    var scrollPos = this.scrollTop;
//    if(start==stop){
        var end = parseInt(start) + parseInt(long);
        this.value = txt.substring(0, start) + str + txt.substring(end);
//    }
//    else{
//        var end = start + long;
//        this.value = txt.substring(0, start) + str + txt.substring(end);
//    }
    if ( keep ) setCaretPos.call(contenu,end,end);
    else this.setCaretPos(end);
    this.scrollTop = scrollPos;
}
function remplacer(str){
//                var str = "saon";
    var contenu = document.forms.zn_text.txt_content;
    replaceSelection.call(contenu,str,true);
}
function inserer(char){
//    var ch_insert = 's';
    var contenu = document.forms.zn_text.txt_content;
    replaceSelection.call(contenu,char,true);
}

function envoyer(text)
{
//    $post()
    alert(text);
}

