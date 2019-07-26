import CurriculoSchema from './curriculo.model'
import EnderecoSchema from './endereco.model'

const ClienteSchema	= {
	"type": "object",
		"properties": {
			"cpf": {
				"type": "number"
			},
			"senha": {
				"type": "string",
				"minimum": 8,
				"maximum": 20
			},
			"nome": {
				"type": "string",
				"minimum": 4
			},
			"sobrenome": {
				"type": "string",
				"minimum": 4
			},
			"email": {
				"type": "string",
				"format": "email"
			},
			"telefone": {
				"type": "string",
				"format": "phone"
			},
			"endereco": EnderecoSchema,
			"cnh": {
				"type": "string"
			},
			"site": {
				"type": "string",
				"format": "url"
			},
			"relacionamento": {
				"type": "string"
			},
			"curriculo": CurriculoSchema,
		},
		"required": [
			"cpf",
			"senha",
			"nome",
			"sobrenome",
			"email",
			"telefone",
			"endereco"
	]
}

export default ClienteSchema
