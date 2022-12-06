const textarea = document.getElementById('textarea')
        const button = document.querySelector('button')
        var texto = document.querySelector('p')
        var valorDoTexto = textarea.value

        setInterval(function setTimer(){
            texto.innerText = textarea.value
        }, 100)
        function transformarTexto(){
         texto.classList.toggle("maiusculo")
        }
        
        function transformarNegrito(){
            texto.classList.toggle("negrito");
        }
        function transformarItalico(){
            texto.classList.toggle("italico");
        }
        function aumentarTamanho(){
            texto.classList.toggle("aumento")
        }