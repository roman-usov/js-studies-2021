var Converter = require('api-spec-converter');

Converter.convert({
  from: 'openapi_3',
  to: 'swagger_2',
  source: '/Users/romanusov/Documents/js_studies/js-studies-2021/_codewars/openapi/source.json',
})
.then(function(converted) {
  console.log(converted.stringify());
});