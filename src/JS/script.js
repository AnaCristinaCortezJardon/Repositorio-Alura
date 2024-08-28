// DOMContentLoaded activa el script cuando el html está disponible
document.addEventListener('DOMContentLoaded', function () {
    let textoEntrada = document.getElementById('texto-entrada');
    let textoSalida = document.getElementById('texto-salida');
    let btnEncriptar = document.getElementById('btn-encriptar');
    let btnDesencriptar = document.getElementById('btn-desencriptar');
    let btnCopiar = document.getElementById('btn-copiar');
    let alertLabel = document.getElementById('alertLabel');

    // Función para encriptar texto ingresado
    function encriptar(texto) {
        return texto.toLowerCase()
            .replace(/á/g,"a")
            .replace(/é/g,"e")
            .replace(/í/g,"i")
            .replace(/ó/g,"o")
            .replace(/ú/g,"u")
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función de desencriptar el texto
    function desencriptar(texto) {
        return texto.toLowerCase()
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Evento para encriptar
    btnEncriptar.addEventListener('click', function () {
        let textoEncriptado = encriptar(textoEntrada.value);
        textoSalida.value = textoEncriptado;
        textoEntrada.value = '';
        textoSalida.style.backgroundImage ="none"; //quita imagen
    });

    // Evento para desencriptar
    btnDesencriptar.addEventListener('click', function () {
        let textoDesencriptado = desencriptar(textoEntrada.value);
        textoSalida.value = textoDesencriptado;
        textoEntrada.value = '';
    });

    // Evento para copiar
    btnCopiar.addEventListener('click', function () {
        navigator.clipboard.writeText(textoSalida.value)
        .then(() => {
            alertLabel.innerHTML = '';
            alertLabel.insertAdjacentHTML("beforeend", `Texto copiado en el portapapeles  <i style="font-size:18px; color: #757FB2; background-color: #275954"; class="fa">&#xf0ea;</i>`);
            alertLabel.style.display = "inline-block";
            
            // Oculta el mensaje después de 2 segundos
            setTimeout(() => {
                alertLabel.style.display = 'none';
            }, 1500);
            textoSalida.value = '';
            setTimeout(() => {
                textoSalida.style.backgroundImage ="url(./src/img/Mujer.png)";
            }, 1500);
            
        })
    });
});