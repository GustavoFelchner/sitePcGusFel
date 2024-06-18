var n=1;
function nextImg(){if(n==1){document.getElementById('s1').style.backgroundImage='url(https://www.intensivacursos.com.br/wp-content/uploads/curso-conserto-manutencao-celulares-1.png.webp)'; n=2} else {document.getElementById('s1').style.backgroundImage='url(https://semifree.com.br/wp-content/uploads/2020/10/manutencao_de_celulares_e_smartphones_598076516.jpg)'; n=1}};
function aumenta(){document.getElementById('next').style.height='45px'; document.getElementById('next').style.width='45px'};
function diminui(){document.getElementById('next').style.height='40px'; document.getElementById('next').style.width='40px'};
function fechar(){document.getElementById('popUp1').style.display='none';}