// loader

document.querySelector('.box').style.display='none';

// preloader
var loaders;
function loader(){
    loaders=setTimeout(showPage,1000)
}
function showPage(){
    document.querySelector('.loading').style.display='none';
    document.querySelector('.box').style.display='block';

   
}







const getSearch = async () => {

   var searchValue=document.querySelector('.search').value;
   document.querySelector('.loading').style.display='block';
   const response = await fetch(`http://api.themoviedb.org/3/search/movie?api_key=23d3e5b3f085a72f85a21217806d544d&query=${searchValue}`)
   
     const values=await response.json();

      document.querySelector('.loading').style.display='none';
    
      if(values.total_pages == "0"){
        document.querySelector('.bodyContainer').innerHTML= `
        <div class='container'>
        <div class=" row shadow-lg p-3 mb-5 bgBreak rounded">

        <p class='text-light text-center' > Movie not found 
        <img src='tenor.gif' class='image2'>
        </p>
        </div>
        </div>
        
        `   
      }
      else{
     
        let output1=values.results
      let html=' ';
  
      for(   var i=0; i<output1.length; i++){
  
       let output2=output1[i].id
    
       const responses= await  fetch(`https://api.themoviedb.org/3/movie/${output2}?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US`)
        const value = await responses.json();
       
      
            let output3=value.poster_path;
            let output4=value.original_title;
            let output5=value.overview;
            let output6=value.homepage
            let output7=value.vote_average;
            let output8=value.release_date;
            let output9=value.genres[0].name;
            let output10=value.genres[1].name;
            let output13=value.spoken_languages[0].name
            let output14=value.runtime;
            let output15=value.tagline;
         
            
          
           html +=`
         
           <div class=" row shadow-lg p-3 mb-5 bgBreak rounded">
        
          
           <div class="col-md-4">
     
           <img src='https://images.tmdb.org/t/p/original${output3}' class="card-img image1" alt="...">
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title"><b>${output4}</b></h5>
             <span class="badge badge-pill badgeBreak">${output9}</span>
             <span class="badge badge-pill badgeBreak">${output10}</span>
       <p class="card-text">About: ${output5} </p>
       <em> ' ${output15}   '</em>
        
          <p class="card-text"> Language: ${output13} </p>
          <i class='card-text'>${output14} Mins</i>
           
             <p class="card-text">  <button type="button" class="p-2 btnBreak">
  Ratings <span class="badge badge-light">${output7}</span>
  <span class="sr-only">ratings</span>
</button>
</p>
<p class="card-text muted">  
Released -${output8}
</p>
           </div>
           <button  type="button" class='viewMore  btnBreak' ><a href='${output6}' target='_blank' style='text-decoration:none; color:white;'> VIEW </a> </button>

         </div>
    


           
           </div>

`



       
           
           

      //insert list items in div
      document.querySelector('.bodyContainer').innerHTML=html;       
   

      }
  
    
   

  }
 
 


  

}



document.querySelector('#searchBtn').addEventListener('click', getSearch)


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

   //search for trending movie
   const getTrending = async ()=> {

   const response= await  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=23d3e5b3f085a72f85a21217806d544d`)

   const data = await response.json();

   let output1=data.results
   let html=' ';

         for(let i=0 ; i<4 ;  i++){
           let output2=output1[i].poster_path;
           let output5=output1[i].vote_average;
           let output6=output1[i].media_type
           let output7=output1[i].overview;
           let output8=output1[i].title;
           if(output8 == undefined){
              output8 = output1[i].original_name
              
           }
     
            html +=`

   
   <div class="cardBreak card ">
   <img src="https://images.tmdb.org/t/p/original${output2}" class="card-img-top image1" alt="...">
   <div class="card-body">
     <h5 class="card-title text-center"><b> ${output8} </b></h5>
     <p class="card-text">              ${output7}</p>
   </div>
   <div class="card-footer">
   <button class='p-2 m-2 btnBreak'> Rating: ${output5}</button>
   <button class='p-2  m-2 btnBreak'>Media: ${output6}</button>
   </div>
 </div>



   `

            
          
            
            
             //insert list items in div
         document.querySelector('.trendings').innerHTML=html;  
            
         }
    
}
getTrending()


const getPopular = async ()=> {

   const response= await  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`)

   const data = await response.json();

   let output1=data.results
   let html=' ';

         for(let i=0 ; i<4 ;  i++){
           let output2=output1[i].poster_path;
           let output5=output1[i].vote_average;
           let output6=output1[i].title;
           let output7=output1[i].overview ;
           let output8=output1[i].vote_count;        
            html +=`
                 
   <div class=" cardBreak card ">
   <img src="https://images.tmdb.org/t/p/original${output2}" class="card-img-top image1" alt="...">
   <div class="card-body">
     <h5 class="card-title text-center"><b>${output6} </b></h5>
     <p class="card-text">              ${output7}</p>
   </div>
   <div class="card-footer">
   <button class='p-2 m-2 btnBreak'> Rating: ${output5}</button>
   <button class='p-2 m-2 btnBreak'> Votes: ${output8}</button>
   </div>
 </div>

            `

            
          
            
            
             //insert list items in div
         document.querySelector('.populars').innerHTML=html;  
            
         }
    
}

getPopular()


const getRated = async ()=> {

   const response= await  
   fetch(`https://api.themoviedb.org/3/discover/movie?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US&certification_country=US&certification=R&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`)

   const data = await response.json();

   let output1=data.results
   let html=' ';

         for(let i=0 ; i<4 ;  i++){
            let output8=output1[i].title
           let output2=output1[i].poster_path;
           let output5=output1[i].release_date;
           let output7=output1[i].overview
            html +=`
                 
   <div class=" cardBreak card ">
   <img src="https://images.tmdb.org/t/p/original${output2}" class="card-img-top image1" alt="...">
   <div class="card-body">
     <h5 class="card-title text-center"><b>${output8} </b></h5>
     <p class="card-text">              ${output7}</p>
   </div>
   <div class="card-footer">

   <button class='p-2 btnBreak'> released: ${output5}</button>
   </div>
 </div>

            `

            
          
            
            
             //insert list items in div
         document.querySelector('.rateds').innerHTML=html;  
            
         }
    
}



getRated()


