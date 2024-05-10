
let slides = document.querySelectorAll('.slide')
let btns = document.querySelectorAll('.btn')
let MinType = document.querySelectorAll('.Min-type')
let Button = document.querySelectorAll('.Headings-btn')
console.log(MinType)

let currentslide = 1;
let ActiveUnderline = 1; 

var Auto = function(Automatic){ 
    MinType.forEach((change)=>{
        change.classList.remove('Underline')
        Button.forEach((btn)=>{
            btn.classList.remove('Underline')
        })
 
    })
    MinType[Automatic].classList.add('Underline')
    button[Automatic].classList.add('Underline')
}
Button.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        Auto(i)
        ActiveUnderline = i     
        console.log("checkere")
    })
})

var manualNav = function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
 
        btns.forEach((btn)=>{  
        btn.classList.remove('active')  
          
    });  
            
    slides[manual].classList.add('active') 
    btns[manual].classList.add('active')   
              
        
    })  
    
    
}
btns.forEach((btn,i)=>{ 
   btn.addEventListener('click',function(){
    console.log(slides)
    manualNav(i); 
    currentSlide = i; 
     
});    
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active')
   
    let i = 1;  

    var repeater = ()=>{
        setTimeout(function(){
           [...active].forEach((activeSlide)=>{
            activeSlide.classList.remove('active') 
           })
            slides[i].classList.add('active')
            btns[i].classList.add('active') 
            console.log("check")          
            i++ 
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return
                 
            }  
            repeater()        
        },8000)  
            
        }
        
        repeater()   
    }
 
    
    const Shop =[
        {image:"tshirt1.jpg",
        Title:"Plain T shirt",
        Type:"Shirt",
        Price:"4.00",
        Price2:4,
        discount:"6.00" 
    },
         
        {image:"pant1.jpg",
        Title:"Slim Fit Pant",
        Type:"Pant",
        Price:"5.06",
        Price2:5, 
        discount:"7.05"
    },
         
        {image:"hoodie1.jpg",
        Title:"Basic Hoddie",
        Type:"Hoodie",
        Price:"4.08",
        Price2:3540,
        discount:"6.09"
    },
         
        {image:"tshirt2.jpg",
        Title:"T shirt",  
        Type:"Shirt",
        Price:"4.05",
        Price2:1020,
        discount:"6.02"
    },
         
        {image:"jacket1.jpg",
        Title:"Deneim Jacket",
        Type:"Jacket",
        Price:"6.05",
        Price2:3299,
        discount:"9.05"
    },
        /*Shop*/
        {image:"shoes1.jpg",
        Title:"Flat Shoes",
        Type:"Shoes",
        Price:"50.06",
        Price2:4299,  
        discount:"52.08"
    }
    
    
    ]
    
    const categories = [...new Set(Shop.map((items)=>{
        return items
    }))]     
    let b = 0   
    
    let Slideshop = document.getElementById('col-lg-7').innerHTML = categories.map((items)=>{
        var {image,Title,Type,Price,Price2,discount} = items
    
        return(  
            `         
            
            <div class="outfit">   
            <div class="overflow">  
            <div class="outfit-img"style="background:url(${image})"></div>
            <div class="cart-option">
            <div class="cart">   
            <div class="add-cart">`+
            "<i  onclick='addCart1("+(b++)+")' class='fa-solid fa-cart-shopping'></i>"+
            `  
            </div>   
            <a  href=""><span>+</span> Quick View</a> 
            <div class="share">
            <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a> 
            </div>
            </div> 
            </div> 
            </div>
            <p class ="heading">${Type}</p>
            <h3 class="Title">${Title}</h3>
            <p class="Price">$${Price} <span> $${discount}</span></p>
            
            </div>   
            </div>
            </div>
            </div>
            <div class="count"</div> 
    
            
           
            `
        
        )
    
    }).join('')  
const Shop2=[  
        {image:"womenHoodie.jpg",
        Title:"Plain Hoodie",
        Type:"Hoodie",  
        Price:"13.05",
        Price2:3200,
        discount:"15.00" 
    },
    {image:"womenSTshirt.jpg",
    Title:"Full Selves",
    Type:"Shirt",
    Price:"10.06",
    Price2:3400, 
    discount:"14.09" 
    },
    {image:"womenshirt1.jpg",
    Title:"Dress shirt",
    Type:"Shirt",  
    Price:"16.05",
    Price2:5400, 
    discount:"19.50" 
    }, 
    {image:"trendyWomen1.jpg", 
    Title:"Women Dress",
    Type:"Dress",
    Price:"28.20",
    Price2:8450,
    discount:"30.05" 
    },
    {image:"tshirt3.jpg", 
    Title:"Basic T shirt",
    Type:"Shirt",
    Price:"5.05",
    Price2:1140,  
    discount:"7.20" 
    },
    {image:"trendyWomen2.jpg",
    Title:"Fenzy Dress",
    Type:"Shirt", 
    Price:"44.40",
    Price2:16400,
    discount:"28.00" 
    }   
] 
const categoriess = [...new Set(Shop2.map((items)=>{ 
    return items
}))]
let a = 0;    

document.getElementById('col-lg-6').innerHTML = categoriess.map((items)=>{
    var {image,Title,Type,Price,discount,Price2} = items 
    return(  
        `         
        <div class="outfit">   
        <div class="overflow">  
        <div class="outfit-img"style="background:url(${image})"></div>
        <div class="cart-option">
        <div class="cart">     
        <div class="add-cart">`+
        "<i  onclick='addCart2("+(a++)+")' class='fa-solid fa-cart-shopping'></i>"+
        ` 
        </div>     
           <a  href=""><span>+</span> Quick View</a>
               <div class="share">
               <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a> 
               </div>
           </div> 
        </div> 
        </div>
        <p class ="heading">${Type}</p>
        <h3 class="Title">${Title}</h3>
        <p class="Price">$${Price} <span> $${discount}</span></p>
        </div>  
        </div> 
        </div>
        </div>
         
  
        `
    ) 

}).join('')     
const shop3 = [
    {image:"jacket1S2.jpg" , 
    Title:"Jacket", 
    Price:"2400",
    Price2:35.06
},
{image:"jacket2S2.jpg",
Title:"Jacket",
Price:"2400",
Price2:28.08
} ,
{image:"jacket3S2.jpg", 
Title:"Jacket",
Price:"2400",
Price2:26.02
} ,
{image:"Wjacket1.jpg",
Title:"Women Jacket",
Price:"2400",
Price2:20.56
} ,
{image:"tshirt2S2.jpg",
Title:"Shirt",
Price:"2400",
Price2:6.00
}, 
{image:"tshirt3S2.jpg",
Title:"Women Shirt", 
Price:"2400",
Price2:6.07
}   
]
const Shop3 = [...new Set(shop3.map((items)=>{ 
    return items  
}))]
let c = 0
document.getElementById('col-lg-3').innerHTML = shop3.map((items)=>{
    var {image,Price,Price2,Title,discount} = items 
    return(
        ` 
        <div class="outfit">   
        <div class="overflow">   
        <div class="outfit-img" style="background:url(${image})"></div>
        <div class="cart-option">
        <div class="cart">   
        <div class="add-cart">`+   
        "<i  onclick='addCart3("+(c++)+")' class='fa-solid fa-cart-shopping'></i>"+
        `  
        </div>     
           <a  href=""><span>+</span> Quick View</a>
               <div class="share">
               <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a> 
               </div>
           </div> 
        </div> 
        </div>
        <h1 class="Title">${Title}</h1>
        <p class="Price">$${Price2} <span> 420</span></p> 
        </div>     
     
        
        `  
    
    ) 
}).join('') 
var cart = []     

function addCart1(a){              
    cart.push({...categories[a] })   
    displaycart()     
    
    console.log(cart)
     
      
} 
function addCart2(a){              
    cart.push({...categoriess[a] })   
    displaycart()        
      
    console.log(cart)
} 
function addCart3(a){              
    cart.push({...Shop3[a] })   
    displaycart()   
         
    console.log(cart)
        
}     
function Splice(a){  
   cart.splice(a,1)
    displaycart()  
    console.log(cart)  
     
     
}


// function increment(){
//     let Price = cart[1].Price2
//     Price + Price
//     console.log(Price)

// }

function displaycart(){   
    total = 0 
    let j = 0
    
    document.getElementById('cart-count').innerHTML = cart.length  
    if(cart == 0){   
        document.getElementById("total-money").innerHTML = "$" +0+""; 
        
       document.getElementById('empty').textContent = "Your cart is empty"  
     
    }      
    else{    
            
    //  document.getElementById('empty').style.display = "none" 
        document.querySelector('#cart-overflow').innerHTML = cart.map((items) =>
            {   
            
                    
            var {image,Title,Price,Price2} = items;      
            
           total=total+Price2 
           
           document.getElementById("total-money").innerHTML = "$"+total+".00"
       
          document.getElementById('cart-count').style.transform = "scale(1.4 )"
         setTimeout(() => {
            document.getElementById('cart-count').style.transform = "scale(1)"
         }, 1000);
           window.scrollTo(0,0)      
            return(            
 
                ` <div id="add-cart">         
                <img class="cart-img" src="${image}"alt=""width="70">
                <div class="details">  
                    <p id="Price">${Price2}, <span>X1</span></p>
                    <h2 id="Title">${Title}</h2>`+
                    "<i id='font-trash' class='fa-solid fa-xmark'onclick='Splice("+(j++)+")'></i> </div> </div>"
                    
                    
        )}).join('')
 
    
    }
}
displaycart()
let cartEnable = document.getElementById("cart-container")
let shopvalue = document.querySelector("#cart-overflow") 
let checkCart=0
function ShowCart(){
    if(checkCart == 0){
        cartEnable.style.display = "none"
        checkCart = 1
    }else{
        checkCart = 0
        cartEnable.style.display = "block"
    }
} 

 
/**End */
 
let ShowCloth = document.getElementById("Cloth")   
let ShowCloth2 = document.getElementById("Cloth2")   

let showTshirt = document.querySelectorAll("#Tshirt")
let showTshirt2 = document.querySelectorAll("#Tshirt2") 
let showShoes = document.querySelector("#Shoes")
let showShoes2 = document.querySelector("#Shoes2")
let outfit = document.querySelectorAll(".outfit")

let ShowMen = document.getElementById("Men")
let ShowWomen = document.getElementById("Women")
let ShowFashion = document.getElementById("Fashion")
  
check = 0  
check2 = 0 
check3 = 0 

/*Shop 1 Different Content on Click* */

ShowMen.addEventListener('click',function(){
    outfit[12].style.display = "block" 
    outfit[13].style.display = "block" 
    outfit[14].style.display = "block" 
    outfit[16].style.display = "block" 
    outfit[15].style.display = "none"  
    outfit[17].style.display = "none" 
    console.log("check")
   
})
ShowWomen.addEventListener('click',function(){
       outfit[12].style.display = "none" 
    outfit[13].style.display = "none" 
    outfit[14].style.display = "none" 
    outfit[16].style.display = "none" 
   
})
ShowFashion.addEventListener('click',function(){
    outfit[12].style.display = "block" 
    outfit[13].style.display = "block" 
    outfit[14].style.display = "block" 
    outfit[15].style.display = "block" 
    outfit[16].style.display = "block" 
    outfit[17].style.display = "block"  
   
})
ShowCloth.addEventListener('click',(e,index)=>{
    console.log("Show All")  
   
    outfit[0].style.display = "none"
    outfit[1].style.display = "block" 
    outfit[2].style.display = "block"  
    outfit[3].style.display = "block"
    outfit[4].style.display = "block"
    outfit[5].style.display = "block"

    
    
          
})
// console.log(outfit[5].textContent) 
showTshirt.forEach((e)=>{
    e.addEventListener('click',()=>{

        if(check == 0){
            outfit[1].style.display = "none" 
            outfit[2].style.display = "none"
            outfit[4].style.display = "none"
            outfit[5].style.display = "none"
            check = 1
        }else{
            check = 0
            outfit[0].style.display = "block" 
            // outfit[2].style.display = "block" 
            outfit[3].style.display = "block" 
            // outfit[4].style.display = "block"
            // outfit[5].style.display = "block" 
    
        }
    
    })
    }) 
    /*End*Shop1 */

    /*Shop 2 Different Content on Click* */
    ShowCloth2.addEventListener('click',(e,index)=>{
        
        outfit[6].style.display = "block" 
        outfit[7].style.display = "block"   
        outfit[8].style.display = "block"
        outfit[9].style.display = "block" 
        outfit[10].style.display = "block"
        outfit[11].style.display = "block"
       
    })

    showTshirt2.forEach((e)=>{ 
        e.addEventListener('click',()=>{
            
            if(check3 == 0){
                outfit[6].style.display = "none"
                // outfit[9].style.display = "none" 
                // outfit[11].style.display = "none "
                console.log(outfit[8].textContent)
                check3 = 1 
            }else{  
                check3 = 0
                outfit[6].style.display = "block" 
                outfit[7].style.display = "block"   
                outfit[8].style.display = "block"
                outfit[9].style.display = "block" 
                outfit[10].style.display = "block"
                outfit[11].style.display = "block" 
        
            }
        
        })
        }) 
        showShoes2.addEventListener('click',()=>{
           
                outfit[6].style.display = "none"  
                outfit[7].style.display = "none"   
                outfit[8].style.display = "none"
                outfit[9].style.display = "none" 
                outfit[10].style.display = "none"
                outfit[11].style.display = "none" 
               
            
        })  
        showShoes.addEventListener('click',()=>{
            
            if(check == 0){
                outfit[0].style.display = "none" 
                outfit[1].style.display = "none"
                outfit[2].style.display = "none" 
                outfit[3].style.display = "none"
                outfit[4].style.display = "none" 
                check = 1
            }else{
                check = 0
                outfit[5].style.display = "block" 
        
            } 
        })

 
CheckNavi=0
document.getElementById("fa-magnifying-glass").addEventListener('click',()=>{
    if(CheckNavi==0){
        document.getElementById("fa-user").style.display = "none"
        document.getElementById("fa-cart-shopping").style.display = "none"
        document.getElementById("cart-count").style.display = "none"
        document.getElementById('Logo').style.display = "none"
        document.getElementById('Navbar-input').style.display = "block"
        document.getElementById('fa-magnifying-glass').style.position = "absolute"
        CheckNavi = 1 
    }else{    
        CheckNavi = 0
        location.reload()
        // document.getElementById("fa-user").style.display = "flow-root"
        // document.getElementById("fa-cart-shopping").style.display = "flow-root"
        // document.getElementById("cart-count").style.display = "flow-root"
        // document.getElementById('Logo').style.display = "flow-root"
        // document.getElementById('Navbar-input').style.display = "none"
        // document.getElementById('fa-magnifying-glass').style.position = "Static"
        
    }
    console.log("checker")
}) 
        /*End Shop2* */
       
// showTshirt.addEventListener('click',()=>{  
//     console.log("check") 
//     if(check == 0){
//         outfit[1].style.display = "none" 
//         outfit[2].style.display = "none"
//         outfit[3].style.display = "none" 
//         outfit[4].style.display = "none"
//         outfit[5].style.display = "none" 
//         check = 1
//     }else{
//         check = 0
//         outfit[1].style.display = "block" 
//         outfit[2].style.display = "block" 
//         outfit[3].style.display = "block" 
//         outfit[4].style.display = "block"
//         outfit[5].style.display = "block" 

//     }

// })



// let ShopBtn = document.querySelectorAll(".s-btn") 
// let ShopBtn2 = document.querySelectorAll(".s-btn2")  
// shop Slider
// let ShopSlides = document.querySelectorAll('#col-lg-7')  
// let ShopSlides2 = document.querySelectorAll('#col-lg-6')        

// let currentslides = 1;    
// let currentslides2 = 1;    
   
// var Manaul = function Slides(slides){   
    // ShopSlides2.forEach((slide)=>{   
    //     slide.classList.remove('active2') 
    // ShopSlides.forEach((slide)=>{   
    // slide.classList.remove('active2') 

    // ShopBtn.forEach((btn)=>{    
    //     btn.classList.remove('active2')       
    // });
    // ShopBtn2.forEach((btn)=>{    
    //     btn.classList.remove('active2')        
    // });
// }) 
// })
// ShopBtn[slides].classList.add('active2')  
// ShopSlides[slides].classList.add('active2')       
// ShopBtn2[slides].classList.add('active2')  
// ShopSlides2[slides].classList.add('active2')       

// }
// ShopBtn.forEach((btn,i)=>{
//     btn.addEventListener('click',function(){
//         Manaul(i) 
//         currentSlides = i
// });
// });  
// ShopBtn2.forEach((btn,i)=>{
//     btn.addEventListener('click',function(){
//         Manaul(i) 
//         currentSlides2 = i  
// }); 
// }); 

let clickslide = document.querySelector('#col-lg-7') 
let clickslide2 = document.querySelector('#col-lg-6') 
let clickslide3 = document.querySelector('#col-lg-3') 
let Images = document.querySelectorAll('.count')  

 
counter = 1
shop2counter = 1  
shop3counter = 1  
 
// clickslide.forEach((slide,index)=>{
//     slide.style.left = `${index * 305}px` 
    
     
     
// })    

// console.log(length,length) 
const nextSlide = ()=>{
    clickslide.style.transform = `translateX(-${counter * 305}px)`
    counter++
}
const nextSlide2 = ()=>{
    clickslide2.style.transform = `translateX(-${shop2counter * 305}px)`
    shop2counter++  
} 
const nextSlide3 = ()=>{  
    clickslide3.style.transform = `translateX(-${shop3counter * 305}px)`
    shop3counter++  
}
const prevSlide2 = ()=>{
    clickslide2.style.transform = `translateX(
        -${(shop2counter-2) * 301}px)`; 
        shop2counter--
} 
const prevSlide3 = ()=>{
    clickslide3.style.transform = `translateX(
        -${(shop3counter-2) * 301}px)`; 
        shop3counter--   
} 
const prevSlide = ()=>{ 
        clickslide.style.transform = `translateX(
            -${(counter-2) * 301}px)`; 
        counter--


}
const getLastSlide = ()=>{
    clickslide.style.transform = `translateX
    (-${(counter-1) * 301}px)`; 
    counter == length 
 
}  
const getLastSlide2 = ()=>{
    clickslide2.style.transform = `translateX
    (-${(shop2counter-1) * 301}px)`; 
    shop2counter == length   
 
}  
const getLastSlide3 = ()=>{
    clickslide3.style.transform = `translateX
    (-${(shop3counter-1) * 301}px)`; 
    shop3counter == length    
 
}  
const btnLeft = ()=>{
   counter > 1 ? prevSlide() : getLastSlide()  
  
}
const btnLeft2 = ()=>{
    shop2counter > 1 ? prevSlide2() : getLastSlide2()  
   
 }   
 const btnLeft3 = ()=>{ 
    shop3counter > 1 ? prevSlide3() : getLastSlide3()  
   
 }
const btnRight = ()=>{   
    nextSlide() 
    if(counter == 5){ 
        clickslide.style.transform = `translateX(0px)`  
        counter = 1 
        
    }}
    const btnRight2 = ()=>{    
        nextSlide2()       
        if(shop2counter == 5){
            clickslide2.style.transform = `translateX(0px)` 
            shop2counter = 1
              
        }} 
        const btnRight3 = ()=>{     
            nextSlide3()      
            if(shop3counter == 5){
                clickslide3.style.transform = `translateX(0px)` 
                shop3counter = 1
                
            }} 
const bottom = document.querySelector('.shop-btn')
const bottom2 = document.querySelector('.shop-btn2') 
for(let i=0; i<Images.length; i++){  
    const div = document.createElement('li')
    const div2 = document.createElement('li')
    div.className = 's-btn'    
    div2.className = 's-btn2'    
    bottom.appendChild(div) 
    bottom2.appendChild(div2)      
    // div2.className = 's-btn2'   
    // bottom2.appendChild(div2)   
      
} 
const button = document.querySelectorAll('.s-btn')
const button2 = document.querySelectorAll('.s-btn2')
// const button2 = document.querySelectorAll('.s-btn2')
//shop1 button style width active
button[0].classList.add('active') 

 
//shop 2 button style width active
button2[0].classList.add('active')  
 
const btnTransparent = ()=>{
   button.forEach((btnr)=>{
    btnr.classList.remove('active')

    
   })
  
}
//Shop 2 button Width Remove Code
const btnTransparent2 = ()=>{
    button2.forEach((btnr)=>{
     btnr.classList.remove('active')
      
    })
    
 }
button.forEach((btn,i)=>{
    btn.addEventListener('click',function(){ 
        btnTransparent()  
        clickslide.style.transform = `translateX(-${i*305}px)`
        btn.classList.add('active')  
        console.log('check')
        if(i == 5){
            console.log("Yes")
           i = 0 
            
        }  
    })    
}) 
//Shop 2 Transfrom col-lg-6 Slider-Button
button2.forEach((btn,i)=>{
    btn.addEventListener('click',function(){ 
        btnTransparent2()    
        clickslide2.style.transform = `translateX(-${i*305}px)`
        btn.classList.add('active')   
        console.log('check')
        if(i == 5){   
            console.log("Yes")  
           i = 0 
            
        }   
    })   
}) 
 

    var repeat = function(activeClass){
      
        let i = 1;  
    
        var repeater = ()=>{
            setTimeout(function(){
                nextSlide() 
                if(counter == 5){
                        clickslide.style.transform = `translateX(0px)` 
                         counter = 0
                    }
                    i++ 
                    repeater()          
                },5000)  
            
            }
            
            repeater()   
            
        }
       

const endDate = "26 March 2024 12:000 PM"
let input = document.querySelectorAll('input')
// document.getElementById('endDate').innerHTML = endDate
  

function clock(){
    const end = new Date(endDate)
    const now = new Date() 
    const diff = (end , now) / 1000; 

    input[1].value= Math.floor(diff / 3600 / 60 / 60  / 24 )
    input[2].value = Math.floor(diff / 3600) % 24 
    input[3].value = Math.floor(diff / 60) % 60;
    input [4].value =  Math.floor(diff) % 60; 
   
}  
setInterval(() => {
    clock() 
    
}, 1000);


 



// const slideImage = () =>{ 
//     clickslide.forEach(
//         (slide)=>{   
//             if(counter == 3){
//                 slide.style.transform = `translateY(${counter * 3001}px)`  
//                 console.log("yes ")
//             }
//             slide.style.transform = `translateX(-${counter * 305}px)`  
//             console.log(counter)    
           
//         }       
//     )
// }  
  
// let ShopSlides2 = document.querySelectorAll("#col-lg-6")   
// let ShopBtn2 = document.querySelectorAll(".s-btn") 
// console.log(ShopSlides2 ) 
// let currentslides2 = 1;   

// var Manaul = function Slides(slidess){ 
//     ShopSlides2.forEach((slides)=>{ 
//     slides.classList.remove('active2') 

//     ShopBtn2.forEach((btn)=>{   
//         btn.classList.remove('active2')  
           
//     }); 
//     ShopBtn2[slidess].classList.add('active2') 
//     ShopSlides2[slidess].classList.add('active2')   
// });         
  
// }
// ShopBtn2.forEach((btn,i)=>{
//     btn.addEventListener('click',function(){
//         Manaul(i) 
//         currentSlides2 = i
// }); 
// }); 
/** */ 
