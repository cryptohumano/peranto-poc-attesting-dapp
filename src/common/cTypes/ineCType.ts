import type { ICType } from '@kiltprotocol/sdk-js';

export const ineCType: ICType = {
  $schema: 'ipfs://bafybeiah66wbkhqbqn7idkostj2iqyan2tstc4tpqt65udlhimd7hcxjyq/',
  additionalProperties: false,
  "properties": {
    "cic": {
      "type": "string"
    },
    "citizenId": {
      "type": "string"
    },
    "country": {
      "maxLength": 30,
      "minLength": 1,
      "type": "string"
    },
    "curp": {
      "type": "string"
    },
    "dateOfBirth": {
      "type": "string"
    },
    "documentIssueDate": {
      "type": "string"
    },
    "documentValidity": {
      "type": "string"
    },
    "electorKey": {
      "type": "string"
    },
    "fullName": {
      "maxLength": 100,
      "minLength": 1,
      "type": "string"
    },
    "gender": {
      "type": "string"
    },
    "governmentDbValidationIne": {
      "type": "string"
    },
    "governmentDbValidationRenapo": {
      "type": "string"
    },
    "idType": {
      "type": "string"
    },
    "locality": {
      "type": "string"
    },
    "mrz": {
      "type": "string"
    },
    "municipality": {
      "type": "string"
    },
    "municipalityName": {
      "type": "string"
    },
    "ocr": {
      "type": "string"
    },
    "registrationDate": {
      "type": "string"
    },
    "residenceAddress": {
      "type": "string"
    },
    "section": {
      "type": "string"
    },
    "state": {
      "type": "string"
    },
    "stateName": {
      "type": "string"
    },
  },
  title: 'Peranto_ID_MX',
  type: 'object',
  $id: 'kilt:ctype:0x9e91e0e0c1e9b28de7280ea728e4f249e8db6d033c5d96540b27b7151c7e551b',
};
