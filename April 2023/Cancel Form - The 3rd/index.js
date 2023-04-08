// Add JavaScript code here
const ratingsSection = document.getElementById("ratings") 


let ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let str = ''


function clicked(element) {
    element.style.backgroundColor = '#ED7F03'
    element.style.color = '#fff'
}



ratings.map((rating) => 

    
{

    str += `<div onclick="clicked(this)" class="text-gray-400 bg-gray-100 w-8 h-8 flex justify-center items-center">`
    str += `<p class="">${rating}</p>`
        str += `</div>`
        }
)


ratingsSection.innerHTML = str

