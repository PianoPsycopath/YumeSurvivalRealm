/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        english: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.


Zoom level info
defualt is 0
zoomout max is -6 low detail
zoomin max is 3 high detail

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markersData: [

        // Example 1: Simple marker
        //{
        //    x: -200,
        //    z: -200,
        //    image: "custom.pin.png",
        //    imageAnchor: [0.5, 1],
        //    imageScale: 0.5,
        //},

        // Example 2: Marker with text
        //{
        //    x: 0,
        //    z: 0,
        //    image: "custom.pin.png",
        //    imageAnchor: [0.5, 1],
        //    imageScale: 0.5,
        //    english: "Marker with text",
        //    textColor: "red", 
        //    offsetX: 0,
        //    offsetY: 20,
        //    font: "bold 20px Calibri,sans serif",
        //},

        // Example 3: Text only
        //{
        //    x: 200,
        //    z: 200,
        //    english: "Text only", 
        //    textColor: "yellow", 
        //    offsetX: 0,
        //    offsetY: 0, 
        //    font: "bold 50px Calibri,sans serif",
        //},
        
        // TOWNS
        {
            x: -97,
            z: 142,
            image: "silverton.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.1,
            english: "Silverton",
            japanese: "シルバートン",
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            textColor: "#FFFFFFF", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 30px Verdana,sans serif",
            minZoom: -2,
            maxZoom: 1,
        },
        {
            x: -533,
            z: 569,
            image: "castle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Charo's Castle",
            japanese: "ちゃろの城",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: -270,
            z: 527,
            image: "base.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Rianu & Geo",
            japanese: "りあぬとGeo",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: -746,
            z: 878,
            image: "castle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Air's Castle",
            japanese: "エアーの城",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: -1002,
            z: 667,
            image: "city.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Sekisui Town",
            japanese: "セキスイタウン",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: -1063,
            z: 711,
            image: "zoo.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Sekisui Zoo",
            japanese: "セキスイの動物園",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom: 1,
        },
        {
            x: -844,
            z: 721,
            image: "aquarium.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Aquarium",
            japanese: "水族館",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom: 1,
        },
        {
            x: -1892,
            z: 578,
            image: "castle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Integrity's Castle",
            japanese: "インテグリティの城",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: -683,
            z: -857,
            image: "town.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Juelsman's Village",
            japanese: "ジュールスマンの村",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: 1373,
            z: -9735,
            image: "town.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Christmas Town",
            japanese: "クリスマスタウン",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: 13771,
            z: 542,
            image: "japanesecastle.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.08,
            english: "Hitsuji Castle",
            japanese: "羊城",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: 13808,
            z: 649,
            image: "japanesetown.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.06,
            english: "Hitsuji Castle Town",
            japanese: "羊城下町",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        {
            x: 13584,
            z: 456,
            image: "japanesetown.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.06,
            english: "Hitsuji Village",
            japanese: "羊村",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        
        //VILLAGES
        
        {
            x: 144,
            z: 610,
            image: "town.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.05,
            english: "Dolcratera",
            japanese: "ドルクラテラ村",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },

        {
            x: -230,
            z: 2924,
            image: "town.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.05,
            english: "Millcray",
            japanese: "ミルクレイ村",
            textColor: "#FFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
                        {
                            x: -233,
                            z: 2888,
                            image: "markers/thread.png",
                            imageAnchor: [0.5, 1],
                            imageScale: 0.07,
                            english: "The Hide & Hem",
                            japanese: "革と糸",
                            textColor: "#FFFFFF", 
                            dropShadowColor: "#625717FF", // Add this to enable drop shadow
                            offsetX: 0,
                            offsetY: 20,
                            font: "bold 20px Verdana,sans serif",
                            minZoom:2,
                            maxZoom: 3,
                        },
                        {
                            x: -229,
                            z: 2902,
                            image: "markers/food.png",
                            imageAnchor: [0.5, 1],
                            imageScale: 0.07,
                            english: "The Hearth & Basket",
                            japanese: "暖炉と籠",
                            textColor: "#FFFFFF", 
                            dropShadowColor: "#625717FF", // Add this to enable drop shadow
                            offsetX: 0,
                            offsetY: 20,
                            font: "bold 20px Verdana,sans serif",
                            minZoom:2,
                            maxZoom: 3,
                        },
                        {
                            x: -212,
                            z: 2904,
                            image: "markers/inn.png",
                            imageAnchor: [0.5, 1],
                            imageScale: 0.07,
                            english: "The Wayfarer’s Respite",
                            japanese: "旅人の憩い",
                            textColor: "#FFFFFF", 
                            dropShadowColor: "#625717FF", // Add this to enable drop shadow
                            offsetX: 0,
                            offsetY: 20,
                            font: "bold 20px Verdana,sans serif",
                            minZoom:2,
                            maxZoom: 3,
                        },
                        {
                            x: -211,
                            z: 2921,
                            image: "markers/mason.png",
                            imageAnchor: [0.5, 1],
                            imageScale: 0.07,
                            english: "The Ember Brickworks",
                            japanese: "火の煉瓦工房",
                            textColor: "#FFFFFF", 
                            dropShadowColor: "#625717FF", // Add this to enable drop shadow
                            offsetX: 0,
                            offsetY: 20,
                            font: "bold 20px Verdana,sans serif",
                            minZoom:2,
                            maxZoom: 3,
                        },
                        {
                            x: -212,
                            z: 2943,
                            image: "markers/jail.png",
                            imageAnchor: [0.5, 1],
                            imageScale: 0.07,
                            english: "Jailhouse",
                            japanese: "監禁所",
                            textColor: "#FFFFFF", 
                            dropShadowColor: "#625717FF", // Add this to enable drop shadow
                            offsetX: 0,
                            offsetY: 20,
                            font: "bold 20px Verdana,sans serif",
                            minZoom:2,
                            maxZoom: 3,
                        },
                        {
                            x: -230,
                            z: 2940,
                            image: "markers/mail.png",
                            imageAnchor: [0.5, 1],
                            imageScale: 0.07,
                            english: "Post Office",
                            japanese: "郵便局",
                            textColor: "#FFFFFF", 
                            dropShadowColor: "#625717FF", // Add this to enable drop shadow
                            offsetX: 0,
                            offsetY: 20,
                            font: "bold 20px Verdana,sans serif",
                            minZoom:2,
                            maxZoom: 3,
                        },
                        {
                            x: -236,
                            z: 2977,
                            image: "markers/armor.png",
                            imageAnchor: [0.5, 1],
                            imageScale: 0.07,
                            english: "The Iron Maw Forge",
                            japanese: "鉄の顎鍛冶場",
                            textColor: "#FFFFFF", 
                            dropShadowColor: "#625717FF", // Add this to enable drop shadow
                            offsetX: 0,
                            offsetY: 20,
                            font: "bold 20px Verdana,sans serif",
                            minZoom:2,
                            maxZoom: 3,
                        },

        {
            x: 14455,
            z: -224,
            image: "japanesetown.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.05,
            english: "Village",
            japanese: "村",
            textColor: "#FFFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 20,
            font: "bold 16px Verdana,sans serif",
            minZoom:-2,
            maxZoom: 1,
        },
        //PLACE NAMES
        {
            x: -7,
            z: 2310,
            english: "Firefly Lake", 
            japanese: "ホタル湖",
            textColor: "#FFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Verdana,sans serif",
            minZoom: 0,
            maxZoom: 3,
        },

        {
            x: -1051,
            z: 2996,
            english: "Southern Ocean",
            japanese: "南極海",
            textColor: "#FFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Verdana,sans serif",
            minZoom: -2,
            maxZoom: 3,
        },

        {
            x: 76,
            z: 31,
            english: "Mount Silver", 
            japanese: "シルバー山",
            textColor: "#FFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Verdana,sans serif",
            minZoom: 0,
            maxZoom: 3,
        },
        {
            x: 0,
            z: 0,
            english: "Central Continent", 
            japanese: "中央大陸 ",
            textColor: "#FFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 0, 
            font: "bold 30px Verdana,sans serif",
            minZoom: -6,
            maxZoom: -3,
        },

        {
            x: 13620,
            z: -37,
            english: "Pigman Forest", 
            japanese: "ピッグマンの森",
            textColor: "#FFFFFF", 
            dropShadowColor: "#625717FF", // Add this to enable drop shadow
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Verdana,sans serif",
            minZoom: 0,
            maxZoom: 3,
        },
        
        
    ],

    generateMarkers: function(language) {
        return this.markersData.map(function(marker) {
            const newMarker = Object.assign({}, marker);
            // Set text based on selected language
            newMarker.text = language === 'en' ? marker.english : marker.japanese;
            // Delete the english and japanese properties to avoid confusion
            delete newMarker.english;
            delete newMarker.japanese;
            return newMarker;
        });
    },

    // Initial markers (English by default)
    markers: []
}



// Define road segments with key positions and custom marker properties
const roadSegments = {
    "FM-5": {
        icon: "FM.png",
        textEn: "5",
        textJa: "5",
        textColor: "#000000",
        scale: 0.03,
        yOffset: -10,
        font: "15px Verdana,sans serif",
        keyPoints: [
            {x: -250, z: 2651},  // Start point
            {x: -220, z: 2590},  // Turn or intersection
            {x: -200, z: 2570},  // Another key point
            // Add more key points as needed
        ]
    },
    "Route-1": {
        icon: "route.png",
        textEn: "1",
        textJa: "1",
        textColor: "#FFFFFF",
        scale: 0.05,
        yOffset: -12,
        font: "20px Verdana,sans serif",
        keyPoints: [
            {x: -3, z: -37},
            {x: 5, z: -80},
            {x: 35, z: -94},
            {x: 23, z: -230},
            {x: 59, z: -275},
            {x: 63, z: -345},
            
            {x: 27, z: -524},
            {x: 0, z: -535},
            {x: -16, z: -559},
            {x: 3, z: -705},
            {x: 32, z: -722},
            {x: -59, z: -905},
            {x: -84, z: -933},
            {x: -52, z: -1023},
            {x: -30, z: -1038},
            {x: -2, z: -1233},
            {x: -16, z: -1310},
            {x: -38, z: -1329},
            {x: -33, z: -1434},
            {x: -77, z: -1446},
            {x: -50, z: -1543},
            {x: 40, z: -1681},
            {x: 87, z: -1969},
            {x: 114, z: -1989},
            {x: 118, z: -2196},
            {x: 95, z: -2233},
            {x: 125, z: -2260},
            {x: 171, z: -2267},
            {x: 292, z: -2388},
            {x: 294, z: -2448},
            {x: 317, z: -2477},
            {x: 333, z: -2481},
            {x: 330, z: -2622},
            {x: 296, z: -2647},
            {x: 290, z: -2706},
            {x: 254, z: -2788},
            {x: 219, z: -2830},
            {x: 270, z: -2885},
            {x: 269, z: -2956},
            {x: 224, z: -3007},
            {x: 245, z: -3069},
            {x: 243, z: -3209},
            {x: 268, z: -3242},
            {x: 260, z: -3270},
            {x: 239, z: -3269},
            {x: 256, z: -3383},
            {x: 284, z: -3435},
            {x: 289, z: -3471},
            {x: 304, z: -3489},
            {x: 307, z: -3595},
            {x: 349, z: -3598},
            {x: 349, z: -3625},
            {x: 370, z: -3672},
            {x: 351, z: -3704},
            {x: 358, z: -3794},
            {x: 450, z: -3827},
            {x: 442, z: -4032},
            {x: 413, z: -4139},
            {x: 396, z: -4317},
            {x: 305, z: -4425},
            {x: 274, z: -4432},
            {x: 255, z: -4471},
            {x: 256, z: -4567},
            {x: 173, z: -4570},
            {x: 172, z: -4596},
            {x: 98, z: -4598},
            {x: 51, z: -4634},
            {x: 40, z: -4660},
            {x: 9, z: -4676},
            {x: 14, z: -4697},
            {x: 7, z: -4708},
            {x: 8, z: -4736},
            {x: 29, z: -4743},
            {x: 30, z: -4891},
            {x: -129, z: -5053},
            {x: -209, z: -5044},
            {x: -292, z: -5105},
            {x: -292, z: -5137},
            {x: -339, z: -5185},
            {x: -339, z: -5228},
            {x: -346, z: -5238},
            {x: -346, z: -5255},
            {x: -311, z: -5298},
            {x: -256, z: -5310},
            {x: -69, z: -5304},
            {x: -50, z: -5360},
            {x: 26, z: -5363},
            {x: 78, z: -5468},
            {x: 79, z: -5524},
            {x: 71, z: -5540},
            {x: 81, z: -5560},
            {x: 98, z: -5572},
            {x: 98, z: -5606},
            {x: 113, z: -5631},
            {x: 141, z: -5643},
            {x: 176, z: -5705},
            {x: 171, z: -5938},
            {x: 209, z: -5976},
            {x: 219, z: -6232},
            {x: 189, z: -6269},
            {x: 179, z: -6305},
            {x: 136, z: -6311},
            {x: 116, z: -6326},
            // Add more points along the road
        ]
    },
    "Route-3": {
        icon: "route.png",
        textEn: "3",
        textJa: "3",
        textColor: "#FFFFFF",
        scale: 0.05,
        yOffset: -12,
        font: "20px Verdana,sans serif",
        keyPoints: [
            {x: 31, z: 153},
            {x: 164, z: 245},
            {x: 198, z: 289},
            {x: 246, z: 325},
            {x: 268, z: 382},
            {x: 326, z: 423},
            {x: 330, z: 461},
            {x: 340, z: 506},
            {x: 332, z: 548},
            {x: 349, z: 598},
            {x: 344, z: 668},
            {x: 332, z: 676},
            {x: 317, z: 720},
            {x: 284, z: 755},
            {x: 259, z: 882},
            {x: 222, z: 932},
            {x: 190, z: 942},
            {x: 188, z: 957},
            {x: 179, z: 958},
            {x: 179, z: 946},
            {x: 167, z: 959},
            {x: 154, z: 928},
            {x: 103, z: 917},
            {x: 78, z: 923},
            {x: 90, z: 954},
            {x: 70, z: 1048},
            {x: 78, z: 1064},
            {x: 48, z: 1090},
            {x: 82, z: 1112},
            {x: 52, z: 1137},
            {x: 66, z: 1158},
            {x: 37, z: 1157},
            {x: 41, z: 1185},
            {x: 52, z: 1188},
            {x: 58, z: 1257},
            {x: 119, z: 1343},
            {x: 118, z: 1385},
            {x: 108, z: 1397},
            {x: 108, z: 1538},
            {x: 122, z: 1570},
            {x: 125, z: 1616},
            {x: 160, z: 1681},
            {x: 277, z: 1684},
            {x: 304, z: 1692},
            {x: 330, z: 1716},
            {x: 338, z: 1758},
            {x: 335, z: 1781},
            {x: 307, z: 1847},
            {x: 300, z: 1968},
            {x: 288, z: 2012},
            {x: 263, z: 2027},
            {x: 221, z: 2084},
            {x: 144, z: 2142},
            {x: 112, z: 2142},
            {x: 87, z: 2101},
            {x: 16, z: 2096},
            {x: 3, z: 2111},
            {x: -61, z: 2145},
            {x: -62, z: 2193},
            {x: -100, z: 2258},
            {x: -107, z: 2336},
            {x: -106, z: 2413},
            {x: -115, z: 2476},
            {x: -110, z: 2524},
            {x: -127, z: 2560},
            {x: -119, z: 2611},
            {x: -140, z: 2648},
            {x: -143, z: 2667},
            {x: -188, z: 2708},
            {x: -202, z: 2717},
            {x: -217, z: 2751},
            {x: -223, z: 2788},
            {x: -220, z: 2874},
            {x: -222, z: 2978},
            {x: -150, z: 2986},
            {x: -117, z: 3006},
            {x: -64, z: 3060},
            {x: -63, z: 3324},
            {x: -69, z: 3346},
            {x: -72, z: 3393},
            {x: -82, z: 3424},

            // Add more points along the road
        ]
    }
    // Add more roads as needed
};

// Configuration for different zoom levels
const zoomLevelConfig = [
    { minZoom: -6, maxZoom: -4, markerSpacing: 2000 },  // Far zoom - markers every 50 blocks
    { minZoom: -3, maxZoom: -2, markerSpacing: 1000 },  // Medium zoom - markers every 25 blocks
    { minZoom: -1, maxZoom: 1, markerSpacing: 500 },    // Close zoom - markers every 15 blocks
    { minZoom: 2, maxZoom: 3, markerSpacing: 100 }    // Close zoom - markers every 15 blocks
];

// Function to calculate distance between two points
function distance(point1, point2) {
    const dx = point2.x - point1.x;
    const dz = point2.z - point1.z;
    return Math.sqrt(dx * dx + dz * dz);
}

// Function to interpolate points between two key points
function interpolatePoints(point1, point2, spacing) {
    const points = [];
    const dist = distance(point1, point2);
    
    if (dist <= spacing) {
        // If points are already close enough, just return them
        return [point1, point2];
    }
    
    // Calculate how many points to add between the two key points
    const numPoints = Math.floor(dist / spacing);
    
    // Add interpolated points
    for (let i = 0; i <= numPoints; i++) {
        const ratio = i / numPoints;
        const x = point1.x + (point2.x - point1.x) * ratio;
        const z = point1.z + (point2.z - point1.z) * ratio;
        points.push({x, z});
    }
    
    return points;
}

// Function to generate road markers based on zoom levels
function generateInterpolatedRoadMarkers() {
    const dynamicMarkers = [];

    Object.entries(roadSegments).forEach(([roadName, road]) => {
        zoomLevelConfig.forEach(config => {
            const { minZoom, maxZoom, markerSpacing } = config;

            const path = road.keyPoints;
            const distances = [];
            let totalLength = 0;

            // Precompute distances between keyPoints
            for (let i = 0; i < path.length - 1; i++) {
                const d = distance(path[i], path[i + 1]);
                distances.push(d);
                totalLength += d;
            }

            // Number of markers we want
            const numMarkers = Math.floor(totalLength / markerSpacing);

            // Walk the polyline at regular intervals
            let currentSegment = 0;
            let segmentStart = path[0];
            let segmentEnd = path[1];
            let segmentLength = distances[0];
            let walked = 0;

            for (let i = 0; i <= numMarkers; i++) {
                const targetDist = i * markerSpacing;

                while (walked + segmentLength < targetDist && currentSegment < path.length - 2) {
                    walked += segmentLength;
                    currentSegment++;
                    segmentStart = path[currentSegment];
                    segmentEnd = path[currentSegment + 1];
                    segmentLength = distances[currentSegment];
                }

                const localDist = targetDist - walked;
                const t = localDist / segmentLength;

                const x = segmentStart.x + (segmentEnd.x - segmentStart.x) * t;
                const z = segmentStart.z + (segmentEnd.z - segmentStart.z) * t;

                dynamicMarkers.push({
                    x, z,
                    image: road.icon,
                    imageAnchor: [0.5, 1],
                    imageScale: road.scale,
                    english: road.textEn,
                    japanese: road.textJa,
                    textColor: road.textColor,
                    offsetX: 0,
                    offsetY: road.yOffset,
                    font: road.font,
                    minZoom: minZoom,
                    maxZoom: maxZoom
                });
            }
        });
    });

    return dynamicMarkers;
}

const markerTypes = {
    "chasm": {
        image: "chasm.png",
        imageAnchor: [0.3, 0.3],
        imageScale: 0.04,
        minZoom: -2,
        maxZoom: 3
    },
    "cave": {
        image: "cave.png",
        imageAnchor: [0.5, 1],
        imageScale: 0.03,
        minZoom: -2,
        maxZoom: 3
    }
    
};
const markerCoordinates = {
    "chasm": [
        {x: -10, z: 1},//spawn
        {x: -91, z: -109},//piano circuit
        {x: -117, z: 122},//silverton
        {x: -278, z: 503},//rianu
        {x: -484, z: 537},//charo
        {x: -855, z: 880},//air castle
        {x: -823, z: 654},//aquarium
        {x: -1060, z: 711},//sekisui
        {x: -1998, z: 738},//integrity
        {x: -2010, z: 295},
        {x: -672, z: -794},//juelsman
        {x: -5, z: -523},//route 1
        {x: -203, z: -1635},
        {x: 148, z: -2283},
        {x: 371, z: -4380},
        {x: 1404, z: -9772},

        {x: 3986, z: -12314},//1st pale garden

        {x: 13623, z: 7},//pigman forest
        {x: 13879, z: 403},//airs tower
        {x: 13815, z: 572},//hitsuji castle

        {x: 15067, z: -999},//airs pyramid

        {x: 14513, z: 6801},//mansion
    ],
    "cave": [
        
    ]
};
function generateLocationMarkers() {
    let generatedMarkers = [];
    
    // For each marker type
    Object.entries(markerCoordinates).forEach(([type, coordinates]) => {
        // Get the properties for this marker type
        const props = markerTypes[type];
        
        // If we have properties defined and coordinates to use
        if (props && coordinates && coordinates.length > 0) {
            // Generate a marker for each coordinate
            coordinates.forEach(coord => {
                generatedMarkers.push({
                    x: coord.x,
                    z: coord.z,
                    image: props.image,
                    imageAnchor: props.imageAnchor,
                    imageScale: props.imageScale,
                    minZoom: props.minZoom,
                    maxZoom: props.maxZoom
                });
            });
        }
    });
    
    return generatedMarkers;
}

const interpolatedRoadMarkers = generateInterpolatedRoadMarkers();
UnminedCustomMarkers.markersData = UnminedCustomMarkers.markersData.concat(interpolatedRoadMarkers);
UnminedCustomMarkers.markersData = UnminedCustomMarkers.markersData.concat(generateLocationMarkers());