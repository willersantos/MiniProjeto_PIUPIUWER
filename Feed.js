function ativo(a){
    document.getElementById("barra_de_opção").style.left=a+"px";
    if (a==415){
        fazerRequisicao1();
    }
}
function ativo2(){
    document.getElementById("SetUpProfile").style.backgroundColor="#FAE02B";
    document.getElementById("SetUpProfile2").style.color="white";
    document.getElementById("SetUpProfile").style.borderColor="black";
}
function desativo2(){
    document.getElementById("SetUpProfile").style.backgroundColor="white";
    document.getElementById("SetUpProfile2").style.color="#FAE02B";
    document.getElementById("SetUpProfile").style.borderColor="#FAE02B";
}
function ativo3(){
    document.getElementsByTagName("button")[0].style.backgroundColor="#F1D900";
}
function desativo3(){
    document.getElementsByTagName("button")[0].style.backgroundColor="#FFE600";
}
function ativo4(){
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].src="./Photos/Group 106.png";
}
function desativo4(){
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].src="./Photos/Group 107.png";
}
var evento=document.getElementsByTagName("li");
function ativo5(a,b){
    evento[a].style.backgroundColor="rgba(0,0,0,"+b+")";
}
function desativo5(a){
    evento[a].style.backgroundColor="rgba(0,0,0,0)";
}
function ativo6(b){
    document.getElementById("options").getElementsByTagName("li")[b].style.backgroundColor="rgba(250, 224, 43,0.2)";
}
function desativo6(b){
    document.getElementById("options").getElementsByTagName("li")[b].style.backgroundColor="rgba(255,255,255)";
}
function expandir(b){
    document.getElementById("barra_de_opção").style.width=b+"px";
}
function sombra(){
    document.getElementById("Logo_PiuPiuwer").src="./Photos/Group 7 (2).jpg";
}
function Nsombra(){
    document.getElementById("Logo_PiuPiuwer").src="./Photos/Group 7.png";
}
function clear(){
    document.getElementById("search").value="";
}
function diminuifoto(){
    sombra2(1,1,0);
    var perfil=document.getElementById("perfil").style;
    var fechar=document.getElementById("fechar").style;
    perfil.width="120px";
    perfil.height="120px";
    perfil.borderRadius="120px";
    perfil.left="420px";
    perfil.top="155px";
    perfil.opacity="100%";
    document.getElementById("fechar").innerHTML="";
    fechar.width="0px";
    fechar.height="0px";
}
function fechar(){
    sombra2(1,1,0);
    var piu=document.getElementById("espaço_de_piu").style;
    var fechar=document.getElementById("botão_fecha").style;
    var pos=document.getElementById("campo_post").style;
    var botao=document.getElementById("Piu_button").style;
    var input=document.getElementById("coment").style;
    piu.width="0px";
    piu.height="0px";
    fechar.width="0px";
    fechar.height="0px";
    pos.width="0px";
    pos.height="0px";
    botao.width="0px";
    botao.height="0px";
    input.width="0px";
    input.height="0px";
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].src=" ";
}
