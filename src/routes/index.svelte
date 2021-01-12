<script>

  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
import MiniHero from "../components/MiniHero.svelte";
  import Share from "../components/Share.svelte";

  let carousels = [
    {
      perPage: 3,
    },
    {
      perPage: 3,
      controls: false,
    },
    {
      perPage: { 320: 2, 768: 4 },
    },
    {
      perPage: { 320: 1, 768: 3 },
    },
  ];

  function changed(event) {
    console.log(event.detail.currentSlide);
  }

  function handleClick() {
    alert("clicked");
  }
</script>

<style>
  .demo {
    margin: 0;
    padding-bottom: 30px;
    height: 230px;
    width: auto;
  }

  .slide-content {
    display: flex;
    flex-direction: column;
    height: 230px;
    background-color: #0000;
    margin: 0;
    padding-bottom: 30px;
  }

  .slide-content header {
    flex: 1;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 100px;
  }

  .slide-content section {
    height: 100px;
    margin: 0;
    padding-bottom: 30px;
    padding-top: 30px;
    color: aqua;
  }
</style>

<div class="demo bg-fixed"  style="background-image: url(beerrr.jpg)">

  

<div class="bg-gray-900">
  <h3 class="text-lg md:text-3xl">Softweel Technologies</h3>

</div>


</div>
<h5> Esta es una demostración de un menú digital </h5>
<h6>Cómo funciona?</h6>
<p class="pb-4">
Es simple, este menú estara disponible mediante un <b>link</b> o 
<b>Etiqueta QR</b> que nosotros te brindaremos para poder colocar en tu comercio, 
vidriera, mesa o en donde quieras mostrar tu menú o catálogo de productos o servicios.
 <b>Digitalizá tus productos hoy</b> reduciendo los tiempo de decisión del cliente 
 cerrando MAS VENTAS en MENOS TIEMPO!!
  </p>

<MiniHero/>
 