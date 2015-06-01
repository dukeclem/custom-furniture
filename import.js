

var furniture = {
    "furnitures": [
        {
            "name": "Danish Table",
            "style": "Danish",
            "room": "Hallway",
            "type": "Credenza",
            "price": "1000",
            "material": "Teak Wood",
            "height": "32",
            "width": "56",
            "depth": "24",
            "care": "Wipe up spills immediately. Dust often using a soft, dry, lint-free cloth. Wipe occasionally with a soft cloth dampened with a solution of warm water and mild detergent, then dry immediately with a lint-free cloth. TOUCH-UP CRAYON A special crayon is included with ebonized oak versions to touch up nicks and scratches. Run the crayon along the affected area, then buff with a soft, dry, lint-free coth to remove excess material."
        },
        {
            "name": "plywood chair",
            "style": "Mid-century",
            "room": "Living, Hall-way",
            "type": "Chair",
            "price": "919",
            "material": "Plywood",
            "height": "26.5",
            "width": "22",
            "depth": "24.25",
            "care" : "Wipe up spills immediately. Dust often using a soft, dry, lint-free cloth. Wipe occasionally with a soft cloth dampened with a solution of warm water and mild detergent, then dry immediately with a lint-free cloth. TOUCH-UP CRAYON A special crayon is included with ebonized oak versions to touch up nicks and scratches. Run the crayon along the affected area, then buff with a soft, dry, lint-free coth to remove excess material."
        },
        {
            "name": "red",
            "style": "Modern",
            "room": "Living",
            "type": "Sofa",
            "price":"2500",
            "material": "Solid Danish beech wood, pine wood, walnut, canvas/linen, foam.",
            "height": "34.25",
            "width": "53.5",
            "depth": "31.5",
            "care": "Wipe up spills immediately. Avoid kids jumping on product."
        }
    ]
};
$.each(furniture.furnitures, function(i, furniture) {
    console.log(furniture);

    $.ajax({
            url: "https://api.mongolab.com/api/1/databases/king/collections/my-coll?apiKey=Mh5gUbvj23zuct7nWLVU-i1acvWZ-kYp",
            data: JSON.stringify(furniture),
            type: "POST",
            contentType: "application/json"
        }
    );
});

/*$(function() {
    $('#effect').hide();
    $('#button').on('click, function(){
      $('#effect').slideToggle(1000);
    })
});



};
$.ajax({
        url: "https://api.mongolab.com/api/1/databases/king/collections/my-coll",
        data: {
            apiKey: "Mh5gUbvj23zuct7nWLVU-i1acvWZ-kYp",
            q: "{room: 'Hallway'}"
        },
        success: function(data){
            $.each(data, function(i, data) {
                $(".care").text(data.care);
            })
        }
    }
);