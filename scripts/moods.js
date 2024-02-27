// * import database
// * define function to format html
let htmlString = ``
    // iterate over each emotion object in the emotions array in the database
    for (emotion of emotions) {
        //below is html components
        htmlString += `<section class="tile">
        <div class="tile_header"><h2>${emotion.name}</h2></div>
        <div class="tile_image"><img src = "${emotion.imageUrl}"></div>
        <div class ="tile_advice-box">
            <div class="tile_advice-box_header">Macho Advice</div>                                                            
            <div class="tile_advice-box_content">${emotion.quotes}</div>
        </div>
        </section>
    }


    