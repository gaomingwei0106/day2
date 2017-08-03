$(function(){
	var swiper=new Swiper('.swiper-container',{
		pagination:'.swiper-pagination'
	})

	var myscroll;
	  function loaded(){
            myscroll=new IScroll("section");

             }
    window.addEventListener("DOMContentLoaded",loaded,false);

})
	