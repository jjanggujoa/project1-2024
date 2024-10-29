VISION_API_KEY = ""

function processFile(event){
    content = event.target.result 
    imagestring = content.replace('data:image/jpeg;base64,', '')
    document.getElementById("gimage").src = content
}

function uploadFiles(files){
    file = files[0]
    reader = new FileReader()
    reader.onloadend = processFile
    reader.readAsDataURL(file)
}

function analyze(){
    data ={
        requests: [{
            image:{
                content: imagestring
            },
            features:[{
                type:"FACE_DETECTION",
                maxResults: 100
            }]
        }]
    }

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
}

// var VISION_API_KEY = "AIzaSyAUFFcKU6Vt6P_38HOlCO-n7GEbuPB2Xpk";
// var imagestring = ""; 

// function processFile(event) {
//     var content = event.target.result;
//     imagestring = content.replace('data:image/jpeg;base64,', '');
//     document.getElementById("gimage").src = content;
// }

// function uploadFiles(files) {
//     var file = files[0];
//     var reader = new FileReader();
//     reader.onloadend = processFile;
//     reader.readAsDataURL(file);
// }

// function analyze() {
//     var data = {
//         requests: [{
//             image: {
//                 content: imagestring
//             },
//             features: [{
//                 type: "FACE_DETECTION",
//                 maxResults: 100 
//             }]
//         }]
//     };

//     $.ajax({
//         type: "POST",
//         url: 'https://vision.googleapis.com/v1/images:annotate?key=' + VISION_API_KEY,
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         data: JSON.stringify(data),
//         contentType: "application/json; charset=utf-8"
//     }).done(function (response) {
//         var faceAnnotations = response.responses[0].faceAnnotations;
//         if (faceAnnotations && faceAnnotations.length > 0) {
//             var allEmotions = [];
            
//             faceAnnotations.forEach(function(face, index) {
//                 var emotion = analyzeEmotion(face);
//                 allEmotions.push("사람 " + (index + 1) + ": " + emotion);
//             });
            
//             document.getElementById("result").value = allEmotions.join('\n');
//         } else {
//             document.getElementById("result").value = "얼굴을 감지할 수 없습니다.";
//         }
//     }).fail(function (error) {
//         console.log(error);
//         document.getElementById("result").value = "분석 실패: " + error.responseText;
//     });
// }

// function analyzeEmotion(face) {
//     var emotions = {
//         joyLikelihood: '행복',
//         sorrowLikelihood: '슬픔',
//         angerLikelihood: '분노',
//         surpriseLikelihood: '놀람'
//     };

//     var detectedEmotions = [];

//     for (var emotion in emotions) {
//         if (face[emotion] === 'VERY_LIKELY' || face[emotion] === 'LIKELY') {
//             detectedEmotions.push(emotions[emotion]);
//         }
//     }

//     if (detectedEmotions.length === 0) {
//         return "특별한 감정이 감지되지 않았습니다.";
//     }

//     return  detectedEmotions.join(', ');
// }