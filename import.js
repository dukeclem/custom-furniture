/**
 * Created by ronperris on 5/27/15.
 */
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
            "care" : "Hailed by Time magazine as the Best Design of the 20th Century, the iconic LCW or Lounge Chair Wood” (1946) began as an experiment in the Eameses’ apartment, where they were molding plywood in what they called thKazam! Machine."
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
            "care": "Finn Juhl designed the Poet Sofa (1941) for use in his own home, located in Charlottenlund, a rural area north of Copenhagen. Today, the Juhl house – which is an early example of open-plan design and offers views to its garden from every room – is part of the Ordrupgaard Museum. Being connected to the landscape was something that Juhl both lived and practiced, and the influence is notable in the organic forms of his furniture. Being a true sensualist, Juhl created his furniture to be comfortable, made with the best craftsmanship traditions and showing an appreciation of materials. This original is."
        }
    ]
};

$.each(furniture.furnitures, function(i, furniture) {
    console.log(furniture);

    $.ajax({
            url: "https://api.mongolab.com/api/1/databases/occs/collections/my-coll?apiKey=DdsUC145SWgTJzXMO1E1Cjr6MeEhdL6s",
            data: JSON.stringify(furniture),
            type: "POST",
            contentType: "application/json"
        }
    );
});