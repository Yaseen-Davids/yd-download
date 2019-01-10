$(document).ready(function(){
  
    $(".edit_btn").on('click', function(){

        var userID = $(this).attr("data-id");
        console.log(userID);

        $.ajax({
            url: "/series_data/" + userID,
            contentType: "application/json",
            method: "GET",
            success: function(response){

                var title = response.title;
                var episode = response.episode;
                var season = response.season;
                var id = response._id;

                $("#data_id").val(id);
                $("#title_edit").val(title);
                $("#season_edit").val(season);
                $("#episode_edit").val(episode);

            }
        })

    });

    $(".next_btn").on('click', function(){

        var userID = $(this).attr("data-id");

        $.ajax({
            url: "/next_data/" + userID,
            contentType: "application/json",
            method: "GET",
            success: function(response){

                var title = response.title;
                var episode = response.episode + 1;
                var season = response.season;
                var id = response._id;

                $("#id_next").val(id);
                $(".header_text_next").text(title);
                $("#title_next").val(title);
                $("#season_next").val(season);
                $("#episode_next").val(episode);

            }
        })

    });

    // POST ID TO EDIT MOVIE MODAL
    $(".edit_movie").on('click', function(){
        var id = $(this).attr("data-id");

        $.ajax({
            url: "/get-movie/" + id,
            method: "GET",
            success: function(response){
                var movieTitle = response.title;
                var movieID = response._id;

                $("#movie_id").val(movieID);
                $("#movie_title").val(movieTitle);
                
            }
        })

    });

    // POST ID TO DELETE MOVIE MODAL
    $(".delete_movies_btn").on('click', function(){
        var id = $(this).attr("data-id");

        $(".delete_movies").attr("data-id", id);
    });

    //  AJAX TO DELETE MOVIE
    $(".delete_movies").on('click', function(){
        var id = $(this).attr("data-id");
        
        $.ajax({
            url: '/delete-movie/' + id,
            method: "DELETE",
            success: function(response){
                console.log(response);
                window.location.href = "/";
            }
        })
    });


    // POST ID TO DELETE SERIES MODAL
    $(".delete_series_btn").on('click', function(){
        var id = $(this).attr("data-id");

        $(".delete_series").attr("data-id", id);
    });

    //  AJAX TO SERIES MOVIE
    $(".delete_series").on('click', function(){
        var id = $(this).attr("data-id");
        
        $.ajax({
            url: '/delete-series/' + id,
            method: "DELETE",
            success: function(response){
                console.log(response);
                window.location.href = "/";
            }
        })
    });

})