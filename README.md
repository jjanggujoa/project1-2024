# project1-2024

2024-2학기 캡스톤프로젝트 중간 과제

<img src="https://img.shields.io/badge/
HTML5-E34F26?style=for-the-badge&logo=HTML5&
logoColor=white">
<img src="https://img.shields.io/badge/
CSS3-1572B6?style=for-the-badge&logo=CSS3&
logoColor=white">
<img src="https://img.shields.io/badge/
JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&
logoColor=white">
<img src="https://img.shields.io/badge/
Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&
logoColor=white">
<img src="https://img.shields.io/badge/
jquery-%230769AD?style=for-the-badge&logo=jquery&
logoColor=white">
# openweathermap

지정된 장소의 현재 날씨를 표시
[실습해보기]()
"https://api.openweathermap.org/data/2.5/find?"

```
let WeatherObject = {
	getWeather: function() {
		$.ajax({
			type: "GET",
			url: 'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35',
		}).done(function(response) {

            console.log(response)
            // alert(response.weather[0].main)

            let wdata = response
            let exdata = response.weather[0];
        
            temp.innerText = wdata.main.temp + "°C";
            min.innerText = wdata.main.temp_min;
            max.innerText = wdata.main.temp_max;
            wind.innerText = wdata.wind.speed;
        
            weather.innerText = exdata.main + "," + exdata.description;
            icon.setAttribute('src', icon_url + exdata.icon + ".png");
		}).fail(function(error) {
			alert("!/js/user.js에서 에러발생: " + error.statusText);
		});
	},
 }

 WeatherObject.getWeather();
 ```

# openAI

GPT를 이용하여 사진 분석하기
[실습하기]()
 "https://api.openai.com/v1/images/generations"

 ```
    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/images/generations",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        // alert(response.choices[0].message.content)
        gimage.src=response.data[0].url
        gimage2.src=response.data[1].url
    }).fail(function(error){
        console.log(error)
        errormsg = error.status + ":" + error.responseJSON.error.code + "-" + error.responseJSON.error.message
        txtOut.value=errormsg
    })
```

# google cloud vision

Google Cloud를 이용하여 표정 분석하기
[실습하기]()
https://vision.googleapis.com/v1/images:annotate?key=

```
 $.ajax({
        type:"POST",
        url:'https://vision.googleapis.com/v1/images:annotate?key=' + VISION_API_KEY,
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)

    }).fail(function(error){
        console.log(error)

    })
```

개발순서
1. 소스수정
2. 소스저장
3. 스테이지
4. 커밋앤 푸시
5. 커밋메세지


