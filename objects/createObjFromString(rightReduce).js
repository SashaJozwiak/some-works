const namespace = (str) => str.split(".").reduceRight((acc, key) => ({ [key]: acc }), {});

console.log(namespace('1.2.3.4'))
