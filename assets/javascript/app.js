// Document ready

$(document).ready(function() {

            // Create the event listener (clicking submit button)

            $("button").on("click", function() {
                /* Act on the event */

                // Create several variables capturing input data from user

                var search = $(this).attr("data-search");
                var limit = $(this).attr("data-limit");
                var startDate = $(this).attr("data-start-date");
                var endDate = $(this).attr("data-end-date");



                // Create the queryURL using key value pairs per documentation
                // 1 - q or fq (query)
                // 2 - fl (field limit)
                // 3 - being_date
                // 4 - end_date


                var queryURL = "http://developer.nytimes.com/article_search_v2.json/swagger.json" +

                    // Create AJAX call utilizing the "get" method + queryURL


                    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
                url += '?' + $.param({
                    'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
                    'fq': search,
                    'begin_date': startDate + "0101",
                    'end_date': endDate + "1231",
                    'fl': limit
                });
                $.ajax({
                    url: url,
                    method: 'GET',
                }).done(function(result) {
                    console.log(result);
                }).fail(function(err) {
                    throw err;
                });

                // 



            });


        }