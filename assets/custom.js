const query = `{products(first: 20) { edges { node { title description images(first: 1) { edges { node { altText transformedSrc(maxWidth: 400, maxHeight: 400) } } } } } } }`;
function apiProductCall(query) {
    return fetch ('https://svetocentrism.myshopify.com/api/graphql.json',
    { method: 'POST', 
          headers: { 'Content-Type': 'application/graphql', 
                     "Access-Control-Origin": "*", 
                     'X-Shopify-Storefront-Access-Token': "60c019b0448c50c8529a5f580d5df9b6" 
                   },
          "body": query })
          .then(response => response.json()); } 

apiProductCall(query).then(response => { console.log(response) });

