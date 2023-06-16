let seccionProductos = document.querySelector('.seccion-productos');
let producto = document.querySelector('.producto');
let seccionLinks = document.querySelector('.seccion-links');
let btnBombillas = document.querySelector('#bombillas');
let btnProductosLiquidacion = document.querySelector('#productosLiquidacion');
let btnProductosNuevoIngreso = document.querySelector('#productosNuevoIngreso');




function muestraBombillos(){
    seccionProductos.innerHTML='';
    seccionProductos.innerHTML=`
<div class="producto">
<figure><img src="../images/taladro.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Pala</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/taladro de pared.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/BombillaColocha.png" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/plafonera1.jpg" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/obrero.jpg" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/chaleco reflectivo.jpg" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>

`
}




function muestraProductosLiquidacion(){
    seccionProductos.innerHTML='';
    seccionProductos.innerHTML=`
<div class="producto">
<figure><img src="../images/250x300/240x300 otra.jpg" alt=""></figure>
<p class="descripcion-producto">Descripcion: Pala</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta electrica.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta1.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta2.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta3.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta4.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>

`
}


function muestraProductosNuevoIngreso(){
    seccionProductos.innerHTML='';
    seccionProductos.innerHTML=`
<div class="producto">
<figure><img src="../images/250x300/240x300 otra.jpg" alt=""></figure>
<p class="descripcion-producto">Descripcion: Piocha</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta1.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta6.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta4.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/herramienta3.jfif" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>
<div class="producto">
<figure><img src="../images/250x300/240x300 otra.jpg" alt=""></figure>
<p class="descripcion-producto">Descripcion: Bombilla LED 18W</p>
<P class="precio-producto">Precio: Q25.00</p>
<button><i class="fa-solid fa-cart-plus"></i></button>
</div>

`
}


btnBombillas.addEventListener('click',muestraBombillos);
btnProductosLiquidacion.addEventListener('click',muestraProductosLiquidacion);
btnProductosNuevoIngreso.addEventListener('click',muestraProductosNuevoIngreso);
