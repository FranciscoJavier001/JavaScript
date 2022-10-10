 usuarioNombre = document.getElementById("inputName").value
 usuarioPeso = document.getElementById("inputPeso").value
 usuarioAltura = document.getElementById("inputAltura").value
 const bmi = usuarioPeso / (Math.pow(usuarioAltura, 2))

console.log(usuarioNombre)
console.log(bmi);

function calcular() {
    const node = document.createElement("p")
    const textNode = document.createTextNode(usuarioNombre + ", tu BMI es de " + bmi )
    node.appendChild(textNode)
    document.getElementById("myAnswer").appendChild(node)
}

