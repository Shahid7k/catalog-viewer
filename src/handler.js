let index = 0;
let stopFlag = false;
export const initPage = () =>{
    const slides = document.querySelectorAll('.catalog-img');
    console.log('Slides',slides)
    for(var i=1;i<slides.length;i++){
        slides[i].style.display='none';
    }
    
}


const display = (arr ,i) => {
    console.log('i',i)
    if(stopFlag) return;
    if(i==0){
        arr[arr.length-1].display='none';
        arr[0].display = 'block';
    }
    else if(i == arr.length) { 
        arr[i-1].style.display='none';
        i=0;
        arr[i].style.display=' block'
    }
    else { 
        arr[i-1].style.display='none';
        arr[i].style.display=' block'
    }
    index = i;
    setTimeout(()=>display(arr,i+1), 3000);
}

// const index = 0;

export const startShow = () => {
    const slides = document.querySelectorAll('.catalog-img');
    stopFlag = !true;
    display(slides,index);
}

export const stopShow = () => {
    stopFlag = true;
}

export const showSlide = () =>{
    const slides = document.querySelectorAll('.catalog-img');
    for(let i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }

}


export const navigate = ( n ) => {
    const slides = document.querySelectorAll('.catalog-img');
    const len = slides.length
    if(index==0 && n==-1){
        slides[0].style.display = 'none';
        slides[len-1].style.display = 'block';  
        index = len-1;
        return;  
    }
    else if(index==len-1 && n==1){
        slides[len-1].style.display = 'none';  
        slides[0].style.display = 'block';
        index = 0;
        return;  
    }
    slides[index].style.display = 'none';  
    slides[index+n].style.display = 'block';
    index+=n;

}