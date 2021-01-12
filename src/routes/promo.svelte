<script>
	import MiniHero from './../components/MiniHero.svelte';
	import Share from './../components/Share.svelte';


</script>


<MiniHero/>
<h3 class="text-xl md:text-4l">No te pierdas nuestras promos...</h3>

<div class="grid grid-cols-1  border-solid border-4  content-center  shadow-lg p-4 mt-10 mb-10 ">
    <h4 class="text-lg md:text-xl">Comentá + like y anotate para el sorteo de una picada para vos y tus amigos</h4>
    <Share/>

</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-4  content-center border-solid border-4  shadow-lg p-4 mt-10 mb-10">
    <div class="grid justify-center  self-center " >
        <img class="" src="2x1.svg " alt="disc" width="150" height="150">
    </div>
    <div class="grid col-span-2 justify-center  self-center"> HAPPY HOUR DE 18 A 21 HS EN TODAS NUESTRAS CERVEZAS!! </div>
    <div class="grid justify-center  self-center">
        <h5 class="text-xl"> 2 x 1   </h5>
        
    </div>
</div>

