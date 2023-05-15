//Declare variables
const url_NEWS = "http://localhost:3000/article"; //stable data json from db.json_ get News
let eleCategorises = document.querySelector(".start_describe"); 
// console.log(eleCategorises); // test DOM
const url_Playlist = "  http://localhost:3000/playlist"; //stable data json from db.json_ get playlist
let recentPost = document.querySelector('.recentPost_block');
console.log(recentPost);

// eleCategorises.innerHTML = "HUY NGUYEN";
// BLOG CONTENT
// handle data
fetch(url_NEWS)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // displayMain= '';
    //   console.log(eleCategorises);
        let displayMain = "";// set emty string
        data.map((item) => { // run map method get data in each post
        //   console.log(item); // check data
        // create block code html
        displayMain += /*html*/ `
                <img class="img-fluid w-100 rounded mb-5" src ="${item.thumb}" alt="">
                        <h1 class="text-uppercase mb-4">${item.title}</h1>
                        <p>${item.description}</p>
                        <figcaption class="text-end">
                        <small>${item.publish_date}</small>
                        <a href=${item.link}">Xem thêm...</a>
                        </figcaption>
                    `;
        });
        // console.log(displayMain); // check HTML 
        eleCategorises.innerHTML = displayMain; // assign code structure to NODEelement
  });


// RECENT POST 

// fetch(url_Playlist)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // displayMain= '';
//     //   console.log(eleCategorises);
//         let displayMain = "";// set emty string
//         data.map((item) => { // run map method get data in each post
//         //   console.log(item); // check data
//         // create block code html
//         displayMain += /*html*/ `
//                 <img class="img-fluid w-100 rounded mb-5" src ="${item.thumb}" alt="">
//                         <h1 class="text-uppercase mb-4">${item.title}</h1>
//                         <p>${item.description}</p>
//                         <figcaption class="text-end">
//                         <small>${item.publish_date}</small>
//                         <a href=${item.link}">Xem thêm...</a>
//                         </figcaption>
//                     `;
//         });
//         // console.log(displayMain); // check HTML 
//         recentPost.innerHTML = displayMain; // assign code structure to NODEelement
//   });








{/* <div class="d-flex overflow-hidden mb-3">
<img class="img-fluid" src="img/blog-1.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt="">
<a href="" class="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
</a>
</div> */}