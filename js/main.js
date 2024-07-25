const page3_main_img = document.getElementById('page3_main_img');
const p3_text_wrapper = document.getElementById('p3_text_wrapper');


window.addEventListener('scroll' , () =>{
    let WinByY = scrollY;

    // console.log(WinByY);
    
    if (WinByY > 900) {
        page3_main_img.style.opacity='1'
        p3_text_wrapper.style.transform='scale(90%) translateX(0)'
    } else {
        page3_main_img.style.opacity='0'
        p3_text_wrapper.style.transform='scale(90%) translateX(700px)'
    }
})
