var arrayStudents= []
var arrayShowstudents= []

function submit(){
    for (var j= 1; j <=4; j++){
        var namesimput= document.getElementById("nameOfTheStudent"+j).value;
        arrayStudents.push(namesimput);
    }
    document.getElementById("displayNameWithCommas").innerHTML= arrayStudents
    document.getElementById("submitButton").style.display = "none"; 
    document.getElementById("sortButton").style.display = "inline-block";
}



function sorting(){
    arrayStudents.sort()
    var showSorting=[]
    var showSorting=[]
    var lengthStudent=arrayStudents.length;
    
    for (var x=0; x<lengthStudent; x++){
        showSorting.push("<h4> Name " +arrayStudents[x]+"</h4>")
    }

    var removeCommas= showSorting.join(" ")
    document.getElementById("displayNameWithoutCommas").innerHTML= removeCommas
}