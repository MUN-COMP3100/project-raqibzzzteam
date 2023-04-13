$(document).ready(function(){
    /**
     * This operation binds a click event to the LIST tab
     */
    $("#btn-list-all").click(function(event){
        event.preventDefault();
        $("#list-restaurant").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */
        let tbl = '<table id="table-list"><tr><th>Name</th><th>Cuisine</th><th>Location</th><th>Mood</th><th>Rating</th></tr></table>';
        $("#list-restaurant").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/restaurant',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                    if (i%2 ==0){
                        tbl_line = '<tr class="even-row"><td>'+obj.name+'</td><td>'+obj.tel+'</td><td>'+obj.address+'</td><tr/>';
                    }else{
                        tbl_line = '<tr class="odd-row"><td>'+obj.name+'</td><td>'+obj.tel+'</td><td>'+obj.address+'</td><tr/>';
                    }                    
                    $("#table-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });
    
});  