
    
function result(){
    var score=0;
    if (document.getElementById('correct1').checked)
    {
        score++;
    }
    if (document.getElementById('correct2').checked)
    {
        score++;
    }
    if (document.getElementById('correct3').checked)
    {
        score++;
    }
    alert("you score is "+ score/3*100);
    math.round(score);
    
}

            

        