// コンテンツのロードが実行された時点で以下の処理を実行します。
document.addEventListener('DOMContentLoaded',
    function () {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]


        // canvas draw
        function draw(ctx) {

            // 一旦初期化する
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(816.0, 114.0);
            ctx.lineTo(466.0, 114.0);
            ctx.lineTo(466.0, 0.0);
            ctx.lineTo(816.0, 0.0);
            ctx.lineTo(816.0, 114.0);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();
            ctx.stroke();

            //
            ctx.beginPath();
            ctx.moveTo(249.0, 263.0);
            ctx.lineTo(1.0, 263.0);
            ctx.lineTo(1.0, 144.0);
            ctx.lineTo(249.0, 144.0);
            ctx.lineTo(249.0, 263.0);
            ctx.closePath();
      
            //
            ctx.beginPath();
            ctx.moveTo(200.5, 240.5);
            ctx.lineTo(0.5, 240.5);
            ctx.lineTo(0.5, 153.5);
            ctx.lineTo(200.5, 153.5);
            ctx.lineTo(200.5, 240.5);
            ctx.closePath();
            ctx.stroke();
      
            //
            ctx.beginPath();
            ctx.moveTo(200.5, 391.5);
            ctx.lineTo(0.5, 391.5);
            ctx.lineTo(0.5, 304.5);
            ctx.lineTo(200.5, 304.5);
            ctx.lineTo(200.5, 391.5);
            ctx.closePath();
            ctx.stroke();
      
            //
            ctx.beginPath();
            ctx.moveTo(200.5, 542.5);
            ctx.lineTo(0.5, 542.5);
            ctx.lineTo(0.5, 455.5);
            ctx.lineTo(200.5, 455.5);
            ctx.lineTo(200.5, 542.5);
            ctx.closePath();
            ctx.stroke();
      
            //
            ctx.beginPath();
            ctx.moveTo(200.5, 693.5);
            ctx.lineTo(0.5, 693.5);
            ctx.lineTo(0.5, 606.5);
            ctx.lineTo(200.5, 606.5);
            ctx.lineTo(200.5, 693.5);
            ctx.closePath();
            ctx.stroke();
      
            //
            // ctx.beginPath();
            // ctx.moveTo(740.5, 240.5);
            // ctx.lineTo(540.5, 240.5);
            // ctx.lineTo(540.5, 153.5);
            // ctx.lineTo(740.5, 153.5);
            // ctx.lineTo(740.5, 240.5);
            // ctx.closePath();
            // ctx.stroke();
      
            //
            ctx.beginPath();
            ctx.moveTo(740.5, 366.5);
            ctx.lineTo(540.5, 366.5);
            ctx.lineTo(540.5, 279.5);
            ctx.lineTo(740.5, 279.5);
            ctx.lineTo(740.5, 366.5);
            ctx.closePath();
            ctx.stroke();
      
            // 
            ctx.beginPath();
            ctx.moveTo(740.5, 492.5);
            ctx.lineTo(540.5, 492.5);
            ctx.lineTo(540.5, 405.5);
            ctx.lineTo(740.5, 405.5);
            ctx.lineTo(740.5, 492.5);
            ctx.closePath();
            ctx.stroke();
      
            // 
            ctx.beginPath();
            ctx.moveTo(873.5, 618.5);
            ctx.lineTo(540.5, 618.5);
            ctx.lineTo(540.5, 531.5);
            ctx.lineTo(873.5, 531.5);
            ctx.lineTo(873.5, 618.5);
            ctx.closePath();
            ctx.stroke();
      
            // 
            ctx.beginPath();
            ctx.moveTo(873.5, 736.5);
            ctx.lineTo(540.5, 736.5);
            ctx.lineTo(540.5, 649.5);
            ctx.lineTo(873.5, 649.5);
            ctx.lineTo(873.5, 736.5);
            ctx.closePath();
            ctx.stroke();
      
            // 
            ctx.beginPath();
            ctx.moveTo(1266.5, 240.5);
            ctx.lineTo(1066.5, 240.5);
            ctx.lineTo(1066.5, 153.5);
            ctx.lineTo(1266.5, 153.5);
            ctx.lineTo(1266.5, 240.5);
            ctx.closePath();
            ctx.stroke();
      
            // 
            ctx.beginPath();
            ctx.moveTo(1266.5, 391.5);
            ctx.lineTo(1066.5, 391.5);
            ctx.lineTo(1066.5, 304.5);
            ctx.lineTo(1266.5, 304.5);
            ctx.lineTo(1266.5, 391.5);
            ctx.closePath();
            ctx.stroke();
      
            // 
            ctx.beginPath();
            ctx.moveTo(1266.5, 542.5);
            ctx.lineTo(1066.5, 542.5);
            ctx.lineTo(1066.5, 455.5);
            ctx.lineTo(1266.5, 455.5);
            ctx.lineTo(1266.5, 542.5);
            ctx.closePath();
            ctx.stroke();
      
            // 
            ctx.beginPath();
            ctx.moveTo(1266.5, 693.5);
            ctx.lineTo(1066.5, 693.5);
            ctx.lineTo(1066.5, 606.5);
            ctx.lineTo(1266.5, 606.5);
            ctx.lineTo(1266.5, 693.5);
            ctx.closePath();
            ctx.stroke();

            // 教卓
            ctx.font = "24.0px 'MS UI Gothic'";
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fillText("教卓", 615.0, 65.0);
      
            // 1
            ctx.fillText(numbers[0], 90.5, 206.0);
      
            // 2
            ctx.fillText(numbers[1], 93.5, 356.5);
      
            // 3
            ctx.fillText(numbers[2], 93.0 , 510.0);
      
            // 4
            ctx.fillText(numbers[3], 93.5, 655.0);
      
            // // 5
            // ctx.fillText(numbers[4], 635.0, 210.0);

            // 5
            ctx.fillText(numbers[4], 635.0, 335.0);

            // 6
            ctx.fillText(numbers[5], 635.0, 460.0);
      
            // 7
            ctx.fillText(numbers[6], 700.0, 585.0);
      
            // 8
            ctx.fillText(numbers[7], 700.0, 700.0);
      
            // 9
            ctx.fillText(numbers[8], 1160.0, 210.0);
      
            // 10
            ctx.fillText(numbers[9], 1160.0, 360.0);
      
            // 11
            // ctx.fillText(numbers[10], 1160.0, 360.0);
      
            // 12
            ctx.fillText(numbers[10], 1160.0, 515.0);
      
            // 13
            ctx.fillText(numbers[11], 1160.0, 660.0);
            ctx.restore();
        }

    document.getElementById("change").addEventListener("click", function(){
        // numbers配列にシャッフルをかける
        // フィッシャー・イエーツアルゴリズム、 https://qiita.com/komaji504/items/62a0f8ea43053e90555a
        for(var i = numbers.length - 1; i > 0; i--){
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = numbers[i];
            numbers[i] = numbers[r];
            numbers[r] = tmp;
        }

        console.log(numbers);
        // 描画
        draw(ctx);
    });

    // 描画
    draw(ctx);
},
// コンテンツのロードが実行された時点で以上の処理を実行します。
// 以下はコンテンツのロードが実行された後処理の指定です。
false);