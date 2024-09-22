let prodPrueba = [{
    id: "B801278",
    variations: "B801278-18",
}];


let dataResponse = [{
        codProduct: "PC002",
        created_at: "2021-01-19T11:28:06.000000Z",
        desc: null,
        html_description: null,
        html_short_description: null,
        id_kit: null,
        kit: [],
        manufacturer: null,
        material: null,
        name: "Kit de Limpeza",
        id: "PC002",
        status: "active",
        tags: null,
        theme: null,
        title: null,
        type: null,
        variations: [{
            product: "PC002",
            cod: "U",
            sku: "U",
            product_sku: "PC002",
            price: 96000,
        }]
    },
    {
        codProduct: "ENG792015_9",
        created_at: "2021-01-19T11:27:59.000000Z",
        desc: null,
        html_description: null,
        html_short_description: null,
        id_kit: null,
        kit: [],
        manufacturer: null,
        material: null,
        name: "Charm en Plata.",
        id: "ENG792015_9",
        status: "active",
        tags: null,
        theme: null,
        title: null,
        type: null,
        variations: [{
            cod: "U",
            product: "ENG792015_9",
            product_sku: "ENG792015_9",
            price: 415000,
            sku: "U"
        }]
    },
    {
        codProduct: "B801278",
        created_at: "2021-01-19T11:27:30.000000Z",
        desc: null,
        html_description: null,
        html_short_description: "Set de Regalo Brazalete en Plata Clip",
        id_kit: null,
        kit: [],
        manufacturer: null,
        material: null,
        name: "Set de Regalo Brazalete en Plata, Clip",
        id: "B801278",
        status: "active",
        tags: null,
        theme: null,
        title: null,
        type: null,
        variations: [{
                cod: "U",
                price: 950000,
                product: "B801278",
                product_sku: "B801278",
                sku: "U"
            },
            {
                cod: "20",
                price: 950000,
                product: "B801278",
                product_sku: "B801278-20",
                sku: "U",
            },
            {
                cod: "19",
                price: 950000,
                product: "B801278",
                product_sku: "B801278-19",
                sku: "U",
            },
            {
                cod: "18",
                price: 950000,
                product: "B801278",
                product_sku: "B801278-18",
                sku: "U",
            },

        ]
    }
]

let variations = dataResponse
    .filter(res => prodPrueba.some(id_prueba => id_prueba.id.includes(res.id)))[0]
    .variations.filter(v =>
          prodPrueba.some(v_prueba => 
          v_prueba.variations.includes(v.product_sku)
          )
        )

console.log(variations);

//******* */
let x = [{
    "val": 1,
    "text": "a"
  },
  {
    "val": 2,
    "text": "b"
  },
  {
    "val": 3,
    "text": "c"
  },
  {
    "val": 4,
    "text": "d"
  },
  {
    "val": 5,
    "text": "e"
  }
],
y = [{
    "val": 1,
    "text": "a"
  },
  {
    "val": 4,
    "text": "d"
  }
];


let yFilter = y.map(itemY => {
return itemY.val;
});
console.log(yFilter);
let filteredX = x.filter(itemX => yFilter.includes(itemX.val));
console.log(filteredX);