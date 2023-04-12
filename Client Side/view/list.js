function fillFindContainer(data){
    if (data){
        $("#find-name").val(data.Name);                              
    }else{
        $("#find-name").val("");
    }      
}

$("#maps").click(function(event){
    event.preventDefault();
    $.ajax({
        url: '/restaurant',
        type: 'GET',
        contentType: 'application/json',                        
        success: function(response){
            console.log(response);
            $("#find-out").text(response.msg);
            fillFindContainer(response.data);              
        },                   
        error: function(xhr, status, error){
            var errorMessage = xhr.status + ': ' + xhr.statusText
            alert('Error - ' + errorMessage);
        }
    });
  });