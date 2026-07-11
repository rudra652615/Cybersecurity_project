function animateValue(id,start,end,duration){

    let current=start;

    const range=end-start;

    const increment=end>start?1:-1;

    const step=Math.abs(Math.floor(duration/range));

    const obj=document.getElementById(id);

    const timer=setInterval(()=>{

        current+=increment;

        obj.innerHTML=current;

        if(current==end){

            clearInterval(timer);

        }

    },step);

}

window.onload=()=>{

    animateValue("investigationCount",0,24,900);

    animateValue("targetCount",0,156,1200);

};
