document.addEventListener("DOMContentLoaded", function () {
  // Simulate reading from a CSV file (replace this with actual CSV reading)
  const df = [
  {
    "PLU Code": 3001,
    "Name": "Small Aurora/Southern Rose Apples"
  },
  {
    "PLU Code": 3002,
    "Name": "Cantared Apples"
  },
  {
    "PLU Code": 3003,
    "Name": "D'Estivale Apples"
  },
  {
    "PLU Code": 3004,
    "Name": "Discovery Apples"
  },
  {
    "PLU Code": 3005,
    "Name": "Golden Delicious Blush Apples"
  },
  {
    "PLU Code": 3006,
    "Name": "Ingrid Marie Apples"
  },
  {
    "PLU Code": 3007,
    "Name": "Lochbuie Apples"
  },
  {
    "PLU Code": 3008,
    "Name": "Rubinette Apples"
  },
  {
    "PLU Code": 3009,
    "Name": "Russet Apples"
  },
  {
    "PLU Code": 3010,
    "Name": "Small Cripps Red Apples"
  },
  {
    "PLU Code": 3011,
    "Name": "Worcester Apples"
  },
  {
    "PLU Code": 3012,
    "Name": "Abate Fetel Pears"
  },
  {
    "PLU Code": 3013,
    "Name": "Beurre Hardy Pears"
  },
  {
    "PLU Code": 3014,
    "Name": "Bon Rouge Pears"
  },
  {
    "PLU Code": 3015,
    "Name": "Clara Friis Pears"
  },
  {
    "PLU Code": 3016,
    "Name": "Concorde Pears"
  },
  {
    "PLU Code": 3017,
    "Name": "Conference Pears"
  },
  {
    "PLU Code": 3018,
    "Name": "Durondeau Pears"
  },
  {
    "PLU Code": 3019,
    "Name": "Flamingo Pears"
  },
  {
    "PLU Code": 3020,
    "Name": "General Leclerc Pears"
  },
  {
    "PLU Code": 3021,
    "Name": "Guyot Pears"
  },
  {
    "PLU Code": 3022,
    "Name": "Josephine Pears"
  },
  {
    "PLU Code": 3023,
    "Name": "Small Passe Crassane Pears"
  },
  {
    "PLU Code": 3024,
    "Name": "Rocha Pears"
  },
  {
    "PLU Code": 3025,
    "Name": "Rosemarie Pears"
  },
  {
    "PLU Code": 3026,
    "Name": "Triumph de Vienne Pears"
  },
  {
    "PLU Code": 3027,
    "Name": "Shamouti Oranges"
  },
  {
    "PLU Code": 3028,
    "Name": "Small Delta Seedless Oranges"
  },
  {
    "PLU Code": 3029,
    "Name": "Satsuma Tangerines/mandarins"
  },
  {
    "PLU Code": 3030,
    "Name": "Nova (includes Clemenvilla, Suntina) Tangerines/mandarins"
  },
  {
    "PLU Code": 3031,
    "Name": "Jamaican Tangor (includes Ortanique, Mandor, Mandora, Tambor, Topaz, Ortanline) Tangerines/mandarins"
  },
  {
    "PLU Code": 3032,
    "Name": "Ellendale Tangerines/mandarins"
  },
  {
    "PLU Code": 3033,
    "Name": "Small Charentais Melon"
  },
  {
    "PLU Code": 3034,
    "Name": "Large Charentais Melon"
  },
  {
    "PLU Code": 3035,
    "Name": "Large White Flesh, Tree Ripened, Ready-to-eat Nectarine"
  },
  {
    "PLU Code": 3036,
    "Name": "Small Midknight Oranges"
  },
  {
    "PLU Code": 3037,
    "Name": "Queen Pineapple"
  },
  {
    "PLU Code": 3038,
    "Name": "Granadilla, Orange Passion fruit"
  },
  {
    "PLU Code": 3039,
    "Name": "Physalis/cape gooseberry/ground cherry"
  },
  {
    "PLU Code": 3040,
    "Name": "Red (skin color) Pitahaya"
  },
  {
    "PLU Code": 3041,
    "Name": "Rambutan"
  },
  {
    "PLU Code": 3042,
    "Name": "Mangosteen"
  },
  {
    "PLU Code": 3043,
    "Name": "Italia, Seeded Grapes"
  },
  {
    "PLU Code": 3044,
    "Name": "Black Velvet Apricots"
  },
  {
    "PLU Code": 3045,
    "Name": "Fresh, On Branch Dates"
  },
  {
    "PLU Code": 3046,
    "Name": "Fresh, Frozen Dates"
  },
  {
    "PLU Code": 3047,
    "Name": "Medjool Dates"
  },
  {
    "PLU Code": 3048,
    "Name": "Helda/Flat Beans"
  },
  {
    "PLU Code": 3049,
    "Name": "Fine Beans"
  },
  {
    "PLU Code": 3050,
    "Name": "Dutch White/Winter White Cabbage"
  },
  {
    "PLU Code": 3051,
    "Name": "Spring Cabbage/Spring Greens Cabbage"
  },
  {
    "PLU Code": 3052,
    "Name": "String Garlic"
  },
  {
    "PLU Code": 3053,
    "Name": "Baby Parsnip"
  },
  {
    "PLU Code": 3054,
    "Name": "Elongated (Clovis Red/Lamuyo Red) Peppers (capsicums)"
  },
  {
    "PLU Code": 3055,
    "Name": "Elongated (Clovis Green/Lamuyo Green) Peppers (capsicums)"
  },
  {
    "PLU Code": 3056,
    "Name": "Elongated (Clovis Yellow/Lamuyo Yellow) Peppers (capsicums)"
  },
  {
    "PLU Code": 3057,
    "Name": "Elongated (Clovis Orange/Lamuyo Orange) Peppers (capsicums)"
  },
  {
    "PLU Code": 3058,
    "Name": "Elongated (Clovis White/Lamuyo White) Peppers (capsicums)"
  },
  {
    "PLU Code": 3059,
    "Name": "Crown Prince Squash"
  },
  {
    "PLU Code": 3060,
    "Name": "Vegetable Marrow Squash"
  },
  {
    "PLU Code": 3061,
    "Name": "Beef/Beefsteak Tomatoes"
  },
  {
    "PLU Code": 3062,
    "Name": "Bay leaves"
  },
  {
    "PLU Code": 3063,
    "Name": "Fennel leaves"
  },
  {
    "PLU Code": 3064,
    "Name": "Aloe vera leaves"
  },
  {
    "PLU Code": 3065,
    "Name": "Small Cameo Apples"
  },
  {
    "PLU Code": 3066,
    "Name": "Large Cameo Apples"
  },
  {
    "PLU Code": 3067,
    "Name": "Small Swiss Gourmet Apples"
  },
  {
    "PLU Code": 3068,
    "Name": "Large Swiss Gourmet Apples"
  },
  {
    "PLU Code": 3069,
    "Name": "Small Gravenstein, Red Apples"
  },
  {
    "PLU Code": 3070,
    "Name": "Large Gravenstein, Red Apples"
  },
  {
    "PLU Code": 3071,
    "Name": "Granny Smith, Red Apples"
  },
  {
    "PLU Code": 3072,
    "Name": "Lady Apples"
  },
  {
    "PLU Code": 3073,
    "Name": "Macoun Apples"
  },
  {
    "PLU Code": 3074,
    "Name": "Greening (RI) Apples"
  },
  {
    "PLU Code": 3075,
    "Name": "Baldwin Apples"
  },
  {
    "PLU Code": 3076,
    "Name": "Melrose Apples"
  },
  {
    "PLU Code": 3077,
    "Name": "Northern Spy Apples"
  },
  {
    "PLU Code": 3078,
    "Name": "Liberty Apples"
  },
  {
    "PLU Code": 3079,
    "Name": "Purple Asparagus"
  },
  {
    "PLU Code": 3080,
    "Name": "Pinkerton Avocados"
  },
  {
    "PLU Code": 3081,
    "Name": "Saskatoon Berries"
  },
  {
    "PLU Code": 3082,
    "Name": "Crowns Broccoli"
  },
  {
    "PLU Code": 3083,
    "Name": "Stalk Brussels sprouts"
  },
  {
    "PLU Code": 3084,
    "Name": "Chervil"
  },
  {
    "PLU Code": 3085,
    "Name": "Large Indian, Decorative Corn"
  },
  {
    "PLU Code": 3086,
    "Name": "Mini Indian. Decorative Corn"
  },
  {
    "PLU Code": 3087,
    "Name": "Indian, Strawberry Corn"
  },
  {
    "PLU Code": 3088,
    "Name": "Red Currants"
  },
  {
    "PLU Code": 3089,
    "Name": "Chinese Eggplant (aubergine)"
  },
  {
    "PLU Code": 3090,
    "Name": "Thai Eggplant (aubergine)"
  },
  {
    "PLU Code": 3091,
    "Name": "Gobo root/burdock"
  },
  {
    "PLU Code": 3092,
    "Name": "OroBlanco/Sweetie Grapefruit"
  },
  {
    "PLU Code": 3093,
    "Name": "Retailer Assigned Grapes"
  },
  {
    "PLU Code": 3094,
    "Name": "Retailer Assigned Grapes"
  },
  {
    "PLU Code": 3095,
    "Name": "Multicolor Kale"
  },
  {
    "PLU Code": 3096,
    "Name": "Purple/Red/All Other Colors Kohlrabi"
  },
  {
    "PLU Code": 3097,
    "Name": "Romaine, Red Lettuce"
  },
  {
    "PLU Code": 3098,
    "Name": "Boston, Red Lettuce"
  },
  {
    "PLU Code": 3099,
    "Name": "Lotus root"
  },
  {
    "PLU Code": 3100,
    "Name": "Gold Honeydew Melon"
  },
  {
    "PLU Code": 3101,
    "Name": "Piel de Sapo Melon"
  },
  {
    "PLU Code": 3102,
    "Name": "Morel Mushrooms"
  },
  {
    "PLU Code": 3103,
    "Name": "Enoki Mushrooms"
  },
  {
    "PLU Code": 3104,
    "Name": "RoHo 3615 Apples"
  },
  {
    "PLU Code": 3105,
    "Name": "Cashews"
  },
  {
    "PLU Code": 3106,
    "Name": "Macadamia"
  },
  {
    "PLU Code": 3107,
    "Name": "Medium Navel Oranges"
  },
  {
    "PLU Code": 3108,
    "Name": "Medium Valencia Oranges"
  },
  {
    "PLU Code": 3109,
    "Name": "Seville (Marmalade type) Oranges"
  },
  {
    "PLU Code": 3110,
    "Name": "Navel, Cara Cara (Red) Oranges"
  },
  {
    "PLU Code": 3111,
    "Name": "Red-Fleshed (Solo Sunrise) Papaya/pawpaw"
  },
  {
    "PLU Code": 3112,
    "Name": "Meridol Papaya/pawpaw"
  },
  {
    "PLU Code": 3113,
    "Name": "Flat White Flesh (Saturn type) Peaches"
  },
  {
    "PLU Code": 3114,
    "Name": "Extra Large Green Mango"
  },
  {
    "PLU Code": 3115,
    "Name": "Flat Yellow Flesh Peaches"
  },
  {
    "PLU Code": 3116,
    "Name": "Small Yellow Flesh (Tree Ripened/Ready-to-eat) Peaches"
  },
  {
    "PLU Code": 3117,
    "Name": "Large Yellow Flesh (Tree Ripened/Ready-to-eat) Peaches"
  },
  {
    "PLU Code": 3118,
    "Name": "Starkrimson Pears"
  },
  {
    "PLU Code": 3119,
    "Name": "Small Bell, Greenhouse - Green Peppers (capsicums)"
  },
  {
    "PLU Code": 3120,
    "Name": "Large Bell, Greenhouse - Green Peppers (capsicums)"
  },
  {
    "PLU Code": 3121,
    "Name": "Bell, Greenhouse - Orange Peppers (capsicums)"
  },
  {
    "PLU Code": 3122,
    "Name": "Bell, Greenhouse - White Peppers (capsicums)"
  },
  {
    "PLU Code": 3123,
    "Name": "Bell, Greenhouse - Brown Peppers (capsicums)"
  },
  {
    "PLU Code": 3124,
    "Name": "Bell, Greenhouse - Purple Peppers (capsicums)"
  },
  {
    "PLU Code": 3125,
    "Name": "Habanero Peppers (capsicums)"
  },
  {
    "PLU Code": 3126,
    "Name": "Retailer Assigned Plumcot (interspecific plum)"
  },
  {
    "PLU Code": 3127,
    "Name": "Medium Pomegranate"
  },
  {
    "PLU Code": 3128,
    "Name": "Purple Potato"
  },
  {
    "PLU Code": 3129,
    "Name": "Pummelo - Red Grapefruit"
  },
  {
    "PLU Code": 3130,
    "Name": "Jumbo Pumpkin"
  },
  {
    "PLU Code": 3131,
    "Name": "Decorative (Painted) Pumpkin"
  },
  {
    "PLU Code": 3132,
    "Name": "White Pumpkin"
  },
  {
    "PLU Code": 3133,
    "Name": "White - Mini Pumpkin"
  },
  {
    "PLU Code": 3134,
    "Name": "Pie Pumpkin Pumpkin"
  },
  {
    "PLU Code": 3135,
    "Name": "Ornamental Gourd"
  },
  {
    "PLU Code": 3136,
    "Name": "Sapodillo/nispero"
  },
  {
    "PLU Code": 3137,
    "Name": "White Sapote"
  },
  {
    "PLU Code": 3138,
    "Name": "Black Sapote"
  },
  {
    "PLU Code": 3139,
    "Name": "Savory"
  },
  {
    "PLU Code": 3140,
    "Name": "Cucuzza Squash"
  },
  {
    "PLU Code": 3141,
    "Name": "Opo Squash"
  },
  {
    "PLU Code": 3142,
    "Name": "Carnival Squash"
  },
  {
    "PLU Code": 3143,
    "Name": "Acorn - baby Squash"
  },
  {
    "PLU Code": 3144,
    "Name": "Fall Glo Tangerines/mandarins"
  },
  {
    "PLU Code": 3145,
    "Name": "Plum/Italian/Saladette/Roma (Yellow) Tomatoes"
  },
  {
    "PLU Code": 3146,
    "Name": "Cherry - Red, On the Vine Tomatoes"
  },
  {
    "PLU Code": 3147,
    "Name": "Cherry - Yellow, On the Vine Tomatoes"
  },
  {
    "PLU Code": 3148,
    "Name": "Regular - Yelllow, On the Vine (Truss) Tomatoes"
  },
  {
    "PLU Code": 3149,
    "Name": "Regular - Orange, On the Vine Tomatoes"
  },
  {
    "PLU Code": 3150,
    "Name": "Cocktail/Intermediate - Red Tomatoes"
  },
  {
    "PLU Code": 3151,
    "Name": "Large Vine Ripe, Regular - Red Tomatoes"
  },
  {
    "PLU Code": 3152,
    "Name": "Melogold Grapefruit"
  },
  {
    "PLU Code": 3153,
    "Name": "Medium Delta Seedless Oranges"
  },
  {
    "PLU Code": 3154,
    "Name": "Large Delta Seedless Oranges"
  },
  {
    "PLU Code": 3155,
    "Name": "Medium Midknight Oranges"
  },
  {
    "PLU Code": 3156,
    "Name": "Large Midknight Oranges"
  },
  {
    "PLU Code": 3157,
    "Name": "Extra Large White Grapefruit"
  },
  {
    "PLU Code": 3158,
    "Name": "Extra Large White Grapefruit"
  },
  {
    "PLU Code": 3159,
    "Name": "Extra Large White Grapefruit"
  },
  {
    "PLU Code": 3160,
    "Name": "Synonymous with Chinese Broccoli Gai lan"
  },
  {
    "PLU Code": 3161,
    "Name": "Baby - Chinese or Indian Mustard Gai (gui) choy (chinese or indian mustard)"
  },
  {
    "PLU Code": 3162,
    "Name": "Synonymous with Water Spinach Ong choy"
  },
  {
    "PLU Code": 3163,
    "Name": "Shanghai Bok choy (pak choi)"
  },
  {
    "PLU Code": 3164,
    "Name": "Yu choy"
  },
  {
    "PLU Code": 3165,
    "Name": "Treviso Radicchio"
  },
  {
    "PLU Code": 3166,
    "Name": "Tuscan Cabbage"
  },
  {
    "PLU Code": 3167,
    "Name": "Frisee"
  },
  {
    "PLU Code": 3168,
    "Name": "Castlefranco Radicchio"
  },
  {
    "PLU Code": 3169,
    "Name": "Catalogna Lettuce"
  },
  {
    "PLU Code": 3170,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3171,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3172,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3173,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3174,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3175,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3176,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3177,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3178,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3179,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3180,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3181,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3182,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3183,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3184,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3185,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3186,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3187,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3188,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3189,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3190,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3191,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3192,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3193,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3194,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3195,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3196,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3197,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3198,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3199,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3200,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3201,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3202,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3203,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3204,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3205,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3206,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3207,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3208,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3209,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3210,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3211,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3212,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3213,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3214,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3215,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3216,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3217,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3218,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3219,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3220,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3221,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3222,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3223,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3224,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3225,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3226,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3227,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3228,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3229,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3230,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3231,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3232,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3233,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3234,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3235,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3236,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3237,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3238,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3239,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3240,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3241,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3242,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3243,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3244,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3245,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3246,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3247,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3248,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3249,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3250,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3251,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3252,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3253,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3254,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3255,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3256,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3257,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3258,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3259,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3260,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3261,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3262,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3263,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3264,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3265,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3266,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3267,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3268,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3269,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3270,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 3271,
    "Name": "Virginia Gold Apples"
  },
  {
    "PLU Code": 3272,
    "Name": "Sommerfeld Apples"
  },
  {
    "PLU Code": 3273,
    "Name": "Golden Beets"
  },
  {
    "PLU Code": 3274,
    "Name": "Fresh Prunes"
  },
  {
    "PLU Code": 3275,
    "Name": "Yellow (nyAH-may) Name"
  },
  {
    "PLU Code": 3276,
    "Name": "White (nyAH-may) Name"
  },
  {
    "PLU Code": 3277,
    "Name": "Baby Broccoli"
  },
  {
    "PLU Code": 3278,
    "Name": "Plumcot (interspecific plum)"
  },
  {
    "PLU Code": 3279,
    "Name": "Golden Kiwifruit"
  },
  {
    "PLU Code": 3280,
    "Name": "Jumbo Regular Kiwifruit"
  },
  {
    "PLU Code": 3281,
    "Name": "Orange Seedless Watermelon"
  },
  {
    "PLU Code": 3282,
    "Name": "Plum/Italian/Saladette/Roma on the vine - Red Tomatoes"
  },
  {
    "PLU Code": 3283,
    "Name": "Honeycrisp Apples"
  },
  {
    "PLU Code": 3284,
    "Name": "Extra Large Red Delicious Apples"
  },
  {
    "PLU Code": 3285,
    "Name": "Extra Large Golden Delicious Apples"
  },
  {
    "PLU Code": 3286,
    "Name": "Sweet red Italian - flat Onions"
  },
  {
    "PLU Code": 3287,
    "Name": "Hawaiian plantain Bananas"
  },
  {
    "PLU Code": 3288,
    "Name": "Retailer Assigned Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 3289,
    "Name": "Sprite Melon"
  },
  {
    "PLU Code": 3290,
    "Name": "Large Aurora/Southern Rose Apples"
  },
  {
    "PLU Code": 3291,
    "Name": "Small Boskoop/Belle de Boskoop Apples"
  },
  {
    "PLU Code": 3292,
    "Name": "Large Boskoop/Belle de Boskoop Apples"
  },
  {
    "PLU Code": 3293,
    "Name": "Small Scifresh Apples"
  },
  {
    "PLU Code": 3294,
    "Name": "Large Scifresh Apples"
  },
  {
    "PLU Code": 3295,
    "Name": "Small Sciearly Apples"
  },
  {
    "PLU Code": 3296,
    "Name": "Large Sciearly Apples"
  },
  {
    "PLU Code": 3297,
    "Name": "Scired Apples"
  },
  {
    "PLU Code": 3298,
    "Name": "Redfield Apples"
  },
  {
    "PLU Code": 3299,
    "Name": "Small Sonya Apples"
  },
  {
    "PLU Code": 3300,
    "Name": "Large Sonya Apples"
  },
  {
    "PLU Code": 3301,
    "Name": "Large Cripps Red Apples"
  },
  {
    "PLU Code": 3302,
    "Name": "Large Regular Apricots"
  },
  {
    "PLU Code": 3303,
    "Name": "Babaco"
  },
  {
    "PLU Code": 3304,
    "Name": "Loganberries Berries"
  },
  {
    "PLU Code": 3305,
    "Name": "Black Currants"
  },
  {
    "PLU Code": 3306,
    "Name": "Medium Charentais Melon"
  },
  {
    "PLU Code": 3307,
    "Name": "Extra Large Charentais Melon"
  },
  {
    "PLU Code": 3308,
    "Name": "Watermelon"
  },
  {
    "PLU Code": 3309,
    "Name": "Lima Oranges"
  },
  {
    "PLU Code": 3310,
    "Name": "Pera Oranges"
  },
  {
    "PLU Code": 3311,
    "Name": "Curuba/Banana Passion fruit"
  },
  {
    "PLU Code": 3312,
    "Name": "Granadilla - Yellow/Maracuja Passion fruit"
  },
  {
    "PLU Code": 3313,
    "Name": "Small White Flesh - Tree Ripened/ Ready-to-eat Peaches"
  },
  {
    "PLU Code": 3314,
    "Name": "Large White Flesh - Tree Ripened/ Ready-to-eat Peaches"
  },
  {
    "PLU Code": 3315,
    "Name": "Small Scilate Apples"
  },
  {
    "PLU Code": 3316,
    "Name": "Carmen Pears"
  },
  {
    "PLU Code": 3317,
    "Name": "Angelys Pears"
  },
  {
    "PLU Code": 3318,
    "Name": "Large Passe Crassane Pears"
  },
  {
    "PLU Code": 3319,
    "Name": "Yellow (skin color) Pitahaya"
  },
  {
    "PLU Code": 3320,
    "Name": "Romanesco/Broccoflower/Caulibroc Cauliflower"
  },
  {
    "PLU Code": 3321,
    "Name": "With leaves attached Celery root/celeriac"
  },
  {
    "PLU Code": 3322,
    "Name": "Choy sum/pak choi sum"
  },
  {
    "PLU Code": 3323,
    "Name": "Baby Choy sum/pak choi sum"
  },
  {
    "PLU Code": 3324,
    "Name": "Red Escarole/batavian chicory"
  },
  {
    "PLU Code": 3325,
    "Name": "Lollo Bionda/Coral - Green Lettuce"
  },
  {
    "PLU Code": 3326,
    "Name": "Lollo Rossa/Coral - Red Lettuce"
  },
  {
    "PLU Code": 3327,
    "Name": "Mignonette (Compact red-tinged butterhead varieties) Lettuce"
  },
  {
    "PLU Code": 3328,
    "Name": "Mixed small-leaf salad (eg Sucrine, Mesclun, Rocket/Arugula) Lettuce"
  },
  {
    "PLU Code": 3329,
    "Name": "Oak Leaf - Green Lettuce"
  },
  {
    "PLU Code": 3330,
    "Name": "Oak Leaf - Reg Lettuce"
  },
  {
    "PLU Code": 3331,
    "Name": "Red Fresh - Bunch Onions"
  },
  {
    "PLU Code": 3332,
    "Name": "Baby Spinach"
  },
  {
    "PLU Code": 3333,
    "Name": "Small Red/Orangy White Flesh Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 3334,
    "Name": "Large Red/Orangy White Flesh Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 3335,
    "Name": "Cocktail/Intermediate - Red/On the Vine (Truss) Tomatoes"
  },
  {
    "PLU Code": 3336,
    "Name": "Cocktail/Intermediate - Red/Plum/Italian/Saladette/Roma/On the Vine (Truss) Tomatoes"
  },
  {
    "PLU Code": 3337,
    "Name": "(Dried Fruit) Figs"
  },
  {
    "PLU Code": 3338,
    "Name": "Anise"
  },
  {
    "PLU Code": 3339,
    "Name": "Belchard - Chantecler Apples"
  },
  {
    "PLU Code": 3340,
    "Name": "Bertanne/Golden Russet Apples"
  },
  {
    "PLU Code": 3341,
    "Name": "Charles Ross Apples"
  },
  {
    "PLU Code": 3342,
    "Name": "Delblush Apples"
  },
  {
    "PLU Code": 3343,
    "Name": "Dessert Apples"
  },
  {
    "PLU Code": 3344,
    "Name": "Small Gloster Apples"
  },
  {
    "PLU Code": 3345,
    "Name": "Large Gloster Apples"
  },
  {
    "PLU Code": 3346,
    "Name": "Holstein Apples"
  },
  {
    "PLU Code": 3347,
    "Name": "Laxtons Fortune Apples"
  },
  {
    "PLU Code": 3348,
    "Name": "Lord Lambourne Apples"
  },
  {
    "PLU Code": 3349,
    "Name": "Michaelmas Red Apples"
  },
  {
    "PLU Code": 3350,
    "Name": "Small Reine des Reinettes/King of the Pippins Apples"
  },
  {
    "PLU Code": 3351,
    "Name": "Large Reine des Reinettes/King of the Pippins Apples"
  },
  {
    "PLU Code": 3352,
    "Name": "Reinettes and Heritage varieties - (incl Canada blanc Reinette du Mans, Armorique/du Vigan/Calville Apples"
  },
  {
    "PLU Code": 3353,
    "Name": "St Edmunds Pippin Apples"
  },
  {
    "PLU Code": 3354,
    "Name": "Ripe/Ready-to-Eat Avocados"
  },
  {
    "PLU Code": 3355,
    "Name": "Strawberries - Nominal 500g/1 litre Berries"
  },
  {
    "PLU Code": 3356,
    "Name": "Strawberries - Nominal250g/1/2 litre Berries"
  },
  {
    "PLU Code": 3357,
    "Name": "Small Regular/Red/Black Cherries"
  },
  {
    "PLU Code": 3358,
    "Name": "Large Regular/Red/Black Cherries"
  },
  {
    "PLU Code": 3359,
    "Name": "Chasselas Grapes"
  },
  {
    "PLU Code": 3360,
    "Name": "Muscat de Hambourg Grapes"
  },
  {
    "PLU Code": 3361,
    "Name": "Without p/harvest treatment Grapefruit"
  },
  {
    "PLU Code": 3362,
    "Name": "Without postharvest treatment Lemons"
  },
  {
    "PLU Code": 3363,
    "Name": "Kensington Pride Mango"
  },
  {
    "PLU Code": 3364,
    "Name": "R2E2 Mango"
  },
  {
    "PLU Code": 3365,
    "Name": "Ripe/Ready-to-Eat Mango"
  },
  {
    "PLU Code": 3366,
    "Name": "Madroña"
  },
  {
    "PLU Code": 3367,
    "Name": "Glasshouse - Netted varieties Melon"
  },
  {
    "PLU Code": 3368,
    "Name": "Ogen Melon"
  },
  {
    "PLU Code": 3369,
    "Name": "Nectavigne (Red Flesh) Nectarine"
  },
  {
    "PLU Code": 3370,
    "Name": "Maltaise Oranges"
  },
  {
    "PLU Code": 3371,
    "Name": "Salustiana Oranges"
  },
  {
    "PLU Code": 3372,
    "Name": "Navelate (and other late Navel varieties) Oranges"
  },
  {
    "PLU Code": 3373,
    "Name": "Navelina (incl. Newhall) Oranges"
  },
  {
    "PLU Code": 3374,
    "Name": "Without postharvest treatment Oranges"
  },
  {
    "PLU Code": 3375,
    "Name": "de Vigne & Sanguine (Red Flesh) Peaches"
  },
  {
    "PLU Code": 3376,
    "Name": "Alexander Lucas Pears"
  },
  {
    "PLU Code": 3377,
    "Name": "Louise Bonne Pears"
  },
  {
    "PLU Code": 3378,
    "Name": "Santa Maria Pears"
  },
  {
    "PLU Code": 3379,
    "Name": "Mini Pineapple"
  },
  {
    "PLU Code": 3380,
    "Name": "Perola Pineapple"
  },
  {
    "PLU Code": 3381,
    "Name": "Soursop"
  },
  {
    "PLU Code": 3382,
    "Name": "Sugar apple"
  },
  {
    "PLU Code": 3383,
    "Name": "Small Clementine Tangerines/mandarins"
  },
  {
    "PLU Code": 3384,
    "Name": "Medium Clementine Tangerines/mandarins"
  },
  {
    "PLU Code": 3385,
    "Name": "Large Clementine Tangerines/mandarins"
  },
  {
    "PLU Code": 3386,
    "Name": "Clementine (With leaves attached) Tangerines/mandarins"
  },
  {
    "PLU Code": 3387,
    "Name": "Clementine (Without p/harvest treatment) Tangerines/mandarins"
  },
  {
    "PLU Code": 3388,
    "Name": "Satsuma -Clauselina Tangerines/mandarins"
  },
  {
    "PLU Code": 3389,
    "Name": "Satsuma Tangerines/mandarins"
  },
  {
    "PLU Code": 3390,
    "Name": "Arracach"
  },
  {
    "PLU Code": 3391,
    "Name": "Rouge Salambo (Red) Artichokes"
  },
  {
    "PLU Code": 3392,
    "Name": "Green - Bunch Asparagus"
  },
  {
    "PLU Code": 3393,
    "Name": "White - Bunch Asparagus"
  },
  {
    "PLU Code": 3394,
    "Name": "Purple - Bunch Asparagus"
  },
  {
    "PLU Code": 3395,
    "Name": "Red Belgian endive (witloof chicory)"
  },
  {
    "PLU Code": 3396,
    "Name": "Savoy, Red Cabbage"
  },
  {
    "PLU Code": 3397,
    "Name": "Summer Cabbage - Pointed type Cabbage"
  },
  {
    "PLU Code": 3398,
    "Name": "Chickpeas/Garbanzo Chickpeas"
  },
  {
    "PLU Code": 3399,
    "Name": "Regular - Fresh/Semi-dried with leaves attached Garlic"
  },
  {
    "PLU Code": 3400,
    "Name": "Regular - Smoked Garlic"
  },
  {
    "PLU Code": 3401,
    "Name": "One-clove types Garlic"
  },
  {
    "PLU Code": 3402,
    "Name": "Regular - Bunch Leeks"
  },
  {
    "PLU Code": 3403,
    "Name": "Baby - Bunch Leeks"
  },
  {
    "PLU Code": 3404,
    "Name": "Cep Mushrooms"
  },
  {
    "PLU Code": 3405,
    "Name": "Fairy Ring Champignon Mushrooms"
  },
  {
    "PLU Code": 3406,
    "Name": "Grey - Tricholoma Mushrooms"
  },
  {
    "PLU Code": 3407,
    "Name": "Grisette Mushrooms"
  },
  {
    "PLU Code": 3408,
    "Name": "Horn of Plenty/Black Trumpet Mushrooms"
  },
  {
    "PLU Code": 3409,
    "Name": "Pioppino Mushrooms"
  },
  {
    "PLU Code": 3410,
    "Name": "Saffron Milk-Cap Mushrooms"
  },
  {
    "PLU Code": 3411,
    "Name": "Sheep Polypore Mushrooms"
  },
  {
    "PLU Code": 3412,
    "Name": "Yellow/Brown Fresh - Bunch Onions"
  },
  {
    "PLU Code": 3413,
    "Name": "Tabasco Peppers (capsicums)"
  },
  {
    "PLU Code": 3414,
    "Name": "Baking - White Potato"
  },
  {
    "PLU Code": 3415,
    "Name": "Baking - Red and Red Eye varieties Potato"
  },
  {
    "PLU Code": 3416,
    "Name": "Bunch Rhubarb"
  },
  {
    "PLU Code": 3417,
    "Name": "New Zealand Spinach Spinach"
  },
  {
    "PLU Code": 3418,
    "Name": "Zucchini/Courgette - Round Squash"
  },
  {
    "PLU Code": 3419,
    "Name": "Borage"
  },
  {
    "PLU Code": 3420,
    "Name": "Belle du Jumet Pears"
  },
  {
    "PLU Code": 3421,
    "Name": "Mini Seedless Watermelon"
  },
  {
    "PLU Code": 3422,
    "Name": "InterSpecific Apricots"
  },
  {
    "PLU Code": 3423,
    "Name": "Heirloom Tomatoes"
  },
  {
    "PLU Code": 3424,
    "Name": "Purple/Red - Beta Sweet Carrots"
  },
  {
    "PLU Code": 3425,
    "Name": "Small Ellendale Tangerines/mandarins"
  },
  {
    "PLU Code": 3426,
    "Name": "Medium Ellendale Tangerines/mandarins"
  },
  {
    "PLU Code": 3427,
    "Name": "Large Ellendale Tangerines/mandarins"
  },
  {
    "PLU Code": 3428,
    "Name": "Small Honey/Murcott Tangerines/mandarins"
  },
  {
    "PLU Code": 3429,
    "Name": "Medium Honey/Murcott Tangerines/mandarins"
  },
  {
    "PLU Code": 3430,
    "Name": "Large Honey/Murcott Tangerines/mandarins"
  },
  {
    "PLU Code": 3431,
    "Name": "Small Imperial Tangerines/mandarins"
  },
  {
    "PLU Code": 3432,
    "Name": "Medium Imperial Tangerines/mandarins"
  },
  {
    "PLU Code": 3433,
    "Name": "Large Imperial Tangerines/mandarins"
  },
  {
    "PLU Code": 3434,
    "Name": "Tosca Pears"
  },
  {
    "PLU Code": 3435,
    "Name": "Pinova Apples"
  },
  {
    "PLU Code": 3436,
    "Name": "Orange Cauliflower"
  },
  {
    "PLU Code": 3437,
    "Name": "Flat Yellow Nectarine"
  },
  {
    "PLU Code": 3438,
    "Name": "Ambrosia Apples"
  },
  {
    "PLU Code": 3439,
    "Name": "White Flesh Flat Nectarine"
  },
  {
    "PLU Code": 3440,
    "Name": "Large Pomegranate"
  },
  {
    "PLU Code": 3441,
    "Name": "Butterkin Squash"
  },
  {
    "PLU Code": 3442,
    "Name": "New York 1 Apples"
  },
  {
    "PLU Code": 3443,
    "Name": "New York 2 Apples"
  },
  {
    "PLU Code": 3444,
    "Name": "Green Dragon Apples"
  },
  {
    "PLU Code": 3445,
    "Name": "DS 3 Apples"
  },
  {
    "PLU Code": 3446,
    "Name": "Kale sprouts"
  },
  {
    "PLU Code": 3447,
    "Name": "DS 22 Apples"
  },
  {
    "PLU Code": 3448,
    "Name": "Tip Top Cherries"
  },
  {
    "PLU Code": 3449,
    "Name": "Sugrathirteen Grapes"
  },
  {
    "PLU Code": 3450,
    "Name": "Sugranineteen Grapes"
  },
  {
    "PLU Code": 3451,
    "Name": "Sugrathirtyfour Grapes"
  },
  {
    "PLU Code": 3452,
    "Name": "Sugrathirtyfive Grapes"
  },
  {
    "PLU Code": 3453,
    "Name": "Galangal root"
  },
  {
    "PLU Code": 3454,
    "Name": "Green Jackfruit"
  },
  {
    "PLU Code": 3455,
    "Name": "Yellow Jackfruit"
  },
  {
    "PLU Code": 3456,
    "Name": "Winter Melon"
  },
  {
    "PLU Code": 3457,
    "Name": "President Plums"
  },
  {
    "PLU Code": 3458,
    "Name": "Cherry - Orange Tomatoes"
  },
  {
    "PLU Code": 3459,
    "Name": "Shiny Red Persimmon"
  },
  {
    "PLU Code": 3460,
    "Name": "Red Jonaprince Apples"
  },
  {
    "PLU Code": 3461,
    "Name": "Lady Williams Apples"
  },
  {
    "PLU Code": 3462,
    "Name": "Garlic/Chinese Chives"
  },
  {
    "PLU Code": 3463,
    "Name": "Amaranth/callaloo/een choy"
  },
  {
    "PLU Code": 3464,
    "Name": "B-74 Mango"
  },
  {
    "PLU Code": 3465,
    "Name": "Stripy Bell Peppers (capsicums)"
  },
  {
    "PLU Code": 3466,
    "Name": "Cape Rose Pears"
  },
  {
    "PLU Code": 3467,
    "Name": "Regal 13-82 Apples"
  },
  {
    "PLU Code": 3468,
    "Name": "Small Honeycrisp Apples"
  },
  {
    "PLU Code": 3469,
    "Name": "Sugrasixteen Grapes"
  },
  {
    "PLU Code": 3470,
    "Name": "Watermelon - Red, Small Seeds Melon"
  },
  {
    "PLU Code": 3471,
    "Name": "Baby Cactus leaves (nopales/cactus pads)"
  },
  {
    "PLU Code": 3472,
    "Name": "Sacred pepper"
  },
  {
    "PLU Code": 3473,
    "Name": "Epazote"
  },
  {
    "PLU Code": 3474,
    "Name": "Saffron Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 3475,
    "Name": "Peppermint Mint"
  },
  {
    "PLU Code": 3476,
    "Name": "Orange tree leaf"
  },
  {
    "PLU Code": 3477,
    "Name": "Papalo"
  },
  {
    "PLU Code": 3478,
    "Name": "Quelites"
  },
  {
    "PLU Code": 3479,
    "Name": "Chipilin leaf"
  },
  {
    "PLU Code": 3480,
    "Name": "Pumpkin vine"
  },
  {
    "PLU Code": 3481,
    "Name": "Xpelon"
  },
  {
    "PLU Code": 3482,
    "Name": "Rabbit herb"
  },
  {
    "PLU Code": 3483,
    "Name": "Purple herb"
  },
  {
    "PLU Code": 3484,
    "Name": "Dalinette Apples"
  },
  {
    "PLU Code": 3485,
    "Name": "Harovin Sundown Pears"
  },
  {
    "PLU Code": 3486,
    "Name": "CN121 Apples"
  },
  {
    "PLU Code": 3487,
    "Name": "MN 55 Apples"
  },
  {
    "PLU Code": 3488,
    "Name": "Extra Large Red Mango"
  },
  {
    "PLU Code": 3489,
    "Name": "Cepuna Pears"
  },
  {
    "PLU Code": 3490,
    "Name": "MAIA 1 Apples"
  },
  {
    "PLU Code": 3491,
    "Name": "ARRA FIFTEEN Grapes"
  },
  {
    "PLU Code": 3492,
    "Name": "ARRA TWENTYNINE Grapes"
  },
  {
    "PLU Code": 3493,
    "Name": "Tearless Sweet Onions"
  },
  {
    "PLU Code": 3494,
    "Name": "3-7 LBS Watermelon - Yellow Mini Seedless Melon"
  },
  {
    "PLU Code": 3495,
    "Name": "Celina Pears"
  },
  {
    "PLU Code": 3496,
    "Name": "IFG Core Red Seedless Grapes"
  },
  {
    "PLU Code": 3497,
    "Name": "IFG Core Black Seedless Grapes"
  },
  {
    "PLU Code": 3498,
    "Name": "IFG Core Green Seedless Grapes"
  },
  {
    "PLU Code": 3499,
    "Name": "IFG Novelty Red Seedless Grapes"
  },
  {
    "PLU Code": 3500,
    "Name": "IFG Novelty Black Seedless Grapes"
  },
  {
    "PLU Code": 3501,
    "Name": "IFG Novelty Green Seedless Grapes"
  },
  {
    "PLU Code": 3502,
    "Name": "ARRA TWENTYSEVEN Grapes"
  },
  {
    "PLU Code": 3503,
    "Name": "ARRA TWENTYEIGHT Grapes"
  },
  {
    "PLU Code": 3504,
    "Name": "ARRA THIRTY Grapes"
  },
  {
    "PLU Code": 3505,
    "Name": "ARRA THIRTYTWO Grapes"
  },
  {
    "PLU Code": 3506,
    "Name": "Sweet Scarlet Grapes"
  },
  {
    "PLU Code": 3507,
    "Name": "WA 38 Apples"
  },
  {
    "PLU Code": 3508,
    "Name": "Thomcord Grapes"
  },
  {
    "PLU Code": 3509,
    "Name": "GEM Avocados"
  },
  {
    "PLU Code": 3510,
    "Name": "Small Ambrosia Apples"
  },
  {
    "PLU Code": 3511,
    "Name": "WA 2 Apples"
  },
  {
    "PLU Code": 3512,
    "Name": "Round Tomatoes"
  },
  {
    "PLU Code": 3513,
    "Name": "Shinano Gold Apples"
  },
  {
    "PLU Code": 3514,
    "Name": "Fengapi Apples"
  },
  {
    "PLU Code": 3515,
    "Name": "Small PremA 153 Apples"
  },
  {
    "PLU Code": 3516,
    "Name": "Large PremA 153 Apples"
  },
  {
    "PLU Code": 3517,
    "Name": "Retailer Assigned - Gold Derivative Varieties Kiwifruit"
  },
  {
    "PLU Code": 3518,
    "Name": "Oksana Pears"
  },
  {
    "PLU Code": 3519,
    "Name": "R10-45 Apples"
  },
  {
    "PLU Code": 3520,
    "Name": "SK-20 Onions"
  },
  {
    "PLU Code": 3521,
    "Name": "Regal D5-100 Apples"
  },
  {
    "PLU Code": 3522,
    "Name": "HW624 Pears"
  },
  {
    "PLU Code": 3523,
    "Name": "SQ 159 Apples"
  },
  {
    "PLU Code": 3524,
    "Name": "C37 Tangerines/mandarins"
  },
  {
    "PLU Code": 3525,
    "Name": "Small CN121 Apples"
  },
  {
    "PLU Code": 3526,
    "Name": "Howell TC2 Apples"
  },
  {
    "PLU Code": 3527,
    "Name": "Howell TC3 Apples"
  },
  {
    "PLU Code": 3528,
    "Name": "Regal D17-121 Apples"
  },
  {
    "PLU Code": 3529,
    "Name": "PremA 129 Apples"
  },
  {
    "PLU Code": 3530,
    "Name": "Jupiter Grapes"
  },
  {
    "PLU Code": 3531,
    "Name": "Sugra Family Black Seedless Grapes"
  },
  {
    "PLU Code": 3532,
    "Name": "Sugra Family Green Seedless Grapes"
  },
  {
    "PLU Code": 3533,
    "Name": "Sugra Family Novelty Seedless Grapes"
  },
  {
    "PLU Code": 3534,
    "Name": "Sugra Family Red Seedless Grapes"
  },
  {
    "PLU Code": 3535,
    "Name": "Sweetheart Onions"
  },
  {
    "PLU Code": 3536,
    "Name": "Sweet Pixie Plums"
  },
  {
    "PLU Code": 3537,
    "Name": "MAIA-L Apples"
  },
  {
    "PLU Code": 3538,
    "Name": "Ipador Apples"
  },
  {
    "PLU Code": 3539,
    "Name": "IFORED Y Series Apples"
  },
  {
    "PLU Code": 3540,
    "Name": "IFORED R Series Apples"
  },
  {
    "PLU Code": 3600,
    "Name": "Antares Apples"
  },
  {
    "PLU Code": 3601,
    "Name": "Huaguan Apples"
  },
  {
    "PLU Code": 3602,
    "Name": "Belgica Apples"
  },
  {
    "PLU Code": 3603,
    "Name": "Minneiska Apples"
  },
  {
    "PLU Code": 3604,
    "Name": "Emmons Apples"
  },
  {
    "PLU Code": 3605,
    "Name": "Nicoter Apples"
  },
  {
    "PLU Code": 3606,
    "Name": "Sweet Sensation Pears"
  },
  {
    "PLU Code": 3607,
    "Name": "Mariri Red Apples"
  },
  {
    "PLU Code": 3608,
    "Name": "Large Sciros Apples"
  },
  {
    "PLU Code": 3609,
    "Name": "Red Plumcot (interspecific plum)"
  },
  {
    "PLU Code": 3610,
    "Name": "Green Plumcot (interspecific plum)"
  },
  {
    "PLU Code": 3611,
    "Name": "Black Plumcot (interspecific plum)"
  },
  {
    "PLU Code": 3612,
    "Name": "Nicogreen Apples"
  },
  {
    "PLU Code": 3613,
    "Name": "Fuji Brak Apples"
  },
  {
    "PLU Code": 3614,
    "Name": "Red Apricots"
  },
  {
    "PLU Code": 3615,
    "Name": "Civni Apples"
  },
  {
    "PLU Code": 3616,
    "Name": "Large Scilate Apples"
  },
  {
    "PLU Code": 3617,
    "Name": "Seedless Lemons"
  },
  {
    "PLU Code": 3618,
    "Name": "Opal Apples"
  },
  {
    "PLU Code": 3619,
    "Name": "Milwa Apples"
  },
  {
    "PLU Code": 3620,
    "Name": "Plumac Apples"
  },
  {
    "PLU Code": 3621,
    "Name": "Francis Mango"
  },
  {
    "PLU Code": 3622,
    "Name": "Honey Green Melon"
  },
  {
    "PLU Code": 3623,
    "Name": "Hami Melon"
  },
  {
    "PLU Code": 3624,
    "Name": "Korean Melon"
  },
  {
    "PLU Code": 3625,
    "Name": "Minnewashta Apples"
  },
  {
    "PLU Code": 3626,
    "Name": "Meyer Lemons"
  },
  {
    "PLU Code": 3627,
    "Name": "Large PremA17 Apples"
  },
  {
    "PLU Code": 3628,
    "Name": "PremA280 Apples"
  },
  {
    "PLU Code": 3629,
    "Name": "CIVG198 Apples"
  },
  {
    "PLU Code": 3630,
    "Name": "Co-op 43 Apples"
  },
  {
    "PLU Code": 3631,
    "Name": "Pink Pumpkin"
  },
  {
    "PLU Code": 3632,
    "Name": "Dekopon Tangerines/mandarins"
  },
  {
    "PLU Code": 4011,
    "Name": "Bananas"
  },
  {
    "PLU Code": 4012,
    "Name": "Large Navel Oranges"
  },
  {
    "PLU Code": 4013,
    "Name": "Small Navel Oranges"
  },
  {
    "PLU Code": 4014,
    "Name": "Small Valencia Oranges"
  },
  {
    "PLU Code": 4015,
    "Name": "Small Red Delicious Apples"
  },
  {
    "PLU Code": 4016,
    "Name": "Large Red Delicious Apples"
  },
  {
    "PLU Code": 4017,
    "Name": "Large Granny Smith Apples"
  },
  {
    "PLU Code": 4018,
    "Name": "Large Granny Smith Apples"
  },
  {
    "PLU Code": 4019,
    "Name": "Large McIntosh Apples"
  },
  {
    "PLU Code": 4020,
    "Name": "Large Golden Delicious Apples"
  },
  {
    "PLU Code": 4021,
    "Name": "Small Golden Delicious Apples"
  },
  {
    "PLU Code": 4022,
    "Name": "White/Green Seedless - Peerlette Seedless/Thompson Seedless Grapes"
  },
  {
    "PLU Code": 4023,
    "Name": "Red Seedless - Flame/Ruby/Emperatriz Grapes"
  },
  {
    "PLU Code": 4024,
    "Name": "Small Bartlett/Williams/WBC Pears"
  },
  {
    "PLU Code": 4025,
    "Name": "Small Anjou Pears"
  },
  {
    "PLU Code": 4026,
    "Name": "Small Bosc/Beurre Bosc Pears"
  },
  {
    "PLU Code": 4027,
    "Name": "Small Ruby/Red/Pink (includes Ray Ruby, Ruby, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4028,
    "Name": "Pint Strawberries Berries"
  },
  {
    "PLU Code": 4029,
    "Name": "Small Pineapple"
  },
  {
    "PLU Code": 4030,
    "Name": "Regular Kiwifruit"
  },
  {
    "PLU Code": 4031,
    "Name": "Seeded Watermelon"
  },
  {
    "PLU Code": 4032,
    "Name": "Seedless Watermelon"
  },
  {
    "PLU Code": 4033,
    "Name": "Small Lemons"
  },
  {
    "PLU Code": 4034,
    "Name": "Large Honeydew/White Honeydew Melon"
  },
  {
    "PLU Code": 4035,
    "Name": "Small Yellow Flesh Nectarine"
  },
  {
    "PLU Code": 4036,
    "Name": "Large Yellow Flesh Nectarine"
  },
  {
    "PLU Code": 4037,
    "Name": "Small Yellow Flesh Peaches"
  },
  {
    "PLU Code": 4038,
    "Name": "Large Yellow Flesh Peaches"
  },
  {
    "PLU Code": 4039,
    "Name": "Small Black (Includes Ambra, Black Beaut, Prima Black, Blackamber, Black Torch, Catalina, Challenger, Black Diamond, Friar, Royal Diamond, Black Knight, Freedom, Black Flame, Howard Sun, Angeleno) Plums"
  },
  {
    "PLU Code": 4040,
    "Name": "Large Black (Includes Ambra, Black Beaut, Prima Black, Blackamber, Black Torch, Catalina, Challenger, Black Diamond, Friar, Royal Diamond, Black Knight, Freedom, Black Flame, Howard Sun, Angeleno) Plums"
  },
  {
    "PLU Code": 4041,
    "Name": "Small Red (Includes Santa Rosa, Late Santa Rosa, Red Beaut, Rich Red, Spring Beaut, First Beaut, Royal Red, Red Jewel, Rose Zee, Royal Zee, Ace, Aleta Rose, Burgandy, July Santa Rosa, Frontier, Fortune, Grand Rosa, Red Lane, Red Rosa, Casselman, Autumn Rosa, Mi Plums"
  },
  {
    "PLU Code": 4042,
    "Name": "Large Red (Includes Santa Rosa, Late Santa Rosa, Red Beaut, Rich Red, Spring Beaut, First Beaut, Royal Red, Red Jewel, Rose Zee, Royal Zee, Ace, Aleta Rose, Burgandy, July Santa Rosa, Frontier, Fortune, Grand Rosa, Red Lane, Red Rosa, Casselman, Autumn Rosa, Mi Plums"
  },
  {
    "PLU Code": 4043,
    "Name": "Small Yellow Flesh - Tree Ripened/Ready-to-eat Peaches"
  },
  {
    "PLU Code": 4044,
    "Name": "Large Yellow Flesh - Tree Ripened/Ready-to-eat Peaches"
  },
  {
    "PLU Code": 4045,
    "Name": "Regular/Red/Black Cherries"
  },
  {
    "PLU Code": 4046,
    "Name": "Small Hass Avocados"
  },
  {
    "PLU Code": 4047,
    "Name": "Small Ruby/Red/Pink (Includes Ray Ruby, Ruby, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4048,
    "Name": "Regular (incl. Persian, Tahiti & Bearss) Limes"
  },
  {
    "PLU Code": 4049,
    "Name": "Small Cantaloupe/Rockmelon Melon"
  },
  {
    "PLU Code": 4050,
    "Name": "Large Cantaloupe/Rockmelon Melon"
  },
  {
    "PLU Code": 4051,
    "Name": "Small Red (Includes Tommy Atkins, Kent, Palmer, Vandyke, Edward,Hayden) Mango"
  },
  {
    "PLU Code": 4052,
    "Name": "Small Regular Papaya/pawpaw"
  },
  {
    "PLU Code": 4053,
    "Name": "Large Lemons"
  },
  {
    "PLU Code": 4054,
    "Name": "Raspberries - Red Berries"
  },
  {
    "PLU Code": 4055,
    "Name": "Tangerines/mandarins"
  },
  {
    "PLU Code": 4056,
    "Name": "Blue/Black Seedless (All other varieties not listed above including Beauty and Autumn Royal) Grapes"
  },
  {
    "PLU Code": 4057,
    "Name": "Small Haralson Apples"
  },
  {
    "PLU Code": 4058,
    "Name": "Large Haralson Apples"
  },
  {
    "PLU Code": 4060,
    "Name": "Broccoli"
  },
  {
    "PLU Code": 4061,
    "Name": "Iceberg Lettuce"
  },
  {
    "PLU Code": 4062,
    "Name": "Green/Ridge/Short Cucumber"
  },
  {
    "PLU Code": 4063,
    "Name": "Small Regular - Red Tomatoes"
  },
  {
    "PLU Code": 4064,
    "Name": "Large Regular - Red Tomatoes"
  },
  {
    "PLU Code": 4065,
    "Name": "Large Bell, Field Grown - Green Peppers (capsicums)"
  },
  {
    "PLU Code": 4066,
    "Name": "Green/French Beans"
  },
  {
    "PLU Code": 4067,
    "Name": "Zucchini/Courgette Squash"
  },
  {
    "PLU Code": 4068,
    "Name": "Green (Scallions)/Spring Onions"
  },
  {
    "PLU Code": 4069,
    "Name": "Green Cabbage"
  },
  {
    "PLU Code": 4070,
    "Name": "Small Bunch Celery"
  },
  {
    "PLU Code": 4071,
    "Name": "Small Bunch Celery"
  },
  {
    "PLU Code": 4072,
    "Name": "Russet Potato"
  },
  {
    "PLU Code": 4073,
    "Name": "Red Potato"
  },
  {
    "PLU Code": 4074,
    "Name": "Small Red/Orangy Red Flesh Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 4075,
    "Name": "Red Leaf Lettuce"
  },
  {
    "PLU Code": 4076,
    "Name": "Green Leaf Lettuce"
  },
  {
    "PLU Code": 4077,
    "Name": "Sweet Corn, White Corn"
  },
  {
    "PLU Code": 4078,
    "Name": "Sweet Corn, Yellow Corn"
  },
  {
    "PLU Code": 4079,
    "Name": "Small Cauliflower"
  },
  {
    "PLU Code": 4080,
    "Name": "Small Green Asparagus"
  },
  {
    "PLU Code": 4081,
    "Name": "Regular Eggplant (aubergine)"
  },
  {
    "PLU Code": 4082,
    "Name": "Red Onions"
  },
  {
    "PLU Code": 4083,
    "Name": "White Potato"
  },
  {
    "PLU Code": 4084,
    "Name": "Large Artichokes"
  },
  {
    "PLU Code": 4085,
    "Name": "Large Regular Mushrooms"
  },
  {
    "PLU Code": 4086,
    "Name": "Yellow Zucchini/Gold Bar/Yellow Courgette Squash"
  },
  {
    "PLU Code": 4087,
    "Name": "Plum/Italian/Saladette/Roma - Red Tomatoes"
  },
  {
    "PLU Code": 4088,
    "Name": "Red Bell Peppers"
  },
  {
    "PLU Code": 4089,
    "Name": "Bunched Red Radish"
  },
  {
    "PLU Code": 4090,
    "Name": "Regular/Bunched Spinach"
  },
  {
    "PLU Code": 4091,
    "Name": "White Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 4092,
    "Name": "Chinese Snow Pea/Pea Pod/Mange Tout Peas"
  },
  {
    "PLU Code": 4093,
    "Name": "Large Yellow/Brown Onions"
  },
  {
    "PLU Code": 4094,
    "Name": "Bunch Carrots"
  },
  {
    "PLU Code": 4095,
    "Name": "Yellow Turnip"
  },
  {
    "PLU Code": 4096,
    "Name": "Large Ginger Gold Apples"
  },
  {
    "PLU Code": 4097,
    "Name": "Small Ginger Gold Apples"
  },
  {
    "PLU Code": 4098,
    "Name": "Small Akane Apples"
  },
  {
    "PLU Code": 4099,
    "Name": "Large Akane Apples"
  },
  {
    "PLU Code": 4100,
    "Name": "Small Fireside Apples"
  },
  {
    "PLU Code": 4101,
    "Name": "Small Braeburn Apples"
  },
  {
    "PLU Code": 4102,
    "Name": "Large Fireside Apples"
  },
  {
    "PLU Code": 4103,
    "Name": "Large Braeburn Apples"
  },
  {
    "PLU Code": 4104,
    "Name": "Small Cortland Apples"
  },
  {
    "PLU Code": 4105,
    "Name": "Cox Orange Pippin Apples"
  },
  {
    "PLU Code": 4106,
    "Name": "Large Cortland Apples"
  },
  {
    "PLU Code": 4107,
    "Name": "Crab Apples"
  },
  {
    "PLU Code": 4108,
    "Name": "Small Crispin/Mutsu Apples"
  },
  {
    "PLU Code": 4109,
    "Name": "Small Crispin/Mutsu Apples"
  },
  {
    "PLU Code": 4110,
    "Name": "Large Crispin/Mutsu Apples"
  },
  {
    "PLU Code": 4111,
    "Name": "Large Crispin/Mutsu Apples"
  },
  {
    "PLU Code": 4112,
    "Name": "Small Regent Apples"
  },
  {
    "PLU Code": 4113,
    "Name": "Small Criterion Apples"
  },
  {
    "PLU Code": 4114,
    "Name": "Large Regent Apples"
  },
  {
    "PLU Code": 4115,
    "Name": "Large Criterion Apples"
  },
  {
    "PLU Code": 4116,
    "Name": "Small Early Apples"
  },
  {
    "PLU Code": 4117,
    "Name": "Small Early Apples"
  },
  {
    "PLU Code": 4118,
    "Name": "Large Early Apples"
  },
  {
    "PLU Code": 4119,
    "Name": "Large Early Apples"
  },
  {
    "PLU Code": 4120,
    "Name": "Fiesta Apples"
  },
  {
    "PLU Code": 4121,
    "Name": "Small Elstar Apples"
  },
  {
    "PLU Code": 4122,
    "Name": "Small Sciros Apples"
  },
  {
    "PLU Code": 4123,
    "Name": "Large Elstar Apples"
  },
  {
    "PLU Code": 4124,
    "Name": "Small Empire Apples"
  },
  {
    "PLU Code": 4125,
    "Name": "Small Empire Apples"
  },
  {
    "PLU Code": 4126,
    "Name": "Large Empire Apples"
  },
  {
    "PLU Code": 4127,
    "Name": "Large Empire Apples"
  },
  {
    "PLU Code": 4128,
    "Name": "Small Cripps Pink Apples"
  },
  {
    "PLU Code": 4129,
    "Name": "Small Fuji Apples"
  },
  {
    "PLU Code": 4130,
    "Name": "Large Cripps Pink Apples"
  },
  {
    "PLU Code": 4131,
    "Name": "Large Fuji Apples"
  },
  {
    "PLU Code": 4132,
    "Name": "Small Gala Apples"
  },
  {
    "PLU Code": 4133,
    "Name": "Small Gala Apples"
  },
  {
    "PLU Code": 4134,
    "Name": "Large Gala Apples"
  },
  {
    "PLU Code": 4135,
    "Name": "Large Gala Apples"
  },
  {
    "PLU Code": 4136,
    "Name": "Small Golden Delicious Apples"
  },
  {
    "PLU Code": 4137,
    "Name": "Large Golden Delicious Apples"
  },
  {
    "PLU Code": 4138,
    "Name": "Small Granny Smith Apples"
  },
  {
    "PLU Code": 4139,
    "Name": "Small Granny Smith Apples"
  },
  {
    "PLU Code": 4140,
    "Name": "Small Idared Apples"
  },
  {
    "PLU Code": 4141,
    "Name": "Small Jonamac Apples"
  },
  {
    "PLU Code": 4142,
    "Name": "Large Idared Apples"
  },
  {
    "PLU Code": 4143,
    "Name": "Large Jonamac Apples"
  },
  {
    "PLU Code": 4144,
    "Name": "Small Jonagold Apples"
  },
  {
    "PLU Code": 4145,
    "Name": "Small Jonagold Apples"
  },
  {
    "PLU Code": 4146,
    "Name": "Large Jonagold Apples"
  },
  {
    "PLU Code": 4147,
    "Name": "Large Jonagold Apples"
  },
  {
    "PLU Code": 4148,
    "Name": "Small Jonathan Apples"
  },
  {
    "PLU Code": 4149,
    "Name": "Small Jonathan Apples"
  },
  {
    "PLU Code": 4150,
    "Name": "Large Jonathan Apples"
  },
  {
    "PLU Code": 4151,
    "Name": "Large Jonathan Apples"
  },
  {
    "PLU Code": 4152,
    "Name": "Small McIntosh Apples"
  },
  {
    "PLU Code": 4153,
    "Name": "Small McIntosh Apples"
  },
  {
    "PLU Code": 4154,
    "Name": "Large McIntosh Apples"
  },
  {
    "PLU Code": 4155,
    "Name": "Small Paulared Apples"
  },
  {
    "PLU Code": 4156,
    "Name": "Small Gravenstein Apples"
  },
  {
    "PLU Code": 4157,
    "Name": "Large Paulared Apples"
  },
  {
    "PLU Code": 4158,
    "Name": "Large Gravenstein Apples"
  },
  {
    "PLU Code": 4159,
    "Name": "Vidalia Onions"
  },
  {
    "PLU Code": 4160,
    "Name": "Small Pippin Apples"
  },
  {
    "PLU Code": 4161,
    "Name": "Texas Sweet Onions"
  },
  {
    "PLU Code": 4162,
    "Name": "Large Pippin Apples"
  },
  {
    "PLU Code": 4163,
    "Name": "Walla Walla Onions"
  },
  {
    "PLU Code": 4164,
    "Name": "Maui Onions"
  },
  {
    "PLU Code": 4165,
    "Name": "California Sweet Onions"
  },
  {
    "PLU Code": 4166,
    "Name": "Other Sweet Onions"
  },
  {
    "PLU Code": 4167,
    "Name": "Small Red Delicious Apples"
  },
  {
    "PLU Code": 4168,
    "Name": "Large Red Delicious Apples"
  },
  {
    "PLU Code": 4169,
    "Name": "Small Rome Apples"
  },
  {
    "PLU Code": 4170,
    "Name": "Small Rome Apples"
  },
  {
    "PLU Code": 4171,
    "Name": "Large Rome Apples"
  },
  {
    "PLU Code": 4172,
    "Name": "Large Rome Apples"
  },
  {
    "PLU Code": 4173,
    "Name": "Small Royal Gala Apples"
  },
  {
    "PLU Code": 4174,
    "Name": "Large Royal Gala Apples"
  },
  {
    "PLU Code": 4176,
    "Name": "Southern Snap Apples"
  },
  {
    "PLU Code": 4177,
    "Name": "Small Spartan Apples"
  },
  {
    "PLU Code": 4178,
    "Name": "Small Spartan Apples"
  },
  {
    "PLU Code": 4179,
    "Name": "Large Spartan Apples"
  },
  {
    "PLU Code": 4180,
    "Name": "Large Spartan Apples"
  },
  {
    "PLU Code": 4181,
    "Name": "Small Stayman Apples"
  },
  {
    "PLU Code": 4182,
    "Name": "Sturmer Pippin Apples"
  },
  {
    "PLU Code": 4183,
    "Name": "Large Stayman Apples"
  },
  {
    "PLU Code": 4185,
    "Name": "Small York Apples"
  },
  {
    "PLU Code": 4186,
    "Name": "Small Yellow (includes Cavendish) Bananas"
  },
  {
    "PLU Code": 4187,
    "Name": "Large York Apples"
  },
  {
    "PLU Code": 4188,
    "Name": "Small White Flesh, Tree Ripened, Ready-to-eat Nectarine"
  },
  {
    "PLU Code": 4189,
    "Name": "Small Winesap Apples"
  },
  {
    "PLU Code": 4190,
    "Name": "Small Winesap Apples"
  },
  {
    "PLU Code": 4191,
    "Name": "Large Winesap Apples"
  },
  {
    "PLU Code": 4192,
    "Name": "Large Winesap Apples"
  },
  {
    "PLU Code": 4193,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4194,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4195,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4196,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4197,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4198,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4199,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4200,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4201,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4202,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4203,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4204,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4205,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4206,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4207,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4208,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4209,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4210,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4211,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4212,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4213,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4214,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4215,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4216,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4217,
    "Name": "Retailer Assigned Apples"
  },
  {
    "PLU Code": 4218,
    "Name": "Small Regular Apricots"
  },
  {
    "PLU Code": 4219,
    "Name": "Retailer Assigned Apricots"
  },
  {
    "PLU Code": 4220,
    "Name": "Atemoyas"
  },
  {
    "PLU Code": 4221,
    "Name": "Small Green Avocados"
  },
  {
    "PLU Code": 4222,
    "Name": "Small Green Avocados"
  },
  {
    "PLU Code": 4223,
    "Name": "Large Green Avocados"
  },
  {
    "PLU Code": 4224,
    "Name": "Large Green Avocados"
  },
  {
    "PLU Code": 4225,
    "Name": "Large Hass Avocados"
  },
  {
    "PLU Code": 4226,
    "Name": "Cocktail/Seedless Avocados"
  },
  {
    "PLU Code": 4227,
    "Name": "Retailer Assigned Avocados"
  },
  {
    "PLU Code": 4228,
    "Name": "Retailer Assigned Avocados"
  },
  {
    "PLU Code": 4229,
    "Name": "Burro Bananas"
  },
  {
    "PLU Code": 4230,
    "Name": "Dominique Bananas"
  },
  {
    "PLU Code": 4231,
    "Name": "Green Bananas"
  },
  {
    "PLU Code": 4232,
    "Name": "Leaves Bananas"
  },
  {
    "PLU Code": 4233,
    "Name": "Apple/Manzano Bananas"
  },
  {
    "PLU Code": 4234,
    "Name": "Nino Bananas"
  },
  {
    "PLU Code": 4235,
    "Name": "Plantain/Macho Bananas"
  },
  {
    "PLU Code": 4236,
    "Name": "Red Bananas"
  },
  {
    "PLU Code": 4237,
    "Name": "Retailer Assigned Bananas"
  },
  {
    "PLU Code": 4238,
    "Name": "Retailer Assigned Bananas"
  },
  {
    "PLU Code": 4239,
    "Name": "Blackberries Berries"
  },
  {
    "PLU Code": 4240,
    "Name": "Blueberries Berries"
  },
  {
    "PLU Code": 4241,
    "Name": "Boysenberries Berries"
  },
  {
    "PLU Code": 4242,
    "Name": "Cranberries Berries"
  },
  {
    "PLU Code": 4243,
    "Name": "Gooseberries Berries"
  },
  {
    "PLU Code": 4244,
    "Name": "Raspberries - Black Berries"
  },
  {
    "PLU Code": 4245,
    "Name": "Raspberries - Golden Berries"
  },
  {
    "PLU Code": 4246,
    "Name": "Pint Strawberries Berries"
  },
  {
    "PLU Code": 4247,
    "Name": "Quart Strawberries Berries"
  },
  {
    "PLU Code": 4248,
    "Name": "Quart Strawberries Berries"
  },
  {
    "PLU Code": 4249,
    "Name": "Bulk 3-pack (3 pints) Strawberries Berries"
  },
  {
    "PLU Code": 4250,
    "Name": "Bulk 3-pack (3 pints) Strawberries Berries"
  },
  {
    "PLU Code": 4251,
    "Name": "Long-stemmed Strawberries Berries"
  },
  {
    "PLU Code": 4252,
    "Name": "Retailer Assigned Berries"
  },
  {
    "PLU Code": 4253,
    "Name": "Retailer Assigned Berries"
  },
  {
    "PLU Code": 4254,
    "Name": "Breadfruit"
  },
  {
    "PLU Code": 4255,
    "Name": "Cactus pear (prickly pear)"
  },
  {
    "PLU Code": 4256,
    "Name": "Carambola (starfruit)"
  },
  {
    "PLU Code": 4257,
    "Name": "Cherimoya"
  },
  {
    "PLU Code": 4258,
    "Name": "Golden/Rainier/White Cherries"
  },
  {
    "PLU Code": 4259,
    "Name": "Retailer Assigned Cherries"
  },
  {
    "PLU Code": 4260,
    "Name": "In Husk/Waternut Coconuts"
  },
  {
    "PLU Code": 4261,
    "Name": "Husked Coconuts"
  },
  {
    "PLU Code": 4262,
    "Name": "Retailer Assigned Coconuts"
  },
  {
    "PLU Code": 4263,
    "Name": "Fresh - Regular Dates"
  },
  {
    "PLU Code": 4264,
    "Name": "Fresh - Retailer Assigned Dates"
  },
  {
    "PLU Code": 4265,
    "Name": "Feijoa"
  },
  {
    "PLU Code": 4266,
    "Name": "Black Figs"
  },
  {
    "PLU Code": 4267,
    "Name": "Brown Figs"
  },
  {
    "PLU Code": 4268,
    "Name": "White/Green Figs"
  },
  {
    "PLU Code": 4269,
    "Name": "Retailer Assigned Figs"
  },
  {
    "PLU Code": 4270,
    "Name": "Blue/Black Seeded (Ribier/Exotic/Niabel) Grapes"
  },
  {
    "PLU Code": 4271,
    "Name": "Champagne Grapes"
  },
  {
    "PLU Code": 4272,
    "Name": "Concord Grapes"
  },
  {
    "PLU Code": 4273,
    "Name": "Red Seeded (Cardinal/Emperor/Queen/Christmas Rose) Grapes"
  },
  {
    "PLU Code": 4274,
    "Name": "White/Green Seeded (All others not listed) Grapes"
  },
  {
    "PLU Code": 4275,
    "Name": "Retailer Assigned Grapes"
  },
  {
    "PLU Code": 4276,
    "Name": "Retailer Assigned Grapes"
  },
  {
    "PLU Code": 4277,
    "Name": "Retailer Assigned Grapes"
  },
  {
    "PLU Code": 4278,
    "Name": "Retailer Assigned Grapes"
  },
  {
    "PLU Code": 4279,
    "Name": "Pummelo - White Grapefruit"
  },
  {
    "PLU Code": 4280,
    "Name": "Small Ruby/Red/Pink (Includes Ray Ruby, Ray, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4281,
    "Name": "Large Ruby/Red/Pink (ncludes Ray Ruby, Ruby, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4282,
    "Name": "Large Ruby/Red/Pink (Includes Ray Ruby, Ruby, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4283,
    "Name": "Large Ruby/Red/Pink (Includes Ray Ruby, Ray, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4284,
    "Name": "Small Deep Red Grapefruit"
  },
  {
    "PLU Code": 4285,
    "Name": "Small Deep Red Grapefruit"
  },
  {
    "PLU Code": 4286,
    "Name": "Small Deep Red Grapefruit"
  },
  {
    "PLU Code": 4287,
    "Name": "Large Deep Red Grapefruit"
  },
  {
    "PLU Code": 4288,
    "Name": "Large Deep Red Grapefruit"
  },
  {
    "PLU Code": 4289,
    "Name": "Large Deep Red Grapefruit"
  },
  {
    "PLU Code": 4290,
    "Name": "Small White Grapefruit"
  },
  {
    "PLU Code": 4291,
    "Name": "Small White Grapefruit"
  },
  {
    "PLU Code": 4292,
    "Name": "Small White Grapefruit"
  },
  {
    "PLU Code": 4293,
    "Name": "Large White Grapefruit"
  },
  {
    "PLU Code": 4294,
    "Name": "Large White Grapefruit"
  },
  {
    "PLU Code": 4295,
    "Name": "Large White Grapefruit"
  },
  {
    "PLU Code": 4296,
    "Name": "Retailer Assigned Grapefruit"
  },
  {
    "PLU Code": 4297,
    "Name": "Retailer Assigned Grapefruit"
  },
  {
    "PLU Code": 4298,
    "Name": "Retailer Assigned Grapefruit"
  },
  {
    "PLU Code": 4299,
    "Name": "Guava"
  },
  {
    "PLU Code": 4300,
    "Name": "Homli fruit"
  },
  {
    "PLU Code": 4301,
    "Name": "Retailer Assigned Kiwifruit"
  },
  {
    "PLU Code": 4302,
    "Name": "Kiwano (horned melon)"
  },
  {
    "PLU Code": 4303,
    "Name": "Kumquat"
  },
  {
    "PLU Code": 4304,
    "Name": "Retailer Assigned Lemons"
  },
  {
    "PLU Code": 4305,
    "Name": "Key (incl. Mexican & West Indian) Limes"
  },
  {
    "PLU Code": 4306,
    "Name": "Retailer Assigned Limes"
  },
  {
    "PLU Code": 4307,
    "Name": "Longan"
  },
  {
    "PLU Code": 4308,
    "Name": "Loquats"
  },
  {
    "PLU Code": 4309,
    "Name": "Lychees"
  },
  {
    "PLU Code": 4310,
    "Name": "Mamey"
  },
  {
    "PLU Code": 4311,
    "Name": "Small Green (Includes Keitt and Francis) Mango"
  },
  {
    "PLU Code": 4312,
    "Name": "Small Yellow (Includes Oro, Ataulfo/Honey Manila) Mango"
  },
  {
    "PLU Code": 4313,
    "Name": "Retailer Assigned Mango"
  },
  {
    "PLU Code": 4314,
    "Name": "Retailer Assigned Mango"
  },
  {
    "PLU Code": 4315,
    "Name": "Retailer Assigned Mango"
  },
  {
    "PLU Code": 4316,
    "Name": "Retailer Assigned Mango"
  },
  {
    "PLU Code": 4317,
    "Name": "Canary/Yellow Honeydew Melon"
  },
  {
    "PLU Code": 4318,
    "Name": "Small Cantaloupe/Muskmelon Melon"
  },
  {
    "PLU Code": 4319,
    "Name": "Large Cantaloupe/Muskmelon Melon"
  },
  {
    "PLU Code": 4320,
    "Name": "Casaba Melon"
  },
  {
    "PLU Code": 4321,
    "Name": "Cinnabar Melon"
  },
  {
    "PLU Code": 4322,
    "Name": "Crenshaw Melon"
  },
  {
    "PLU Code": 4323,
    "Name": "Bulk Strawberries Berries"
  },
  {
    "PLU Code": 4324,
    "Name": "French Afternoon Melon"
  },
  {
    "PLU Code": 4325,
    "Name": "French Breakfast Melon"
  },
  {
    "PLU Code": 4326,
    "Name": "Galia Melon"
  },
  {
    "PLU Code": 4327,
    "Name": "Orange Flesh/Cantaline Melon"
  },
  {
    "PLU Code": 4328,
    "Name": "Limequats"
  },
  {
    "PLU Code": 4329,
    "Name": "Small Honeydew/White Honeydew Melon"
  },
  {
    "PLU Code": 4330,
    "Name": "Mayan Melon"
  },
  {
    "PLU Code": 4331,
    "Name": "Mickey Lee/Sugar Baby Watermelon"
  },
  {
    "PLU Code": 4332,
    "Name": "Muskmelon Melon"
  },
  {
    "PLU Code": 4333,
    "Name": "Pepino Melon"
  },
  {
    "PLU Code": 4334,
    "Name": "Persian Melon"
  },
  {
    "PLU Code": 4335,
    "Name": "Prince Melon"
  },
  {
    "PLU Code": 4336,
    "Name": "Santa Claus Melon"
  },
  {
    "PLU Code": 4337,
    "Name": "Saticoy Melon"
  },
  {
    "PLU Code": 4338,
    "Name": "Sharlin Melon"
  },
  {
    "PLU Code": 4339,
    "Name": "Spanish/Tendral Melon"
  },
  {
    "PLU Code": 4340,
    "Name": "Yellow Seeded Watermelon"
  },
  {
    "PLU Code": 4341,
    "Name": "Yellow Seedless Watermelon"
  },
  {
    "PLU Code": 4342,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4343,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4344,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4345,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4346,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4347,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4348,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4349,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4350,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4351,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4352,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4353,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4354,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4355,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4356,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4357,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4358,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4359,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4360,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4361,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4362,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4363,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4364,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4365,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4366,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4367,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4368,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4369,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4370,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4371,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4372,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4373,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4374,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4375,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4376,
    "Name": "Retailer Assigned (includes pre-cut melons) Melon"
  },
  {
    "PLU Code": 4377,
    "Name": "Small Yellow Flesh, Tree Ripened, Ready-to-eat Nectarine"
  },
  {
    "PLU Code": 4378,
    "Name": "Large Yellow Flesh, Tree Ripened, Ready-to-eat Nectarine"
  },
  {
    "PLU Code": 4379,
    "Name": "Retailer Assigned Nectarine"
  },
  {
    "PLU Code": 4380,
    "Name": "Retailer Assigned Nectarine"
  },
  {
    "PLU Code": 4381,
    "Name": "Blood Oranges"
  },
  {
    "PLU Code": 4382,
    "Name": "Juice Oranges"
  },
  {
    "PLU Code": 4383,
    "Name": "Minneola Tangelo"
  },
  {
    "PLU Code": 4384,
    "Name": "Small Navel Oranges"
  },
  {
    "PLU Code": 4385,
    "Name": "Large Navel Oranges"
  },
  {
    "PLU Code": 4386,
    "Name": "Small Temple Oranges"
  },
  {
    "PLU Code": 4387,
    "Name": "Large Temple Oranges"
  },
  {
    "PLU Code": 4388,
    "Name": "Large Valencia Oranges"
  },
  {
    "PLU Code": 4389,
    "Name": "Retailer Assigned Oranges"
  },
  {
    "PLU Code": 4390,
    "Name": "Retailer Assigned Oranges"
  },
  {
    "PLU Code": 4391,
    "Name": "Retailer Assigned Oranges"
  },
  {
    "PLU Code": 4392,
    "Name": "Retailer Assigned Oranges"
  },
  {
    "PLU Code": 4393,
    "Name": "Retailer Assigned Oranges"
  },
  {
    "PLU Code": 4394,
    "Name": "Large Regular Papaya/pawpaw"
  },
  {
    "PLU Code": 4395,
    "Name": "Cooking/Mexican Papaya/pawpaw"
  },
  {
    "PLU Code": 4396,
    "Name": "Retailer Assigned Papaya/pawpaw"
  },
  {
    "PLU Code": 4397,
    "Name": "Purple Passion fruit"
  },
  {
    "PLU Code": 4398,
    "Name": "Retailer Assigned Passion fruit"
  },
  {
    "PLU Code": 4399,
    "Name": "Indian Peaches"
  },
  {
    "PLU Code": 4400,
    "Name": "Small White Flesh Peaches"
  },
  {
    "PLU Code": 4401,
    "Name": "Large White Flesh Peaches"
  },
  {
    "PLU Code": 4402,
    "Name": "Small Yellow Flesh Peaches"
  },
  {
    "PLU Code": 4403,
    "Name": "Large Yellow Flesh Peaches"
  },
  {
    "PLU Code": 4404,
    "Name": "Retailer Assigned Peaches"
  },
  {
    "PLU Code": 4405,
    "Name": "Retailer Assigned Peaches"
  },
  {
    "PLU Code": 4406,
    "Name": "Asian/Nashi - White Pears"
  },
  {
    "PLU Code": 4407,
    "Name": "Asian/Nashi - Yellow Pears"
  },
  {
    "PLU Code": 4408,
    "Name": "Asian/Nashi - Brown Pears"
  },
  {
    "PLU Code": 4409,
    "Name": "Large Bartlett/Williams/WBC Pears"
  },
  {
    "PLU Code": 4410,
    "Name": "Bartlett - Red/Red Sensation Pears"
  },
  {
    "PLU Code": 4411,
    "Name": "Small Bosc/Beurre Bosc Pears"
  },
  {
    "PLU Code": 4412,
    "Name": "Large Bosc/Beurre Bosc Pears"
  },
  {
    "PLU Code": 4413,
    "Name": "Large Bosc/Beurre Bosc Pears"
  },
  {
    "PLU Code": 4414,
    "Name": "Comice/ Doyenne du Comice Pears"
  },
  {
    "PLU Code": 4415,
    "Name": "Red Pears"
  },
  {
    "PLU Code": 4416,
    "Name": "Large Anjou Pears"
  },
  {
    "PLU Code": 4417,
    "Name": "Anjou - Red Pears"
  },
  {
    "PLU Code": 4418,
    "Name": "Forelle/Corella Pears"
  },
  {
    "PLU Code": 4419,
    "Name": "French Pears"
  },
  {
    "PLU Code": 4420,
    "Name": "King Royal Pears"
  },
  {
    "PLU Code": 4421,
    "Name": "Packham/Packhams Triumph Pears"
  },
  {
    "PLU Code": 4422,
    "Name": "Seckel Pears"
  },
  {
    "PLU Code": 4423,
    "Name": "Tree Ripened Pears"
  },
  {
    "PLU Code": 4424,
    "Name": "Winter Nelis/Honey Pears"
  },
  {
    "PLU Code": 4425,
    "Name": "Retailer Assigned Pears"
  },
  {
    "PLU Code": 4426,
    "Name": "Retailer Assigned Pears"
  },
  {
    "PLU Code": 4427,
    "Name": "Regular (American Persimmon) Persimmon"
  },
  {
    "PLU Code": 4428,
    "Name": "Japanese/Sharonfruit (Kaki) Persimmon"
  },
  {
    "PLU Code": 4429,
    "Name": "Retailer Assigned Persimmon"
  },
  {
    "PLU Code": 4430,
    "Name": "Large Pineapple"
  },
  {
    "PLU Code": 4431,
    "Name": "Small Jet Fresh Pineapple"
  },
  {
    "PLU Code": 4432,
    "Name": "Large Jet Fresh Pineapple"
  },
  {
    "PLU Code": 4433,
    "Name": "Retailer Assigned Pineapple"
  },
  {
    "PLU Code": 4434,
    "Name": "Small Green (Includes Dolly, Kelsey, Wickson) Plums"
  },
  {
    "PLU Code": 4435,
    "Name": "Large Green (Includes Dolly, Kelsey, Wickson) Plums"
  },
  {
    "PLU Code": 4436,
    "Name": "Italian Prune/Sugar Plums"
  },
  {
    "PLU Code": 4437,
    "Name": "Small Purple (Includes Queen Rosa, Laroda, Nublana, Queen Ann, Simka, El Dorado) Plums"
  },
  {
    "PLU Code": 4438,
    "Name": "Large Purple (Includes Queen Rosa, Laroda, Nublana, Queen Ann, Simka, El Dorado) Plums"
  },
  {
    "PLU Code": 4439,
    "Name": "Small Tree Ripened Plums"
  },
  {
    "PLU Code": 4440,
    "Name": "Large Tree Ripened Plums"
  },
  {
    "PLU Code": 4441,
    "Name": "Small Yellow (Includes Golden Globe) Plums"
  },
  {
    "PLU Code": 4442,
    "Name": "Large Yellow (Includes Golden Globe) Plums"
  },
  {
    "PLU Code": 4443,
    "Name": "Retailer Assigned Plums"
  },
  {
    "PLU Code": 4444,
    "Name": "Retailer Assigned Plums"
  },
  {
    "PLU Code": 4445,
    "Name": "Small Pomegranate"
  },
  {
    "PLU Code": 4446,
    "Name": "Retailer Assigned Pomegranate"
  },
  {
    "PLU Code": 4447,
    "Name": "Quince"
  },
  {
    "PLU Code": 4448,
    "Name": "Tamarind"
  },
  {
    "PLU Code": 4449,
    "Name": "Sunburst Tangerines/mandarins"
  },
  {
    "PLU Code": 4450,
    "Name": "Clementine (includes Fortune) Tangerines/mandarins"
  },
  {
    "PLU Code": 4451,
    "Name": "Dancy Tangerines/mandarins"
  },
  {
    "PLU Code": 4452,
    "Name": "Fairchild Tangerines/mandarins"
  },
  {
    "PLU Code": 4453,
    "Name": "Honey/Murcott Tangerines/mandarins"
  },
  {
    "PLU Code": 4454,
    "Name": "Kinnow Tangerines/mandarins"
  },
  {
    "PLU Code": 4455,
    "Name": "Mandarin/Royal Tangerines/mandarins"
  },
  {
    "PLU Code": 4456,
    "Name": "Tangelo"
  },
  {
    "PLU Code": 4457,
    "Name": "Retailer Assigned Tangerines/mandarins"
  },
  {
    "PLU Code": 4458,
    "Name": "Retailer Assigned Tangerines/mandarins"
  },
  {
    "PLU Code": 4459,
    "Name": "Jamaican Tangelo"
  },
  {
    "PLU Code": 4460,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4461,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4462,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4463,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4464,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4465,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4466,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4467,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4468,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4469,
    "Name": "Retailer Assigned For use with all commodities"
  },
  {
    "PLU Code": 4470,
    "Name": "Salad bar"
  },
  {
    "PLU Code": 4471,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4472,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4473,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4474,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4475,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4476,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4477,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4478,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4479,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4480,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4481,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4482,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4483,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4484,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4485,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4486,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4487,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4488,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4489,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4490,
    "Name": "Retailer Assigned Other fruits"
  },
  {
    "PLU Code": 4491,
    "Name": "Extra Large Ruby/Red/Pink (includes Ray Ruby, Ruby, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4492,
    "Name": "Extra Large Ruby/Red/Pink (includes Ray Ruby, Ruby, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4493,
    "Name": "Extra Large Ruby/Red/Pink (Includes Ray Ruby, Ruby, Ruby Red) Grapefruit"
  },
  {
    "PLU Code": 4494,
    "Name": "Extra Large Deep Red Grapefruit"
  },
  {
    "PLU Code": 4495,
    "Name": "Extra Large Deep Red Grapefruit"
  },
  {
    "PLU Code": 4496,
    "Name": "Extra Large Deep Red Grapefruit"
  },
  {
    "PLU Code": 4497,
    "Name": "Sugraone Grapes"
  },
  {
    "PLU Code": 4498,
    "Name": "White/Green Seedless (All others not listed above (including Autumn King)) Grapes"
  },
  {
    "PLU Code": 4499,
    "Name": "Crimson/Majestic Grapes"
  },
  {
    "PLU Code": 4500,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4501,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4502,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4503,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4504,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4505,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4506,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4507,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4508,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4509,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4510,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4511,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4512,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4513,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4514,
    "Name": "Alfalfa sprouts"
  },
  {
    "PLU Code": 4515,
    "Name": "Florence/Sweet Fennel/Fennel Bulb Fennel"
  },
  {
    "PLU Code": 4516,
    "Name": "Small Artichokes"
  },
  {
    "PLU Code": 4517,
    "Name": "Small Purple Artichokes"
  },
  {
    "PLU Code": 4518,
    "Name": "Large Purple Artichokes"
  },
  {
    "PLU Code": 4519,
    "Name": "Baby/Cocktail Artichokes"
  },
  {
    "PLU Code": 4520,
    "Name": "Retailer Assigned Artichokes"
  },
  {
    "PLU Code": 4521,
    "Name": "Large Green Asparagus"
  },
  {
    "PLU Code": 4522,
    "Name": "Small White Asparagus"
  },
  {
    "PLU Code": 4523,
    "Name": "Large White Asparagus"
  },
  {
    "PLU Code": 4524,
    "Name": "Tips Asparagus"
  },
  {
    "PLU Code": 4525,
    "Name": "Retailer Assigned Asparagus"
  },
  {
    "PLU Code": 4526,
    "Name": "Retailer Assigned Asparagus"
  },
  {
    "PLU Code": 4527,
    "Name": "Chinese Long/Snake Beans"
  },
  {
    "PLU Code": 4528,
    "Name": "Fava/Broad Beans"
  },
  {
    "PLU Code": 4529,
    "Name": "Lima Beans"
  },
  {
    "PLU Code": 4530,
    "Name": "Pole/Runner/Stick Beans"
  },
  {
    "PLU Code": 4531,
    "Name": "Purple Hull Beans"
  },
  {
    "PLU Code": 4532,
    "Name": "Shell Beans"
  },
  {
    "PLU Code": 4533,
    "Name": "Wax/Yellow Beans"
  },
  {
    "PLU Code": 4534,
    "Name": "Winged Beans"
  },
  {
    "PLU Code": 4535,
    "Name": "Retailer Assigned Beans"
  },
  {
    "PLU Code": 4536,
    "Name": "Mung Bean Sprouts Bean sprouts"
  },
  {
    "PLU Code": 4537,
    "Name": "Baby Golden Beets"
  },
  {
    "PLU Code": 4538,
    "Name": "Baby Red Beets"
  },
  {
    "PLU Code": 4539,
    "Name": "Bunch Beets"
  },
  {
    "PLU Code": 4540,
    "Name": "Loose Beets"
  },
  {
    "PLU Code": 4541,
    "Name": "Retailer Assigned Beets"
  },
  {
    "PLU Code": 4542,
    "Name": "Beet greens"
  },
  {
    "PLU Code": 4543,
    "Name": "Belgian endive (witloof chicory)"
  },
  {
    "PLU Code": 4544,
    "Name": "Small/Baby Bok choy (pak choi)"
  },
  {
    "PLU Code": 4545,
    "Name": "Bok choy (pak choi)"
  },
  {
    "PLU Code": 4546,
    "Name": "See also SWEET POTATO Boniato"
  },
  {
    "PLU Code": 4547,
    "Name": "Broccoli Rabe (Italian Rapini)/ Chinese Broccoli (GAI LAN) Broccoli"
  },
  {
    "PLU Code": 4548,
    "Name": "Florettes Broccoli"
  },
  {
    "PLU Code": 4549,
    "Name": "Retailer Assigned Broccoli"
  },
  {
    "PLU Code": 4550,
    "Name": "Brussels sprouts"
  },
  {
    "PLU Code": 4551,
    "Name": "Retailer Assigned Brussels sprouts"
  },
  {
    "PLU Code": 4552,
    "Name": "Chinese/Napa/Wong Bok Cabbage"
  },
  {
    "PLU Code": 4553,
    "Name": "Taylors Gold Pears"
  },
  {
    "PLU Code": 4554,
    "Name": "Red Cabbage"
  },
  {
    "PLU Code": 4555,
    "Name": "Savoy, Green Cabbage"
  },
  {
    "PLU Code": 4556,
    "Name": "Retailer Assigned Cabbage"
  },
  {
    "PLU Code": 4557,
    "Name": "Retailer Assigned Cabbage"
  },
  {
    "PLU Code": 4558,
    "Name": "Cactus leaves (nopales/cactus pads)"
  },
  {
    "PLU Code": 4559,
    "Name": "Cardoon (cardoni)"
  },
  {
    "PLU Code": 4560,
    "Name": "Baby Carrots"
  },
  {
    "PLU Code": 4561,
    "Name": "French Carrots"
  },
  {
    "PLU Code": 4562,
    "Name": "Loose Carrots"
  },
  {
    "PLU Code": 4563,
    "Name": "Carrot Sticks Carrots"
  },
  {
    "PLU Code": 4564,
    "Name": "Retailer Assigned Carrots"
  },
  {
    "PLU Code": 4565,
    "Name": "Retailer Assigned Carrots"
  },
  {
    "PLU Code": 4566,
    "Name": "Florettes Cauliflower"
  },
  {
    "PLU Code": 4567,
    "Name": "Green Cauliflower"
  },
  {
    "PLU Code": 4568,
    "Name": "Purple Cauliflower"
  },
  {
    "PLU Code": 4569,
    "Name": "Retailer Assigned Cauliflower"
  },
  {
    "PLU Code": 4570,
    "Name": "Retailer Assigned Cauliflower"
  },
  {
    "PLU Code": 4571,
    "Name": "Retailer Assigned Cauliflower"
  },
  {
    "PLU Code": 4572,
    "Name": "Large Cauliflower"
  },
  {
    "PLU Code": 4573,
    "Name": "Baby Cauliflower"
  },
  {
    "PLU Code": 4575,
    "Name": "Hearts Celery"
  },
  {
    "PLU Code": 4576,
    "Name": "Celery Sticks Celery"
  },
  {
    "PLU Code": 4577,
    "Name": "Retailer Assigned Celery"
  },
  {
    "PLU Code": 4578,
    "Name": "Retailer Assigned Celery"
  },
  {
    "PLU Code": 4579,
    "Name": "Retailer Assigned Celery"
  },
  {
    "PLU Code": 4580,
    "Name": "Retailer Assigned Celery"
  },
  {
    "PLU Code": 4581,
    "Name": "Retailer Assigned Celery"
  },
  {
    "PLU Code": 4582,
    "Name": "Large Bunch Celery"
  },
  {
    "PLU Code": 4583,
    "Name": "Large Bunch Celery"
  },
  {
    "PLU Code": 4584,
    "Name": "Large Green (Includes Keitt and Francis) Mango"
  },
  {
    "PLU Code": 4585,
    "Name": "Celery root/celeriac"
  },
  {
    "PLU Code": 4586,
    "Name": "Green Chard (swiss chard)/silverbeet"
  },
  {
    "PLU Code": 4587,
    "Name": "Red Chard (swiss chard)/silverbeet"
  },
  {
    "PLU Code": 4588,
    "Name": "Retailer Assigned Chard (swiss chard)/silverbeet"
  },
  {
    "PLU Code": 4589,
    "Name": "Sweet Corn, Baby Corn"
  },
  {
    "PLU Code": 4590,
    "Name": "Sweet Corn, Bi-Color Corn"
  },
  {
    "PLU Code": 4591,
    "Name": "Retailer Assigned Corn"
  },
  {
    "PLU Code": 4592,
    "Name": "Armenian Cucumber"
  },
  {
    "PLU Code": 4593,
    "Name": "English/Hot House/Long Seedless/Telegraph/Continental Cucumber"
  },
  {
    "PLU Code": 4594,
    "Name": "Japanese/White Cucumber"
  },
  {
    "PLU Code": 4595,
    "Name": "Lemon Cucumber"
  },
  {
    "PLU Code": 4596,
    "Name": "Pickling/Gherkin Cucumber"
  },
  {
    "PLU Code": 4597,
    "Name": "Retailer Assigned Cucumber"
  },
  {
    "PLU Code": 4598,
    "Name": "(See also RADISH) Daikon"
  },
  {
    "PLU Code": 4599,
    "Name": "Baby Eggplant (aubergine)"
  },
  {
    "PLU Code": 4600,
    "Name": "Baby White Eggplant (aubergine)"
  },
  {
    "PLU Code": 4601,
    "Name": "Japanese Eggplant (aubergine)"
  },
  {
    "PLU Code": 4602,
    "Name": "White Eggplant (aubergine)"
  },
  {
    "PLU Code": 4603,
    "Name": "Retailer Assigned Eggplant (aubergine)"
  },
  {
    "PLU Code": 4604,
    "Name": "Endive/chicory"
  },
  {
    "PLU Code": 4605,
    "Name": "Green Escarole/batavian chicory"
  },
  {
    "PLU Code": 4606,
    "Name": "Fiddlehead ferns"
  },
  {
    "PLU Code": 4607,
    "Name": "Chinese or Indian Mustard Gai (gui) choy (chinese or indian mustard)"
  },
  {
    "PLU Code": 4608,
    "Name": "Regular Garlic"
  },
  {
    "PLU Code": 4609,
    "Name": "Elephant Garlic"
  },
  {
    "PLU Code": 4610,
    "Name": "Retailer Assigned Garlic"
  },
  {
    "PLU Code": 4611,
    "Name": "Retailer Assigned Garlic"
  },
  {
    "PLU Code": 4612,
    "Name": "Regular Ginger root"
  },
  {
    "PLU Code": 4613,
    "Name": "Retailer Assigned Ginger root"
  },
  {
    "PLU Code": 4614,
    "Name": "Collard Greens"
  },
  {
    "PLU Code": 4615,
    "Name": "Dandelion Greens"
  },
  {
    "PLU Code": 4616,
    "Name": "Mustard (Synonymous with Gai (Gui) Choy) Greens"
  },
  {
    "PLU Code": 4617,
    "Name": "Polk Greens Greens"
  },
  {
    "PLU Code": 4618,
    "Name": "Texas Mustard Greens"
  },
  {
    "PLU Code": 4619,
    "Name": "Turnip Greens"
  },
  {
    "PLU Code": 4620,
    "Name": "Retailer Assigned Greens"
  },
  {
    "PLU Code": 4621,
    "Name": "Retailer Assigned Greens"
  },
  {
    "PLU Code": 4622,
    "Name": "Retailer Assigned Greens"
  },
  {
    "PLU Code": 4623,
    "Name": "Retailer Assigned Greens"
  },
  {
    "PLU Code": 4624,
    "Name": "Retailer Assigned Greens"
  },
  {
    "PLU Code": 4625,
    "Name": "Horseradish root"
  },
  {
    "PLU Code": 4626,
    "Name": "Jicama/yam bean"
  },
  {
    "PLU Code": 4627,
    "Name": "Kale"
  },
  {
    "PLU Code": 4628,
    "Name": "Kohlrabi"
  },
  {
    "PLU Code": 4629,
    "Name": "Regular Leeks"
  },
  {
    "PLU Code": 4630,
    "Name": "Baby Leeks"
  },
  {
    "PLU Code": 4631,
    "Name": "Bibb/Flat/Round Lettuce"
  },
  {
    "PLU Code": 4632,
    "Name": "Boston/Butter Lettuce"
  },
  {
    "PLU Code": 4633,
    "Name": "Hydroponic Lettuce"
  },
  {
    "PLU Code": 4634,
    "Name": "Iceberg Lettuce"
  },
  {
    "PLU Code": 4635,
    "Name": "Red Seedless (All others not listed under red seedless) Grapes"
  },
  {
    "PLU Code": 4636,
    "Name": "Red Globe Grapes"
  },
  {
    "PLU Code": 4637,
    "Name": "Red Seeded (All others not listed above) Grapes"
  },
  {
    "PLU Code": 4638,
    "Name": "Fantasy/Marroo Grapes"
  },
  {
    "PLU Code": 4639,
    "Name": "Mache Lettuce"
  },
  {
    "PLU Code": 4640,
    "Name": "Romaine/Cos Lettuce"
  },
  {
    "PLU Code": 4641,
    "Name": "Retailer Assigned Lettuce"
  },
  {
    "PLU Code": 4642,
    "Name": "Retailer Assigned Lettuce"
  },
  {
    "PLU Code": 4643,
    "Name": "Retailer Assigned Lettuce"
  },
  {
    "PLU Code": 4644,
    "Name": "Malanga"
  },
  {
    "PLU Code": 4645,
    "Name": "Small Regular, Button Mushrooms"
  },
  {
    "PLU Code": 4646,
    "Name": "Black Forest Mushrooms"
  },
  {
    "PLU Code": 4647,
    "Name": "Chanterelle Mushrooms"
  },
  {
    "PLU Code": 4648,
    "Name": "Cremini/Brown/Swiss Brown Mushrooms"
  },
  {
    "PLU Code": 4649,
    "Name": "Oyster Mushrooms"
  },
  {
    "PLU Code": 4650,
    "Name": "Portabella (Synonymous with Cremini, Brown, Swiss Brown Mushrooms) Mushrooms"
  },
  {
    "PLU Code": 4651,
    "Name": "Shiitake Mushrooms"
  },
  {
    "PLU Code": 4652,
    "Name": "Wood Ear Mushrooms"
  },
  {
    "PLU Code": 4653,
    "Name": "Retailer Assigned Mushrooms"
  },
  {
    "PLU Code": 4654,
    "Name": "Retailer Assigned Mushrooms"
  },
  {
    "PLU Code": 4655,
    "Name": "Regular (Green) Okra"
  },
  {
    "PLU Code": 4656,
    "Name": "Chinese Okra"
  },
  {
    "PLU Code": 4657,
    "Name": "Red Okra"
  },
  {
    "PLU Code": 4658,
    "Name": "Boiling Onions"
  },
  {
    "PLU Code": 4659,
    "Name": "Bulb Onions"
  },
  {
    "PLU Code": 4660,
    "Name": "Pearl Onions"
  },
  {
    "PLU Code": 4661,
    "Name": "Pickling, White Onions"
  },
  {
    "PLU Code": 4662,
    "Name": "Shallots Onions"
  },
  {
    "PLU Code": 4663,
    "Name": "White Onions"
  },
  {
    "PLU Code": 4664,
    "Name": "Regular - Red, On the Vine (Truss) Tomatoes"
  },
  {
    "PLU Code": 4665,
    "Name": "Small Yellow/Brown Onions"
  },
  {
    "PLU Code": 4666,
    "Name": "Retailer Assigned Onions"
  },
  {
    "PLU Code": 4667,
    "Name": "Retailer Assigned Onions"
  },
  {
    "PLU Code": 4668,
    "Name": "Retailer Assigned Onions"
  },
  {
    "PLU Code": 4669,
    "Name": "Retailer Assigned Onions"
  },
  {
    "PLU Code": 4670,
    "Name": "Retailer Assigned Onions"
  },
  {
    "PLU Code": 4671,
    "Name": "Parsley root(hamburg parsley)"
  },
  {
    "PLU Code": 4672,
    "Name": "Parsnip"
  },
  {
    "PLU Code": 4673,
    "Name": "Blackeyed Peas"
  },
  {
    "PLU Code": 4674,
    "Name": "Green Peas"
  },
  {
    "PLU Code": 4675,
    "Name": "Sugar Snap Peas"
  },
  {
    "PLU Code": 4676,
    "Name": "Retailer Assigned Peas"
  },
  {
    "PLU Code": 4677,
    "Name": "Anaheim (Green and Red) Peppers (capsicums)"
  },
  {
    "PLU Code": 4678,
    "Name": "Banana (Yellow Long) Peppers (capsicums)"
  },
  {
    "PLU Code": 4679,
    "Name": "Bell, Field Grown - Brown Peppers (capsicums)"
  },
  {
    "PLU Code": 4680,
    "Name": "Bell, Field Grown - Golden (Yellow) Peppers (capsicums)"
  },
  {
    "PLU Code": 4681,
    "Name": "Small Bell, Field Grown - Green Peppers (capsicums)"
  },
  {
    "PLU Code": 4682,
    "Name": "Bell, Field Grown - Orange Peppers (capsicums)"
  },
  {
    "PLU Code": 4683,
    "Name": "Bell, Field Grown - Purple Peppers (capsicums)"
  },
  {
    "PLU Code": 4684,
    "Name": "Bell, Field Grown - White Peppers (capsicums)"
  },
  {
    "PLU Code": 4685,
    "Name": "Chili - Dried Peppers (capsicums)"
  },
  {
    "PLU Code": 4686,
    "Name": "Chili - Green Peppers (capsicums)"
  },
  {
    "PLU Code": 4687,
    "Name": "Cubanelle Peppers (capsicums)"
  },
  {
    "PLU Code": 4688,
    "Name": "Bell, Greenhouse - Red Peppers (capsicums)"
  },
  {
    "PLU Code": 4689,
    "Name": "Bell, Greenhouse - Yellow Peppers (capsicums)"
  },
  {
    "PLU Code": 4690,
    "Name": "Hot (Hungarian Hot) Peppers (capsicums)"
  },
  {
    "PLU Code": 4691,
    "Name": "Hot Mixed Peppers (capsicums)"
  },
  {
    "PLU Code": 4692,
    "Name": "Hungarian Wax Peppers (capsicums)"
  },
  {
    "PLU Code": 4693,
    "Name": "Jalapeno - Green/Mexican Green Peppers (capsicums)"
  },
  {
    "PLU Code": 4694,
    "Name": "Jalapeno - Red/Mexican Red Peppers (capsicums)"
  },
  {
    "PLU Code": 4695,
    "Name": "Japanese - Red Peppers (capsicums)"
  },
  {
    "PLU Code": 4696,
    "Name": "Long Hot - Green Peppers (capsicums)"
  },
  {
    "PLU Code": 4697,
    "Name": "Long Hot - Red Peppers (capsicums)"
  },
  {
    "PLU Code": 4698,
    "Name": "Morita Chili Peppers (capsicums)"
  },
  {
    "PLU Code": 4699,
    "Name": "Negro Peppers (capsicums)"
  },
  {
    "PLU Code": 4700,
    "Name": "New Mexico Peppers (capsicums)"
  },
  {
    "PLU Code": 4701,
    "Name": "Pasilla - Green Peppers (capsicums)"
  },
  {
    "PLU Code": 4702,
    "Name": "Pasilla - Red Peppers (capsicums)"
  },
  {
    "PLU Code": 4703,
    "Name": "Pasilla Pod Peppers (capsicums)"
  },
  {
    "PLU Code": 4704,
    "Name": "Pinole Peppers (capsicums)"
  },
  {
    "PLU Code": 4705,
    "Name": "Poblano Peppers (capsicums)"
  },
  {
    "PLU Code": 4706,
    "Name": "Red Cheese Peppers (capsicums)"
  },
  {
    "PLU Code": 4707,
    "Name": "Red Finger Peppers (capsicums)"
  },
  {
    "PLU Code": 4708,
    "Name": "Red Pimiento/ Red Sweet Long Peppers (capsicums)"
  },
  {
    "PLU Code": 4709,
    "Name": "Serrano Peppers (capsicums)"
  },
  {
    "PLU Code": 4710,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4711,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4712,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4713,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4714,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4715,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4716,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4717,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4718,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4719,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4720,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4721,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4722,
    "Name": "Retailer Assigned Peppers (capsicums)"
  },
  {
    "PLU Code": 4723,
    "Name": "Creamer - Red Potato"
  },
  {
    "PLU Code": 4724,
    "Name": "Creamer - White Potato"
  },
  {
    "PLU Code": 4725,
    "Name": "Russet Potato"
  },
  {
    "PLU Code": 4726,
    "Name": "Long - White Potato"
  },
  {
    "PLU Code": 4727,
    "Name": "Yellow Potato"
  },
  {
    "PLU Code": 4728,
    "Name": "Retailer Assigned Potato"
  },
  {
    "PLU Code": 4729,
    "Name": "Retailer Assigned Potato"
  },
  {
    "PLU Code": 4730,
    "Name": "Retailer Assigned Potato"
  },
  {
    "PLU Code": 4731,
    "Name": "Retailer Assigned Potato"
  },
  {
    "PLU Code": 4732,
    "Name": "Retailer Assigned Potato"
  },
  {
    "PLU Code": 4733,
    "Name": "Retailer Assigned Potato"
  },
  {
    "PLU Code": 4734,
    "Name": "Mini Pumpkin"
  },
  {
    "PLU Code": 4735,
    "Name": "Regular Pumpkin"
  },
  {
    "PLU Code": 4736,
    "Name": "Retailer Assigned Pumpkin"
  },
  {
    "PLU Code": 4737,
    "Name": "Retailer Assigned Pumpkin"
  },
  {
    "PLU Code": 4738,
    "Name": "Radicchio"
  },
  {
    "PLU Code": 4739,
    "Name": "Black Radish"
  },
  {
    "PLU Code": 4740,
    "Name": "Bunched White Radish"
  },
  {
    "PLU Code": 4741,
    "Name": "Italian Red Radish"
  },
  {
    "PLU Code": 4742,
    "Name": "Red Radish"
  },
  {
    "PLU Code": 4743,
    "Name": "White/Icicle Radish"
  },
  {
    "PLU Code": 4744,
    "Name": "Retailer Assigned Radish"
  },
  {
    "PLU Code": 4745,
    "Name": "Regular Rhubarb"
  },
  {
    "PLU Code": 4746,
    "Name": "Retailer Assigned Rhubarb"
  },
  {
    "PLU Code": 4747,
    "Name": "Regular Rutabagas (swede)"
  },
  {
    "PLU Code": 4748,
    "Name": "Retailer Assigned Rutabagas (swede)"
  },
  {
    "PLU Code": 4749,
    "Name": "Retailer Assigned Spinach"
  },
  {
    "PLU Code": 4750,
    "Name": "Acorn/Table Queen Squash"
  },
  {
    "PLU Code": 4751,
    "Name": "Acorn - Golden Squash"
  },
  {
    "PLU Code": 4752,
    "Name": "Acorn - Swan White Table Queen Squash"
  },
  {
    "PLU Code": 4753,
    "Name": "Australian Blue Squash"
  },
  {
    "PLU Code": 4754,
    "Name": "Baby Scallopini Squash"
  },
  {
    "PLU Code": 4755,
    "Name": "Baby Summer (Green) Squash"
  },
  {
    "PLU Code": 4756,
    "Name": "Baby Green Zucchini/Courgette Squash"
  },
  {
    "PLU Code": 4757,
    "Name": "Banana Squash"
  },
  {
    "PLU Code": 4758,
    "Name": "Buttercup Squash"
  },
  {
    "PLU Code": 4759,
    "Name": "Butternut Squash"
  },
  {
    "PLU Code": 4760,
    "Name": "Calabaza Squash"
  },
  {
    "PLU Code": 4761,
    "Name": "Chayote/Choko Squash"
  },
  {
    "PLU Code": 4762,
    "Name": "Extra Large Artichokes"
  },
  {
    "PLU Code": 4763,
    "Name": "Delicata/Sweet Potato Squash"
  },
  {
    "PLU Code": 4764,
    "Name": "(Sweet) Dumpling Squash"
  },
  {
    "PLU Code": 4765,
    "Name": "Gem Squash"
  },
  {
    "PLU Code": 4766,
    "Name": "Golden Delicious Squash"
  },
  {
    "PLU Code": 4767,
    "Name": "Golden Nugget Squash"
  },
  {
    "PLU Code": 4768,
    "Name": "Hubbard Squash"
  },
  {
    "PLU Code": 4769,
    "Name": "Kabocha Squash"
  },
  {
    "PLU Code": 4770,
    "Name": "Hass Avocados"
  },
  {
    "PLU Code": 4771,
    "Name": "Medium Green Avocados"
  },
  {
    "PLU Code": 4772,
    "Name": "Chili - Yellow Peppers (capsicums)"
  },
  {
    "PLU Code": 4773,
    "Name": "Patty Pan/Summer Squash"
  },
  {
    "PLU Code": 4774,
    "Name": "Red Kuri Squash"
  },
  {
    "PLU Code": 4775,
    "Name": "Scallopini Squash"
  },
  {
    "PLU Code": 4776,
    "Name": "Spaghetti/Vegetable Spaghetti Squash"
  },
  {
    "PLU Code": 4777,
    "Name": "Sunburst (Yellow) Squash"
  },
  {
    "PLU Code": 4778,
    "Name": "Regular - Yellow Tomatoes"
  },
  {
    "PLU Code": 4779,
    "Name": "Sweet Mama Squash"
  },
  {
    "PLU Code": 4780,
    "Name": "Turban Squash"
  },
  {
    "PLU Code": 4781,
    "Name": "White Squash"
  },
  {
    "PLU Code": 4782,
    "Name": "Yellow - Straightneck Squash"
  },
  {
    "PLU Code": 4783,
    "Name": "Foo Qua Bitter melon/bitter gourd, foo qua"
  },
  {
    "PLU Code": 4784,
    "Name": "Yellow - Crookneck Squash"
  },
  {
    "PLU Code": 4785,
    "Name": "Retailer Assigned Squash"
  },
  {
    "PLU Code": 4786,
    "Name": "Retailer Assigned Squash"
  },
  {
    "PLU Code": 4787,
    "Name": "Retailer Assigned Squash"
  },
  {
    "PLU Code": 4788,
    "Name": "Retailer Assigned Squash"
  },
  {
    "PLU Code": 4789,
    "Name": "Retailer Assigned Squash"
  },
  {
    "PLU Code": 4790,
    "Name": "Sugar cane"
  },
  {
    "PLU Code": 4791,
    "Name": "Sunchokes (jerusalem artichokes)"
  },
  {
    "PLU Code": 4792,
    "Name": "Golden Tamarillo"
  },
  {
    "PLU Code": 4793,
    "Name": "Red Tamarillo"
  },
  {
    "PLU Code": 4794,
    "Name": "Small Taro root (dasheen)"
  },
  {
    "PLU Code": 4795,
    "Name": "Large Taro root (dasheen)"
  },
  {
    "PLU Code": 4796,
    "Name": "Cherry - Red Tomatoes"
  },
  {
    "PLU Code": 4797,
    "Name": "Cherry - Yellow Tomatoes"
  },
  {
    "PLU Code": 4798,
    "Name": "Small Greenhouse/Hydroponic/Regular - Red Tomatoes"
  },
  {
    "PLU Code": 4799,
    "Name": "Large Greenhouse/Hydroponic/Regular - Red Tomatoes"
  },
  {
    "PLU Code": 4800,
    "Name": "Native/Home Grown Tomatoes"
  },
  {
    "PLU Code": 4801,
    "Name": "Tomatillos/Husk Tomatoes Tomatoes"
  },
  {
    "PLU Code": 4802,
    "Name": "Dried Tomatoes"
  },
  {
    "PLU Code": 4803,
    "Name": "Teardrop/Pear - Red Tomatoes"
  },
  {
    "PLU Code": 4804,
    "Name": "Teardrop/Pear - Yellow Tomatoes"
  },
  {
    "PLU Code": 4805,
    "Name": "Small Vine Ripe, Regular - Red Tomatoes"
  },
  {
    "PLU Code": 4806,
    "Name": "Retailer Assigned Tomatoes"
  },
  {
    "PLU Code": 4807,
    "Name": "Retailer Assigned Tomatoes"
  },
  {
    "PLU Code": 4808,
    "Name": "Retailer Assigned Tomatoes"
  },
  {
    "PLU Code": 4809,
    "Name": "Baby Turnip"
  },
  {
    "PLU Code": 4810,
    "Name": "Bunch/Banded Turnip"
  },
  {
    "PLU Code": 4811,
    "Name": "Purple Top Turnip"
  },
  {
    "PLU Code": 4812,
    "Name": "White Turnip"
  },
  {
    "PLU Code": 4813,
    "Name": "Retailer Assigned Turnip"
  },
  {
    "PLU Code": 4814,
    "Name": "Water chestnuts"
  },
  {
    "PLU Code": 4815,
    "Name": "Watercress"
  },
  {
    "PLU Code": 4816,
    "Name": "Golden Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 4817,
    "Name": "Large Red/Orangy Red Flesh Sweet potato/yam/kumara"
  },
  {
    "PLU Code": 4818,
    "Name": "Retailer Assigned Name"
  },
  {
    "PLU Code": 4819,
    "Name": "Yuca root/cassava/manioc"
  },
  {
    "PLU Code": 4820,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4821,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4822,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4823,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4824,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4825,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4826,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4827,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4828,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4829,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4830,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4831,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4832,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4833,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4834,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4835,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4836,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4837,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4838,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4839,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4840,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4841,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4842,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4843,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4844,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4845,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4846,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4847,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4848,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4849,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4850,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4851,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4852,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4853,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4854,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4855,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4856,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4857,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4858,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4859,
    "Name": "Retailer Assigned Other vegetables"
  },
  {
    "PLU Code": 4860,
    "Name": "Dried Apple slices"
  },
  {
    "PLU Code": 4861,
    "Name": "Dried Apricots"
  },
  {
    "PLU Code": 4862,
    "Name": "Dried Dates"
  },
  {
    "PLU Code": 4863,
    "Name": "Retailer Assigned - Dried Dates"
  },
  {
    "PLU Code": 4864,
    "Name": "Dried Pineapple"
  },
  {
    "PLU Code": 4865,
    "Name": "Regular (Dried Fruit) Prunes"
  },
  {
    "PLU Code": 4866,
    "Name": "Pitted (Dried Fruit) Prunes"
  },
  {
    "PLU Code": 4867,
    "Name": "Retailer Assigned - Dried Prunes"
  },
  {
    "PLU Code": 4868,
    "Name": "Black (Dried Fruit) Raisins"
  },
  {
    "PLU Code": 4869,
    "Name": "Golden/Yellow (Dried Fruit) Raisins"
  },
  {
    "PLU Code": 4870,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4871,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4872,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4873,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4874,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4875,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4876,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4877,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4878,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4879,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4880,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4881,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4882,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4883,
    "Name": "Retailer Assigned Other dried fruits"
  },
  {
    "PLU Code": 4884,
    "Name": "Arugula/rocket"
  },
  {
    "PLU Code": 4885,
    "Name": "Basil"
  },
  {
    "PLU Code": 4886,
    "Name": "Opal Basil"
  },
  {
    "PLU Code": 4887,
    "Name": "Sweet Basil"
  },
  {
    "PLU Code": 4888,
    "Name": "Chives"
  },
  {
    "PLU Code": 4889,
    "Name": "Cilantro (chinese parsley/coriander)"
  },
  {
    "PLU Code": 4890,
    "Name": "Chinese Yali Pears"
  },
  {
    "PLU Code": 4891,
    "Name": "Dill"
  },
  {
    "PLU Code": 4892,
    "Name": "Baby Dill"
  },
  {
    "PLU Code": 4893,
    "Name": "Pickling Dill"
  },
  {
    "PLU Code": 4894,
    "Name": "Lemongrass"
  },
  {
    "PLU Code": 4895,
    "Name": "Marjoram"
  },
  {
    "PLU Code": 4896,
    "Name": "Mint"
  },
  {
    "PLU Code": 4897,
    "Name": "Oregano"
  },
  {
    "PLU Code": 4898,
    "Name": "Oyster plant/salsify"
  },
  {
    "PLU Code": 4899,
    "Name": "Regular/Curly Parsley"
  },
  {
    "PLU Code": 4901,
    "Name": "Italian/Continental/French Parsley"
  },
  {
    "PLU Code": 4902,
    "Name": "Retailer Assigned Parsley"
  },
  {
    "PLU Code": 4903,
    "Name": "Rosemary"
  },
  {
    "PLU Code": 4904,
    "Name": "Sage"
  },
  {
    "PLU Code": 4905,
    "Name": "Sorrel"
  },
  {
    "PLU Code": 4906,
    "Name": "Tarragon"
  },
  {
    "PLU Code": 4907,
    "Name": "Thyme"
  },
  {
    "PLU Code": 4908,
    "Name": "Vanilla bean"
  },
  {
    "PLU Code": 4909,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4910,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4911,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4912,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4913,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4914,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4915,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4916,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4917,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4918,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4919,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4920,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4921,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4922,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4923,
    "Name": "Retailer Assigned Other herbs"
  },
  {
    "PLU Code": 4924,
    "Name": "Almonds"
  },
  {
    "PLU Code": 4925,
    "Name": "Retailer Assigned Almonds"
  },
  {
    "PLU Code": 4926,
    "Name": "Brazilnuts"
  },
  {
    "PLU Code": 4927,
    "Name": "Chestnuts"
  },
  {
    "PLU Code": 4928,
    "Name": "Cobnut/Hazelnut Filberts"
  },
  {
    "PLU Code": 4929,
    "Name": "Mixed nuts"
  },
  {
    "PLU Code": 4930,
    "Name": "Peanuts"
  },
  {
    "PLU Code": 4931,
    "Name": "Raw Peanuts"
  },
  {
    "PLU Code": 4932,
    "Name": "Roasted - Salted Peanuts"
  },
  {
    "PLU Code": 4933,
    "Name": "Roasted - Unsalted Peanuts"
  },
  {
    "PLU Code": 4934,
    "Name": "Retailer Assigned Peanuts"
  },
  {
    "PLU Code": 4935,
    "Name": "Retailer Assigned Peanuts"
  },
  {
    "PLU Code": 4936,
    "Name": "Pecans"
  },
  {
    "PLU Code": 4937,
    "Name": "Retailer Assigned Pecans"
  },
  {
    "PLU Code": 4938,
    "Name": "Pine nuts (pignoli)"
  },
  {
    "PLU Code": 4939,
    "Name": "Natural Pistachio"
  },
  {
    "PLU Code": 4940,
    "Name": "Red Pistachio"
  },
  {
    "PLU Code": 4941,
    "Name": "Retailer Assigned Pistachio"
  },
  {
    "PLU Code": 4942,
    "Name": "Sunflower seeds"
  },
  {
    "PLU Code": 4943,
    "Name": "Regular Walnuts"
  },
  {
    "PLU Code": 4944,
    "Name": "Black Walnuts"
  },
  {
    "PLU Code": 4945,
    "Name": "White Walnuts"
  },
  {
    "PLU Code": 4946,
    "Name": "Retailer Assigned Walnuts"
  },
  {
    "PLU Code": 4947,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4948,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4949,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4950,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4951,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4952,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4953,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4954,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4955,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4956,
    "Name": "Retailer Assigned Other nuts"
  },
  {
    "PLU Code": 4957,
    "Name": "Blue/Black Seeded (All others not listed above) Grapes"
  },
  {
    "PLU Code": 4958,
    "Name": "Medium Lemons"
  },
  {
    "PLU Code": 4959,
    "Name": "Large Red (Includes Tommy Atkins, Kent, Palmer Vandyke, Edward, Hayden) Mango"
  },
  {
    "PLU Code": 4960,
    "Name": "Fragrant Pears"
  },
  {
    "PLU Code": 4961,
    "Name": "Large Yellow Mango"
  }];
  
  const searchInput = document.getElementById("searchInput");
  const outputLabel = document.getElementById("outputLabel");
  const clearButton = document.getElementById("clearButton");
  const exitButton = document.getElementById("exitButton");

  searchInput.addEventListener("input", function () {
    const searchFor = searchInput.value.trim();
    if (searchFor) {
      const results = df.filter(
        (row) =>
          row["Name"].toLowerCase().includes(searchFor.toLowerCase()) ||
          row["PLU Code"].includes(searchFor)
      );
      const resultsStr = results
        .map((row) => `${row["PLU Code"]} - ${row["Name"]}`)
        .join("\n");
      outputLabel.textContent = resultsStr;
    } else {
      outputLabel.textContent = "";
    }
  });

  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    outputLabel.textContent = "";
  });

  exitButton.addEventListener("click", function () {
    window.close();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const pluCodes = [4011, 4012, 4013, 4014];
  function displayPLUCodes(pluCodes) {
    const listElement = document.getElementById('pluList');
    pluCodes.forEach(code => {
      const listItem = document.createElement('li');
      listItem.textContent = code;
      listElement.appendChild(listItem);
    });
  }
  displayPLUCodes(pluCodes);
});
