const EnderecoSchema	= {
	"type":	"object",
	"properties": {
		"estado": {
			"type": "string"
		},
		"cidade": {
			"type": "string"
		},
		"cep": {
			"type": "integer"
		},
		"bairro": {
			"type": "string"
		},
		"rua": {
			"type": "string"
		},
		"numero": {
			"type": "integer"
		},
	},
	"required": [
		"estado",
		"cidade",
		"cep",
		"bairro",
		"rua",
		"numero"
	]
}

export default EnderecoSchema
