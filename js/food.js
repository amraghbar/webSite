 let prod={
    "Cold Drinks":[
        {
            "id":1,
            "name":"cola",
            "price":"10",
            "img":""
        },
        {
            "id":2,
            "name":"Orange Juice",
            "price":"10",
            "img":""
        },
        {
            "id":3,
            "name":"Strbery",
            "price":"10",
            "img":""
        }
            ],
            "Burgers":[
                {
                    "id":1,
                    "name":"cola",
                    "price":"10",
                    "img":""
                },
                {
                    "id":2,
                    "name":"Orange Juice",
                    "price":"10",
                    "img":""
                },
                {
                    "id":3,
                    "name":"Strbery",
                    "price":"10",
                    "img":""
                }
            ],
            "Pizza":[
                {
                    "id":1,
                    "name":"cola",
                    "price":"10",
                    "img":""
                },
                {
                    "id":2,
                    "name":"Orange Juice",
                    "price":"10",
                    "img":""
                },
                {
                    "id":3,
                    "name":"Strbery",
                    "price":"10",
                    "img":""
                }
            ],
            "Wok":[
                {
                    "id":1,
                    "name":"cola",
                    "price":"10",
                    "img":""
                },
                {
                    "id":2,
                    "name":"Orange Juice",
                    "price":"10",
                    "img":""
                },
                {
                    "id":3,
                    "name":"Strbery",
                    "price":"10",
                    "img":""
                }
            ],
            "Dessert":[
                {
                    "id":1,
                    "name":"cola",
                    "price":"10",
                    "img":""
                },
                {
                    "id":2,
                    "name":"Orange Juice",
                    "price":"10",
                    "img":""
                },
                {
                    "id":3,
                    "name":"Strbery",
                    "price":"10",
                    "img":""
                }
            ],
            "Pasta":[
                {
                    "id":1,
                    "name":"cola",
                    "price":"10",
                    "img":""
                },
                {
                    "id":2,
                    "name":"Orange Juice",
                    "price":"10",
                    "img":""
                },
                {
                    "id":3,
                    "name":"Strbery",
                    "price":"10",
                    "img":""
                }
            ]
        
}
let conDiv =document.querySelector("#catsa");
 for (const key in prod) {
     conDiv.innerHTML+=`<h3 onclick="showpro('${key}')">${key}</h3>`;
 }
  function showpro(key){
    console.log(prod[key]);
 }//forin
 //prod['burgrt]