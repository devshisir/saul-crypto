const api_url = 'https://nceia3e5kc.execute-api.us-east-1.amazonaws.com/web/live';
async function getAPI(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
    if(response){
        activeSlider();
    }
}

getAPI(api_url);

// active slide item
function show(data) {
    let sliderItem = 
        ``;
    // const filter = s.slice(0, s.lastIndexOf("_"));;
    // Loop to access all rows 
    for (let r of data.pairs) {

        
        sliderItem += `
        <div class="dataSliderItem">
        <div class="leftContent">
           <h5>${r.pair} <span>${r.delta24h}%</span></h5>
           <h3>${r.rate} <span>USD</span></h3>
           <p><span>High:</span> ${r.high5min}</p>
           <p><span>Low:</span> ${r.low5min}</p>
        </div>
        <div class="rightContent">
           <svg width="100%" height="100%" viewBox="0 0 100 50"><polygon points="0,50 0.00,6.31 1.11,6.71 2.22,3.23 3.33,1.04 4.44,1.30 5.56,1.57 6.67,1.92 7.78,2.09 8.89,2.70 10.00,3.02 11.11,3.29 12.22,2.51 13.33,2.80 14.44,2.54 15.56,1.11 16.67,2.95 17.78,0.86 18.89,1.03 20.00,0.00 21.11,0.25 22.22,0.05 23.33,0.40 24.44,0.76 25.56,1.83 26.67,2.01 27.78,7.48 28.89,6.96 30.00,6.17 31.11,6.29 32.22,5.82 33.33,6.23 34.44,6.25 35.56,8.75 36.67,8.85 37.78,10.17 38.89,8.35 40.00,9.64 41.11,9.15 42.22,9.02 43.33,9.21 44.44,9.50 45.56,9.36 46.67,9.66 47.78,11.68 48.89,10.73 50.00,10.68 51.11,6.41 52.22,5.92 53.33,5.67 54.44,4.41 55.56,8.84 56.67,8.87 57.78,9.86 58.89,9.73 60.00,9.02 61.11,10.38 62.22,10.33 63.33,11.53 64.44,12.33 65.56,10.45 66.67,10.79 67.78,11.44 68.89,11.46 70.00,10.77 71.11,11.16 72.22,10.45 73.33,10.13 74.44,10.45 75.56,10.66 76.67,11.20 77.78,9.98 78.89,8.72 80.00,8.89 81.11,9.28 82.22,10.21 83.33,10.47 84.44,10.39 85.56,10.99 86.67,11.08 87.78,11.00 88.89,10.31 90.00,10.96 91.11,11.07 92.22,10.63 93.33,10.08 94.44,10.63 95.56,10.69 96.67,11.01 97.78,10.85 98.89,10.56 100.00,10.76 100,50" class="line"></polygon></svg>
           <p>Last 90 days</p>
        </div>
     </div>
        `

;
        
    }
    // Setting innerHTML as tab variable
    document.getElementById("activeSliderData").innerHTML = sliderItem;
}

function activeSlider(){
    $('.dataSlideractive').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrows: false,
        loop: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
}
