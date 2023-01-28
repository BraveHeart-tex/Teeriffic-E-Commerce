require('dotenv').config();

const Airtable = require('airtable-node');
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  //event.queryStringParameters
  const { id } = event.queryStringParameters;
  if (id) {
    let product = await airtable.retrieve(id);
    if (product.error) {
      return {
        statusCode: 404,
        body: `No product found with the provided id: ${id}`,
      };
    }
    product = { id: product.id, ...product.fields };
    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  }
  return {
    statusCode: 400,
    body: 'Please provide a product id',
  };
};
