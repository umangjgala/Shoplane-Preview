var productData = [
{
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}
]


function appendChildren() {   
    for (var i = 0; i < productData.length; i++) {

        currentProduct = productData[i];

        // creating the first main big image container 
        var mainImage = document.createElement('div');
        mainImage.classList.add('mainImage');

        // creating image tag inside the image container
        var image = document.createElement('img');
        mainImage.appendChild(image);
        image.classList.add('largeImage');
        image.src = currentProduct.preview;

        //creating content div
        var content = document.createElement('div');
        content.classList.add('content');

        //creating Main Info Div
        var info = document.createElement('div');
        info.classList.add('info');
        content.appendChild(info);

        //h1 tag
        var h1 = document.createElement('h1');
        info.appendChild(h1);
        h1.innerText = currentProduct.name;

        //h4 tag
        var h4 = document.createElement('h4');
        info.appendChild(h4);
        h4.innerText = currentProduct.brand;

        //h3 tag
        var h3 = document.createElement('h3');
        info.appendChild(h3);
        h3.innerText = "Price : Rs ";

        //SPAN TAG IN h3
        var span = document.createElement('span');
        h3.appendChild(span);
        span.innerText = currentProduct.price;

        //h3 tag
        var h3 = document.createElement('h3');
        info.appendChild(h3);
        h3.innerText = "Description";

        //p tag
        var p = document.createElement('p');
        info.appendChild(p);
        p.innerText = currentProduct.description;

        //h3 tag
        var h3 = document.createElement('h3');
        info.appendChild(h3);
        h3.innerText = "Product Preview"

        //creating image row
        var rowImage = document.createElement('div');
        rowImage.classList.add('rowImage');
        content.appendChild(rowImage);

        
        //image tag in rowImage
        for(var j=0; j<currentProduct.photos.length ;j++){
            var imgTag = document.createElement('img');
            rowImage.appendChild(imgTag);
            imgTag.src = currentProduct.photos[j];
            function onClickHandler (e) {
                console.log('clicked');
                console.log(e)
                e.target.classList.add('active');
                image.src = e.target.currentSrc;
            }
            function mouseOutHandler (e) {
                e.target.classList.remove('active');
            }
            imgTag.addEventListener('mouseover',onClickHandler);
            imgTag.addEventListener('click',onClickHandler);
            imgTag.addEventListener('mouseout',mouseOutHandler);
        }

        //button div
        var btn = document.createElement('div');
        btn.classList.add('btn');
        content.appendChild(btn);

        //button tag in btn
        var button = document.createElement('button');
        button.classList.add('button');
        btn.appendChild(button);
        button.innerText = "Add to Cart";

        //appending the element to comtainer
        document.getElementsByClassName("container")[0].appendChild(mainImage);
        document.getElementsByClassName("container")[0].appendChild(content);
    }
}
appendChildren();




