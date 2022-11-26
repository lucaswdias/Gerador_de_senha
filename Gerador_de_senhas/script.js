const gerar = document.getElementById('gerar_senha');
document.getElementById('copy').addEventListener('click',copy);

function gerar_senha(e){
    const length = 15,
    charset ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]'
    let pass ='';
    for(let i=0, n=charset.length;i<length;++i){
        pass+=charset.charAt(Math.floor(Math.random()*n));
    }
    gerar.innerHTML=pass;
}
function copy(){
    const copiartexto = gerar.innerHTML;
    navigator.clipboard.writeText(copiartexto).then(()=>{
        alert('Copiado para area de transferência')
    });
}