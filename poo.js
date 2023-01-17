// Programacion orientada a objetos

// I. Objetos

const lapicera = {
    color:'violeta',
    marca:'papper make',
    escribir: function(){
        console.log('Escribiendo con la lapicera...')
    }
}

// Acceder a una propiedad
    console.log( lapicera['color'] );
    console.log( lapicera.marca );

// Ejecutar el metodo de un objeto
    lapicera.escribir()

    console.log('-------------------');

// Modelar un objeto "lavarropa" con sus propiedades y al menos dos metodos
    const lavarropa={
        color:'blanco',
        marca:'dream',
        encendido:false,
        lavar:function(){
            console.log('lavando la ropa');
        },
        encender:function(){
            this.encendido=true;
        }, 
        apagar:function(){
            this.encendido=false;
        }

    }
    console.log(lavarropa.color);
    console.log(lavarropa['marca']);
    lavarropa.lavar()
    lavarropa.encender()
    console.log(lavarropa);
    lavarropa.apagar()
    console.log(lavarropa);