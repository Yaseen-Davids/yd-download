$(document).ready(function(){
  
    $(".edit_btn").on('click', function(){

        var theTitle = $(this).data("title");
        var url = 'https://api.mlab.com/api/1/databases/series-to-do/collections/series?apiKey=s9Sjlqqdqj-rscZfP8zgevtIyfu3Wfq1&q={"title":"'+ theTitle +'"}';

        $.ajax({
            url: url,
            contentType: "application/json",
            method: "GET",
            success: function(response){

                // GET RESPONSE
                var title = response[0].title;
                var season = response[0].season;
                var episode = response[0].episode;

                // PUT DATA IN MODAL
                $("#hidden_title").val(title);
                $("#title_edit").val(title);
                $("#season_edit").val(season);
                $("#episode_edit").val(episode);

            }
        })

    });

    $(".next_btn").on('click', function(){

        var theTitle = $(this).data("title");
        var url = 'https://api.mlab.com/api/1/databases/series-to-do/collections/series?apiKey=s9Sjlqqdqj-rscZfP8zgevtIyfu3Wfq1&q={"title":"'+ theTitle +'"}';

        $.ajax({
            url: url,
            contentType: "application/json",
            method: "GET",
            success: function(result){

                console.log(result)

                // GET RESPONSE
                var title = result[0].title;
                var season = result[0].season;
                var episode = result[0].episode + 1;

                // PUT DATA IN MODAL
                $("#title_next").val(title);
                $(".header_text").text(title);
                $("#season_next").val(season);
                $("#episode_next").val(episode);

            }
        })

    });
    
    $(".download_btn").on('click', function(){

        var closest = $(this).closest("p");

        if (closest.hasClass("downloading")){
            closest.removeClass("downloading")
        }
        else{
            closest.addClass("downloading")
        }

        
    })

})