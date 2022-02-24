var Converter = require('api-spec-converter');

Converter.convert({
  from: 'swagger_1',
  to: 'swagger_2',
  source: 'https://github.com/roman-usov/js-studies-2021/blob/master/_codewars/openapi/source.json',
})
.then(function(converted) {
  console.log(converted.stringify());
});