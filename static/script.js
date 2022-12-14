const inputImagem = document.querySelector('.input__personalizado');
const previaImagem = document.getElementById('previa__imagem');
const menuDropdown = document.getElementById('dropdown__menu');
const dropDownOpt = document.getElementById('dropdown__opt');
const dropdownAtivar = document.getElementById('dropdown__Ativar');
const dropdownAtivo = document.getElementById('dropdown__Ativo');
const conteudo = document.getElementById('conteudo__principal');
const mensagem = document.getElementById('mensagem__flash');
const fecharMensagem = document.getElementById('fechar__mensagem');
var mostrarDropdown = false



window.addEventListener('load', function(){
menuDropdown.addEventListener('click', function(){
    acionaDropdown()
})

conteudo.addEventListener('click', function(){
  if(mostrarDropdown){
    acionaDropdown()
  }
})
 
function acionaDropdown(){
    mostrarDropdown = !mostrarDropdown
    console.log(mostrarDropdown);


    dropDownOpt.classList.toggle('hidden')
    dropdownAtivo.classList.toggle('hidden')
    dropdownAtivar.classList.toggle('hidden')
   
}

})

// Funcionalidade referente a alteração de capa da tela editar review
$('form input[type="file"]').change(event => {
  console.log('teste');
  let arquivos = event.target.files;
  if (arquivos.length === 0) {
    console.log('sem imagem pra mostrar')
  } else {
      if(arquivos[0].type == 'image/jpeg' || arquivos[0].type == 'image/png') {
        $('img').remove();
        let imagem = $('<img class=" h-60">');
        imagem.attr('src', window.URL.createObjectURL(arquivos[0]));
        $('figure').prepend(imagem);
      } else {
        alert('Formato não suportado')
      }
  }
});

fecharMensagem.addEventListener('click', event => {
  event.preventDefault();
  mensagem.style.display = 'none';
})