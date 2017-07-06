function filename()
   {
       var file = document.getElementById('fileinput');
       var test =file.value;
       var filename = test.replace(/^.*\\/, "");
       var extn = filename.split(".").pop();
       if(extn=="png"){
       	var img="<span id='file_img' class='png'></span>";
       }
      else if(extn=="zip"){
       		var img="<span id='file_img' class='zip'></span>";
       }
      else if(extn=="ai"){
       		var img="<span id='file_img' class='ai'></span>";
       }
      else if(extn=="jpeg"){
       		var img="<span id='file_img' class='jpeg'></span>";
       }
       else if(extn=="xml")
       {
       		var img="<span id='file_img' class='xml'></span>";
       }
       else if(extn=="pdf")
       {
       		var img="<span id='file_img' class='pdf'></span>";
       }
       document.getElementById('filevalue').innerHTML=img+filename;
       
   }
   function filename1()
   {
       var file = document.getElementById('fileinput1');
       var test =file.value;
       var filename = test.replace(/^.*\\/, "");
       var extn = filename.split(".").pop();
       if(extn=="png"){
       	var img="<span id='file_img1' class='png'></span>";
       }
      else if(extn=="zip"){
       		var img="<span id='file_img1' class='zip'></span>";
       }
      else if(extn=="ai"){
       		var img="<span id='file_img1' class='ai'></span>";
       }
      else if(extn=="jpeg"){
       		var img="<span id='file_img1' class='jpeg'></span>";
       }
       else if(extn=="xml")
       {
       		var img="<span id='file_img1' class='xml'></span>";
       }
       else if(extn=="pdf")
       {
       		var img="<span id='file_img1' class='pdf'></span>";
       }
       document.getElementById('filevalue1').innerHTML=img+filename;
       
   }

  function myFunction() {
      document.getElementById("power").checked = false;
      document.getElementById("factor").checked = false;
      document.getElementById("forte").checked = false;
      document.getElementById("pro").checked = false;
      document.getElementById("ultra").checked = false;
      document.getElementById("plus").checked = false;

}

function geturl() {
    setTimeout(function(){ 
      var srce = document.getElementById("sign_img");

      var tst=document.getElementById("doc_sign");

      var pdf_img=document.getElementById("signature");

      tst.setAttribute('src', srce.src);
      signature.setAttribute('src', srce.src);
      }, 1000);
}

function text1(){
  var appvalue= document.getElementById("pdf_text").value;
 var getvalue= document.getElementById("texbox1");
 getvalue.innerHTML=appvalue;
}
function text2(){
  var appvalue= document.getElementById("pdf_text2").value;
 var getvalue= document.getElementById("textbox2");
 getvalue.innerHTML=appvalue;
}
function text3(){
  var appvalue= document.getElementById("pdf_text3").value;
 var getvalue= document.getElementById("texbox3");
 getvalue.innerHTML=appvalue;
}
 function getpdfname(){
        var pdfname=document.getElementById("pdfname").value;
        var printname=document.getElementById("printname");
        printname.innerHTML=pdfname;
      }
       function getpdftitle(){
        var pdfname=document.getElementById("pdftitle").value;
        var printname=document.getElementById("printtitle");
        printname.innerHTML=pdfname;
      }
 function getpdfaddress(){
        var pdfname=document.getElementById("pdfaddress").value;
        var printname=document.getElementById("printaddress");
        printname.innerHTML=pdfname;
      }
      function getpdfemail(){
        var pdfname=document.getElementById("pdfemail").value;
        var printname=document.getElementById("printemail");
        printname.innerHTML=pdfname;
      }
      function getpdfattemtion(){
        var pdfname=document.getElementById("pdfattemtion").value;
        var printname=document.getElementById("printAttension");
        printname.innerHTML=pdfname;
      }