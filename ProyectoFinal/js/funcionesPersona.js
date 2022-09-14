
function Persona(nombre, apellido, dni, mail) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.dni = dni;
       this.mail = mail;

       this.saludar = () =>
         `Hola mi nombre es ${this.nombre} ${this.apellido}, mi dni es: ${this.dni}`;
     }

function crearPersona() {
      let nombre = prompt("Ingresa tu nombre");
      let apellido = prompt("Ingresa tu apellido");
      let dni = prompt("Ingresa tu dni");
      let mail = prompt("Ingresa tu mail");
   
    
      const objetoPersona = new Persona(
        nombre,
        apellido,
        fechaNac,
        
        mail
        
      );
      return objetoPersona;
    }
    
    const personaUno = crearPersona();
    console.info(personaUno);
