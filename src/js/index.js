
async function getMealInstructions(meal)
{
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`,{ method:'GET'});
    response = await response.json();
    if(response.meals)
    {
      displayMealInstructions(response.meals)
    }else{displayMealInstructions([])}
    
}
  //meals
async function getMainIngredientMeals(ingredient)
{
let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,{ method:'GET'});
response = await response.json();
if(response.meals)
{
  displayIngredientsMeals(response.meals)
}else{displayIngredientsMeals([])}

}
function displayIngredientsMeals(arr)
{  document.getElementById('rowData').innerHTML = '';
let cartoona = "";

for (let i = 0; i < arr.length; i++) {
   
   
    cartoona += ` <div class="relative  w-[22%]" onclick='getMealInstructions("${arr[i].strMeal}")' >
    <img src="${arr[i].strMealThumb}" alt="meal image" class="rounded-lg peer w-full cursor-pointer">
    <div class="absolute top-0 bottom-0  right-0 left-0 flex flex-col items-center justify-center peer-hover:bg-opacity-60 peer-hover:bg-slate-50 transition duration-700 transform translate-y-full peer-hover:translate-y-0">
      <h2 class="text-black text-lg font-bold text-center">${arr[i].strMeal}</h2> 
      </div>
    </div>
    `


}

document.getElementById('rowData').innerHTML = cartoona

}
function displayMealInstructions(arr)
{  document.getElementById('rowData').innerHTML = '';
let cartoona = "";
for (let i = 0; i < arr.length; i++) {
   
 cartoona += ` <div class=" flex flex-row justify-center items-center gap-3 ">
<div class="w-[1/3]">
    <img src="${arr[i].strMealThumb}" alt="" class="w-[1/3]">
    <h2 class="text-white fw-bold text-2xl text-center">${arr[i].strMeal}</h2>
</div>
<div class="w-10/12 flex flex-col justify-start items-start ">
    <h2 class="text-white fw-bold text-3xl text-center">Instructions</h2>
    <p class="text-white  text-left">${arr[i].strInstructions}</p>
    <h2 class="text-white  text-center ">Area : ${arr[i].strArea}</h2>
    <h2 class="text-white text-center">Category  : ${arr[i].strCategory}</h2>
    <h2 class="text-white  text-center mb-5">Recipes :</h2>
    <div class="mb-10 flex flex-wrap flex-row gap-3">
    <span class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg">${arr[i].strMeasure1}${arr[i].strIngredient1}</span>
    <span class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg">${arr[i].strMeasure2}${arr[i].strIngredient2}</span>
    <span class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg">${arr[i].strMeasure3}${arr[i].strIngredient3}</span>
    <span class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg">${arr[i].strMeasure4}${arr[i].strIngredient4}</span>
    <span class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg">${arr[i].strMeasure5}${arr[i].strIngredient5}</span>
    <span class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg">${arr[i].strMeasure6}${arr[i].strIngredient6}</span>
    <span class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg">${arr[i].strMeasure7}${arr[i].strIngredient7}</span>

    
    
    </div>
    
    <h2 class="text-white  text-center mb-3">Tags :</h2>
    <span class="border border-red-600 text-red-800 p-2 bg-red-300 rounded-lg mb-5">chicken</span>
    <div class="mt-13">
        <button class="border border-lime-600 text-green-800 p-2 bg-lime-300 rounded-lg" onclick='window.open("${arr[i].strSource}", "_blank")'>Source</button>
        <button class="border border-red-600 text-red-800 p-2 bg-red-300 rounded-lg" onclick='window.open("${arr[i].strYoutube}", "_blank")'>Youtube</button>
    </div>
   
</div>

  
 </div>`;
}
 document.getElementById('rowData').innerHTML = cartoona
}


$(function () {

    $('#loading').fadeOut(2000 ,function(){
        getFirstPage()
        $("body").css("overflow", "visible")
       
    })
    
    let mealName=document.querySelector('#searchName')
    let mealFirstLetter=document.querySelector('#searchLetter')
    let mealContainer=[];
    let mealsObject;
    $('#toggleBtn').click(function(){
        let sideWidth = $('.side-inner').innerWidth();
        
        if($('#black-sideNav').css('left')=='0px')
        {
           
            $('#black-sideNav').animate({left:-sideWidth},200)
            let delay = 200; 

            $('#link-list li').each(function(index) {
              var listItem = $(this);
              listItem.animate({
                opacity: 0,
                top: 0
              }, delay * index);
            });
            $('#white-sideNav').animate({left:'-84%'},200)
        }else{
            $('#black-sideNav').animate({left:'0px'},200)
            $('#icon1').addClass('hidden');
            $('#icon').removeClass('hidden');
            let delay = 200; 

            $('#link-list li').each(function(index) {
              var listItem = $(this);
              listItem.animate({
                opacity: 1,
                top: 1
              }, delay * index);
            });
            $('#white-sideNav').animate({left:'0px'},200)
       
    }
        $('#crossBtn').click(function(){
           
            if($('#black-sideNav').css('left')=='0px')
        {
            $('#black-sideNav').animate({left:-sideWidth},200)
            $('#icon').addClass('hidden');
            $('#icon1').removeClass('hidden');
            let delay = 200; 

            $('#link-list li').each(function(index) {
              var listItem = $(this);
              listItem.animate({
                opacity: 0,
                top: 0
              }, delay * index);
            });
            $('#white-sideNav').animate({left:'-84%'},200)
        }
        else{
            $('#black-sideNav').animate({left:'0px'},200)
            $('#icon1').removeClass('hidden');
            $('#icon').addClass('hidden');
            let delay = 200; 

            $('#link-list li').each(function(index) {
              let listItem = $(this);
              listItem.animate({
                opacity: 1,
                top: 1
              }, delay * index);
            });
            $('#white-sideNav').animate({left:'0px'},200)
       
        }
        })
    
    }) ;
    
    // food API


    //firstpage meals
    
    async function getFirstPage()
    {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`,{ method:'GET'});
        response = await response.json();
        //mealContainer.push(mealData);
        //mealsObject= mealData;
       // console.log(mealFirstLetter.value.charAt(0))
        //letter == "" ? letter = "a" : "";
        response.meals ? display(response.meals) : display([])
        //mealContainer.push(mealsObject)
        //console.log(mealsObject.length);
    }
    

 function display (arr)
 {  
    let cartoona = "";
    
    for (let i = 0; i < arr.length; i++) {
       
       
        cartoona += ` <div class="relative  md:w-[22%] sm:w-full"  onclick='getMealInstructions("${arr[i].strMeal}")'>
        <img src="${arr[i].strMealThumb}" alt="meal image" class="rounded-lg peer w-full cursor-pointer">
        <div class="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center peer-hover:bg-opacity-60 peer-hover:bg-slate-50 transition duration-700 transform translate-y-full peer-hover:translate-y-0">
            <span class="text-black text-lg font-bold">${arr[i].strMeal}</span>
          </div>
        </div>
        `
    
    }
    $("#loading").fadeOut(300)
    document.getElementById('rowData').innerHTML = cartoona

 }
    

 
});
