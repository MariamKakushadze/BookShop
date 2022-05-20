    var container =document.createElement('container');
    document.body.appendChild(container);
    container.style.position="flex";
    container.style.width='100%';
    
    var img = document.createElement("img");
    img.src = "../images/cover5.jpg";
    var src=document.getElementById('body');
    container.appendChild(img);
    img.style.width='100%';
    img.style.height='700px';
    
    var buttonM = document.createElement("div");
    buttonM.className= "buttonM";
    container.appendChild(buttonM);
    buttonM.style.position='absolute'

    var buttonMain = document.createElement("a");
    buttonMain.className = "buttonMain";
    buttonMain.textContent = "Go To Library ";
    buttonMain.href='#book'
    buttonM.appendChild(buttonMain);
    buttonMain.style.color='white';
    buttonMain.style.border='3px solid #ffdead';
    buttonMain.style.borderRadius='50px';
    buttonMain.style.fontSize='32px';

    
              
    var h2=document.createElement('H2');
    var txt2=document.createTextNode('Library');
    h2.appendChild(txt2);
    document.body.appendChild(h2);
    h2.style.padding='50px 250px 50px 0px';
    h2.style.fontSize='40px';
    h2.style.color='#008b8b';
    h2.style.textAlign='center'

    fetch("books.json") 
    .then(response => {
        if(!response.ok){
        throw Error('ERROR');
        }
    return response.json();
    })
    .then(data => {
        var info =data;
        info.map((arr) => {

                var card = document.createElement("section");
                var carddiv = document.createElement("div");
                carddiv.classList = "div";
                card.appendChild(carddiv);
                document.getElementsByTagName("body")[0].appendChild(carddiv);
                card.style.display ='flex'
                carddiv.style.float='left'
                carddiv.style.width='50%'
                carddiv.style.display='flex'
                carddiv.style.border='3px solid #008b8b';
                carddiv.style.borderRadius='20px';
                carddiv.style.width='500px'
                carddiv.style.height='320px'
                carddiv.style.padding= '20px'
                carddiv.style.margin='20px'

                var div = document.createElement("div");
                div.id = "book";
                div.className = "book";
                carddiv.appendChild(div);
                var bookimg = document.createElement("div");
                bookimg.className = "bookimg";
                div.appendChild(bookimg);
                bookimg.style.width='250px'
                

                var img = document.createElement("img");
                img.className = "img";
                img.src = `${arr.imageLink}`;
                bookimg.appendChild(img);
                img.style.width='240px'
                img.style.height='280px'
         
                var textarea = document.createElement("div");
                textarea.className = "textarea";
                carddiv.appendChild(textarea);
                textarea.style.flexDirection = 'column'
                textarea.style.width='250px'
                textarea.style.display='flex'
                textarea.style.alignItems='center'
                textarea.style.textAlign='center'

                var title = document.createElement("h2");
                title.className = "title";
                textarea.appendChild(title);
                title.innerHTML = `${arr.title}`;
                title.style.color ='#000'

                var h3 = document.createElement("h3");
                h3.className = "h3";
                textarea.appendChild(h3);
                h3.innerHTML = `${arr.author}`;
                h3.style.color ='#008b8b'
                var h4 = document.createElement("h3");
                h4.className = "h3";
                h4.id = "h3";
                textarea.appendChild(h4);
                h4.innerHTML = ` ${arr.price}` + "$";
                h4.style.color ='#000';
                
                var button = document.createElement("section");
                button.className= "button";
                textarea.appendChild(button);
                button.style.paddingTop='30px';
                
                var button1 = document.createElement("button");
                button1.className = "button1";
                button1.textContent = "Show More ";
                button.appendChild(button1);
                button1.style.marginRight='10px';
                button1.style.border="3px solid #008b8b";
                button1.style.borderRadius = '50px';
                button1.style.backgroundColor='#FFF';
                button1.style.fontSize='15px';
                
                
                var button2 = document.createElement("button");
                button2.className = "button2";
                button2.textContent = "Add To Cart";
                button.appendChild(button2);    
                button2.style.border="3px solid #008b8b";
                button2.style.borderRadius = '50px';
                button2.style.backgroundColor='#FFF';
                button2.style.fontSize='15px'              
            
                var modal = document.createElement("div");
                modal.className = "modal";
                modal.style.display='none';
                modal.style.position='fixed';
                document.getElementsByTagName("body")[0].appendChild(modal);
    
                var modalContent = document.createElement("div");
                modalContent.className = "modal-content";
                modal.appendChild(modalContent);
    
                var modalheader = document.createElement("p");
                modalheader.className = "modalHeader";
                modalheader.innerHTML = `${arr.author}`
                modalContent.appendChild(modalheader);
    
                var modalBody = document.createElement("p");
                modalBody.className="modalBody";
                modalBody.innerHTML = `${arr.description}`
                modalContent.appendChild(modalBody);
    
                var close = document.createElement("span");
                close.className = "close";
                close.textContent= "close"
                modalContent.appendChild(close);
           
             // When the user clicks the button, open the modal            
                button1.onclick = function(){
                    modal.style.display = "block";
                }
                close.onclick = function(){
                    modal.style.display = "none";
                }
                        
            })
           
        });

        var orderSection = document.createElement('div');
        orderSection.className='order-section';
        orderSection.textContent=""
        container.appendChild(orderSection);

        var order =document.createElement('div');
        order.className='order';
        orderSection.appendChild(order);

        var item = document.createElement('div');
        item.className='item';
        item.textContent="Add here:";
        order.appendChild(item);

        var total =document.createElement('div');
        total.className='sum';
        total.textContent="Total price:";
        order.appendChild(total);
            
        var orderbtn = document.createElement("a");
        orderbtn.className = "orderbtn";
        orderbtn.textContent = "Order";
        orderbtn.href='../Order Form/index.html'
        order.appendChild(orderbtn);  
           
