function Welcome(agent) {
  const productosRef = db.collection("Productos");
  const idProducto = "0jYKDysKjeQ80rJ20MLx";
  return productosRef
    .doc(idProducto)
    .get()
    .then((snapshot) => {
      agent.add(`IdProducto: ${snapshot.id}`);
      agent.add(`NommbreProducto: ${snapshot.data().Nombre}`);
      agent.add(message);
    })
    .catch(() => {
      agent.add(`Puede seleccionar otro producto`);
    });
}
function Welcome(agent) {
  const categoriasRef = db.collection("Categorias");
  return categoriasRef
    .get()
    .then((snapshot) => {
      agent.add(`Nuestras categorias: `);
      return snapshot.docs.map((doc) => {
        agent.add(doc.data().Nombre);
      });
    })
    .catch(() => {
      agent.add(`Puede seleccionar otro producto`);
    });
}
function Welcome(agent) {
  agent.add(`Hola como estas????`);
  const payload = {
    richContent: [
      [
        {
          type: "chips",
          options: [
            {
              text: "Dog",
              link: "https://en.wikipedia.org/wiki/Dog",
            },
            {
              text: "Cat",
              link: "https://en.wikipedia.org/wiki/Cat",
            },
            {
              text: "Rabbit",
              link: "https://en.wikipedia.org/wiki/Rabbit",
            },
          ],
        },
      ],
    ],
  };
  agent.add(
    new Payload(agent.UNSPECIFIED, payload, {
      rawPayload: true,
      sendAsMessage: true,
    })
  );
}

function Welcome(agent) {
  console.log("******agent: ", agent);
  const categoriasRef = db.collection("Categorias");
  return categoriasRef
    .get()
    .then((snapshot) => {
      agent.add(`Nuestras categorias: `);
      const arrayCategorias = snapshot.docs.map((doc) => {
        return {
          text: doc.data().Nombre,
          link: doc.data().UrlCategoria,
        };
      });
      const payload = {
        richContent: [
          [
            {
              type: "chips",
              options: arrayCategorias,
            },
          ],
        ],
      };
      agent.add(
        new Payload(agent.UNSPECIFIED, payload, {
          rawPayload: true,
          sendAsMessage: true,
        })
      );
    })
    .catch(() => {
      agent.add(`Puede seleccionar otro producto`);
    });
}

function languageHandler(agent) {
  const language = agent.parameters.language;
  if (language) {
    agent.add(`Tu lenguaje es:  ${language}`);
  } else {
    agent.add(`Ups mirada`);
  }
}
//Mi numero de pedido es  001638196841543
//Mi numero de pedido es 001638196624213
//Mi numero de pedido es 001638161113547



/*
  Default Welcome Intent
  
  {
  "richContent": [
    [
      {
        "type": "list",
        "title": "Quiero comprar",
        "subtitle": "Tenemos categorias",
        "event": {
          "name": "MenuCategoria",
          "parameters": {},
          "languageCode": ""
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "list",
        "title": "Delivery",
        "subtitle": "Tenemos tiendas y hacemos envios",
        "event": {
          "name": "MenuDelivery",
          "parameters": {},
          "languageCode": ""
        },
      },
      {
        "type": "divider"
      },
      {
        "type": "list",
        "title": "Compras",
        "subtitle": "Compra en tienda u online",
        "event": {
          "name": "MenuCompras",
          "parameters": {},
          "languageCode": ""
        },
      },
      {
        "type": "divider"
      },
      {
        "type": "list",
        "title": "Pedido",
        "subtitle": "Consulta el estado de tu pedido",
        "event": {
          "name": "MenuPedidos",
          "parameters": {},
          "languageCode": ""
        },
      },
      {
        "type": "divider"
      },
      {
        "type": "list",
        "title": "Contacto",
        "subtitle": "Consulta el estado de tu pedido",
        "link": "http://localhost:3001/contacto"
        "event": {
          "name": "",
          "parameters": {},
          "languageCode": ""
        },
      }
    ]
  ]
}




{
  "richContent": [
    [
      {
        "type": "chips",
        "options": [
          {
            "text": "Chip 1",
            "link": "https://example.com"
          }         
        ]
      }
    ]
  ]
}
  
  */


/*
[A-Z]{1,3}

*/