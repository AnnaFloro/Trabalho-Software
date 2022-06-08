// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      init()
function init(){

var inNAme = document.getElementById("NOME")
var inName = document.getElementById("SOBRENOME")
  var inNAme = document.getElementById("DATA DE NASCIMENTO")
  var inNAme = document.getElementById("IDADE")
  var inNAme = document.getElementById("RG")
  var inNAme = document.getElementById("PASSAPORTE")
  var inNAme = document.getElementById("ESTADO CIVIL")
  var inNAme = document.getElementById("PROFISSÃO")
  var inNAme = document.getElementById("QUANTIDADE DE FILHOS")
  var inNAme = document.getElementById("CONTATO")
  var inNAme = document.getElementById("COMPLEMENTO")
  

  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  inNAme.onkeyup = salvar
  
 }



function salvar (){
  var inNAme = document.getElementById("NOME")
  var inName = document.getElementById("SOBRENOME")
  var inNAme = document.getElementById("DATA DE NASCIMENTO")
  var inNAme = document.getElementById("IDADE")
  var inNAme = document.getElementById("RG")
  var inNAme = document.getElementById("PASSAPORTE")
  var inNAme = document.getElementById("ESTADO CIVIL")
  var inNAme = document.getElementById("PROFISSÃO")
  var inNAme = document.getElementById("QUANTIDADE DE FILHOS")
  var inNAme = document.getElementById("CONTATO")
  var inNAme = document.getElementById("COMPLEMENTO")
 
  
  localStorage.setItem("NOME", NOME)
  localStorage.setItem("SOBRENOME", SOBRENOME)
  localStorage.setItem("DATA DE NASCIMENTO", DATA DE NASCIMENTO)
  localStorage.setItem("IDADE", IDADE)
  localStorage.setItem("RG", RG)
  localStorage.setItem("PASSAPORTE", PASSAPORTE)
  localStorage.setItem("ESTADO CIVIL", ESTADO CIVIL)
  localStorage.setItem("PROFISSÃO", PROFISSÃO)
  localStorage.setItem("QUANTIDADE DE FILHOS", QUANTIDADE DE FILHOS)
  localStorage.setItem("CONTATO", CONTATO)
  localStorage.setItem("COMPLEMENTO", COMPLEMENTO)
}
  
function carregar () {
   if ( "name"in localStorage){
     var NOME = localStorage.getItem("name")
    document.getElementById("NOME").value = NOME
   }
  
   {
   if ( "name"in localStorage){
     var SOBRENOME = localStorage.getItem("name")
    document.getElementById("SOBRENOME").value = SOBRENOME
   }

     {
   if ( "name"in localStorage){
     var DATA DE NASCIMENTO = localStorage.getItem("name")
    document.getElementById("DATA DE NASCIMENTO").value = DATA DE NASCIMENTO
   }

       {
   if ( "name"in localStorage){
     var IDADE = localStorage.getItem("name")
    document.getElementById("IDADE").value = IDADE
   }

         {
   if ( "name"in localStorage){
     var RG = localStorage.getItem("name")
    document.getElementById("RG").value = RG
   }

           {
   if ( "name"in localStorage){
     var PASSAPORTE = localStorage.getItem("name")
    document.getElementById("PASSAPORTE").value = PASSAPORTE
   }

             {
   if ( "name"in localStorage){
     var ESTADO CIVIL = localStorage.getItem("name")
    document.getElementById("ESTADO CIVIL").value = ESTADO CIVIL
   }

               {
   if ( "name"in localStorage){
     var PROFISSÃO = localStorage.getItem("name")
    document.getElementById("PROFISSÃO").value = PROFISSÃO
   }

                 {
   if ( "name"in localStorage){
     var QUANTIDADE DE FILHOS = localStorage.getItem("name")
    document.getElementById("QUANTIDADE DE FILHOS").value = QUANTIDADE DE FILHOS
   }

                   {
   if ( "CONTATO"in localStorage){
     var nome = localStorage.getItem("name")
    document.getElementById("CONTATO").value = CONTATO
   }

                     {
   if ( "name"in localStorage){
     var COMPLEMENTO = localStorage.getItem("name")
    document.getElementById("COMPLEMENTO").value = COMPLEMENTO
   }
}
 

function limpar () {
   localStorage.clear()
  document.getElementById("NOME").value = "NOME"
  document.getElementById("SOBRENOME").value = "SOBRENOME"
  document.getElementById("DATA DE NASCIMENTO").value = "DATA DE NASCIMENTO"
  document.getElementById("IDADE").value = "IDADE"
   document.getElementById("RG").value = "RG"
   document.getElementById("PASSAPORTE").value = "PASSAPORTE"
   document.getElementById("ESTADO CIVIL").value = "ESTADO CIVIL"
   document.getElementById("PROFISSÃO").value = "PROFISSÃO"
   document.getElementById("QUANTIDADE DE FILHOS").value = "QUANTIDADE DE FILHOS"
   document.getElementById("CONTATO").value = "CONTATO"
   document.getElementById("COMPLEMENTO").value = "COMPLEMENTO"
}
  

  

