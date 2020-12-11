/***********************************
 * Created by saied loai lakhdar 
 * djelfanetwork 
 * github.com/saiedlakhdar/drag_drop_js.git
 */

document.querySelectorAll(".drag-input").forEach(InputElenment => {
    const dropZoneElement = InputElenment.closest(".drag-zone");
    // click on the browser button of input 
    dropZoneElement.addEventListener("dblclick", e => {
        InputElenment.click() ;
    });
    // when image change the title will change too 
    dropZoneElement.addEventListener("change", e => {
        if (InputElenment.files.length) {
            updateThumbnaill(dropZoneElement, InputElenment.files[0]) ;
        }
    });

    // when mouse drag over 
    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault() ;
       dropZoneElement.classList.add("drag-over")
    });

    // when mouse cancel draging all ways 
    ["dragleave", "dragend"].forEach( type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove("drag-over") ;
        });
    });
    // when drop file 
    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault() ;
        
        if(e.dataTransfer.files.length) {
            InputElenment.files = e.dataTransfer.files ;
            updateThumbnaill(dropZoneElement, e.dataTransfer.files[0]);
        };
        dropZoneElement.classList.remove("drag-over") ;
    

    });


   
    // close button track corner of the image div 
    

    
  

   });
   // update Thumbnail function
   function updateThumbnaill(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drag-thumbnill") ;
    let dropTitle = dropZoneElement.querySelector(".drap-drop-title") ;
    if (!thumbnailElement ) {

        // check if this selector is found 
        if(dropTitle){
            dropTitle.remove() ;
        } ;

        //create span
        thumbnailCloseElement = document.createElement("button") ;
        // ifan close button on the corner  
        ifan = document.createElement("i") ;
        //create Div 
        thumbnailElement = document.createElement("div") ;
        //add class "drag-thumnail" into the dav 
        thumbnailElement.classList.add("drag-thumbnill") ; 
        thumbnailCloseElement.classList.add("close") ;
        ifan.classList.add("fas", "fa-times");


        console.log(thumbnailElement.offsetTop); 
        thumbnailCloseElement.style.top = thumbnailElement.offsetTop + "15px" ;
        thumbnailCloseElement.style.left = thumbnailElement.offsetLeft + "15px" ;
        // add some attributes 
        dropZoneElement.appendChild(thumbnailElement);
        dropZoneElement.appendChild(thumbnailCloseElement) ;
        thumbnailCloseElement.appendChild(ifan);
        // add some attributes 
        setAttributes(thumbnailCloseElement, {"data-bs-toggle": "tooltip", "data-bs-placement": "left", "title" : "Clear"}) ;
        // close button 
        clearthumbnail = dropZoneElement.querySelector(".close");
        clearthumbnail.addEventListener("click", e => {
            thumbnailElement.remove() ;
            thumbnailCloseElement.remove() ;
        });
 
     
    } 

    // fill the data-drag_label attribute from  file 
    thumbnailElement.dataset.drag_label = file.name ;
    // check if the file is image 
    if (file.type.startsWith("image/")) {
        const reader =  new FileReader() ;
        reader.readAsDataURL(file) ; 
        reader.onload = () => {
            // read image file and convert it to data:image/jpeg;base64 to show it 
            thumbnailElement.style.backgroundImage = `URL('${reader.result}')`
        } ;  
    } else {
        // if the file is not image 
        thumbnailElement.style.backgroundImage = null ;
    }
   } ;



   // bootstrap 5 enable tooltips everywhere

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
// bootstrap tooltip animate 
    animation: true 
  })
})


// helper function to set attributes 

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }


  function Clearimage() {
    
  };
