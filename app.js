
// Usuarios:

var cuentas = [
  { nombre: 'Mali', saldo: 200, password: '123' },
  { nombre: 'Gera', saldo: 290, password: '456' },
  { nombre: 'Maui', saldo: 67, password: '789' }
];

var interface = document.querySelector('.interface')
const buttonUser1 = document.querySelector('.User1');
const buttonUser2 = document.querySelector('.User2');
const buttonUser3 = document.querySelector('.User3');
const userName = document.getElementById('userName');





buttonUser1.addEventListener('click', function () {

  const passwordEntered = prompt('Ingresa tu contraseña');

  if (passwordEntered == cuentas[0].password) {
    alert('Contraseña correcta');
    interface.style.visibility = 'visible';
    userName.textContent = cuentas[0].nombre;
    selectedIndex = 0
  } else {
    alert('Contraseña incorrecta')
  }
}

)

buttonUser2.addEventListener('click', function () {

  const passwordEntered = prompt('Ingresa tu contraseña');

  if (passwordEntered == cuentas[1].password) {
    alert('Contraseña correcta');
    interface.style.visibility = 'visible';
    userName.textContent = cuentas[1].nombre;
    selectedIndex = 1
  } else {
    alert('Contraseña incorrecta')
  }
}

)

buttonUser3.addEventListener('click', function () {

  const passwordEntered = prompt('Ingresa tu contraseña');

  if (passwordEntered == cuentas[2].password) {
    alert('Contraseña correcta');
    interface.style.visibility = 'visible';
    userName.textContent = cuentas[2].nombre;
    selectedIndex = 2
  } else {
    alert('Contraseña incorrecta')
  }
}

)

// for (let i = 0; i < buttonUsers.length; i++) {
//     buttonUsers[i].addEventListener('click', function() {

//         selectedIndex = i
//     const passwords = ['123', '456', '789']
//       const passwordEntered = prompt('Ingresa tu contraseña');

//       if (passwordEntered === passwords[0]) {
//         alert('Contraseña correcta');
//         interface.style.visibility = 'visible';
//         userName.textContent = 'Mali';
//       } else if (passwordEntered === passwords[1]) {
//         alert('Contraseña correcta');
//         interface.style.visibility = 'visible';
//         userName.textContent = 'gera';
//       } else if (passwordEntered === passwords[2]) {
//         alert('Contraseña correcta');
//         interface.style.visibility = 'visible';
//         userName.textContent = 'gera';
//       }else {
//         alert('Contraseña incorrecta');
//       }
//     });
//   }



let result = document.querySelector('.resultShown')
// Consultar Saldo
const balanceInterface = document.querySelector('.balanceInterface')
const balanceCheck = document.querySelector('.balanceCheck')
const balanceNumber = document.querySelector('.balanceNumber')
balanceCheck.addEventListener('click', function () {
  balanceInterface.style.visibility = 'visible';
  balanceNumber.textContent = (cuentas[selectedIndex].saldo)
  enteredAmount.style.visibility= 'hidden'
}
)

// Ingresar monto
const addAmount = document.querySelector('.add')


addAmount.addEventListener('click', function () {
  const newAmount = Number(prompt('Agrega un monto'))
  if (newAmount + cuentas[selectedIndex].saldo > 990) {
    alert('Ha superado el limite de saldo, no puedes tener mas de $990 en tu cuentas ')
  } else {
    cuentas[selectedIndex].saldo += newAmount;
    alert(`Has ingresado ${newAmount} El nuevo saldo es de ${cuentas[selectedIndex].saldo}`)
   
  }
}
)

// Retirar monto

const retireAmount = document.querySelector('.retire')

retireAmount.addEventListener('click', function () {
  const newAmount2 = Number(prompt('Ingresa la cantidad a retirar'))
  if (cuentas[selectedIndex].saldo - newAmount2 < 10 ) {
    alert('Lo minimo que puede tener una cuenta es $10, ingresa otra cantidad')
  } else {
    cuentas[selectedIndex].saldo -= newAmount2;
    alert(`Has retirado ${newAmount2} el nuevo saldo es de ${cuentas[selectedIndex].saldo}`) 
  }

}
)

