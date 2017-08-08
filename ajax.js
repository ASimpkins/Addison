var myId = "4ea6f92e";

var myKey = "0c107cb270e0602c66c9de1a704fbe82SSS";

var myUrl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=APPID&appKey=APPKEY" + myId + "&appkey=" + myKey;

$.ajax( {
    url:myURL
    success: function(data){
        console.log(data);
    }
})

