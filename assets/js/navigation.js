const url = new URLSearchParams(window.location.search);
const page =url.get("page");
if(!page)
{
    window.location.replace(`${window.location.pathname}?page=1`);
}
const pageNum = document.getElementById("pagination-btn");

    const prev= document.createElement("a");
    prev.setAttribute("class","paginationext");
    const prevText = document.createTextNode("Prev");
    prev.innerHTML="Prev";
    prev.href=`${window.location.pathname}?page=${Number(page)-1}`;

    if(page<=1)
    {
        prev.style.visibility="hidden";
    }
    pageNum.appendChild(prev);

for(let i=1; i<=4;i++)
{
 if(i==page)
 {
     
    pageNum.innerHTML+=`
    <a href="${window.location.pathname}?page=${i}" class="pagesbtnancor">
        <button type="button" class="pagestn-active">
            ${i}
        </button>
    </a>
    `;
 }
 else
 {
    pageNum.innerHTML+=`
    <a href="${window.location.pathname}?page=${i}" class="pagesbtnancor">
        <button type="button" class="pagestn">
            ${i}
        </button>
    </a>
    `;
}
}


const next= document.createElement("a");
next.setAttribute("class","paginationext");
next.innerHTML="Next";
next.href=`${window.location.pathname}?page=${Number(page)+1}`;

if(page>=4)
{
    next.style.visibility="hidden";
}
pageNum.appendChild(next);




// var header = document.getElementById("pagination-btn");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }