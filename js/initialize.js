/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    $("#aug_dim").removeAttr('checked');
    $("#bemole").attr("disabled","true");
    $("#dieze").attr("disabled","true");
    
    $('#tab_outil a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('#aug_dim').change(function() {
//        $("#aug_dim").is(':checked');
        var val = $('#aug_dim').is(':checked');
        if ( val == true) {
//             alert("c'est true");
            $("#bemole").removeAttr("disabled");
            $("#dieze").removeAttr("disabled");
//                $("#matricule1").removeAttr("readonly");
        }
        else if(val == false) {
//             alert("c'est false");
            $("#bemole").attr("disabled","true");
            $("#dieze").attr("disabled","true");
//                $("#matricule1").attr("readonly","true");
        }
        else{}
    });
});
function visualize()
{
       
}
        

