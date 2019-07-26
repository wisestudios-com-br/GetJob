const CurriculoSchema	= {
	"type":	"object",
	"properties": {
		"experiencia_emprego": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"data_inicio": {
						"type": "string",
						"format": "date"
					},
					"data_fim": {
						"type": "string",
						"format": "date"
					},
					"empresa": {
						"type": "string"
					},
					"funcao": {
						"type": "string"
					},
					"observacao": {
						"type": "string"
					},
					"curso": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"data": {
									"type": "string",
									"format": "date"
								},
								"titulo": {
									"type": "string"
								},
								"descricao": {
									"type": "string"
								}
							},
							"required": [
								"data",
								"titulo"
							]
						}
					}
				},
				"required": [
					"data_inicio",
					"data_fim",
					"empresa",
					"funcao",
					"observacao"
				]
			}
		},
		"experiencia_outra": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"data_inicio": {
						"type": "string",
						"format": "date"
					},
					"data_fim": {
						"type": "string",
						"format": "date"
					},
					"tipo": {
						"type": "string"
					},
					"resumo": {
						"type": "string"
					}
				},
				"required": [
					"data_inicio",
					"data_fim",
					"tipo",
					"resumo"
				]
			}
		},
		"escolaridade": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"data_inicio": {
						"type": "string",
						"format": "date"
					},
					"data_fim": {
						"type": "string",
						"format": "date"
					},
					"grau": {
						"type": "string"
					},
					"local": {
						"type": "string"
					},
					"titulo": {
						"type": "string"
					},
					"anexo": {
						"type": "string"
					}
				},
				"required": [
					"data_inicio",
					"data_fim",
					"grau",
					"local",
					"titulo"
				]
			}
		},
		"referencia": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"nome": {
						"type": "string"
					}
				},
				"required": [
					"nome"
				]
			}
		},
		"habilidade": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"nome": {
						"type": "string"
					}
				},
				"required": [
					"nome"
				]
			}
		},
		"idioma": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"nome": {
						"type": "string"
					}
				},
				"required": [
					"nome"
				]
			}
		},
		"mobilidade": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"veiculo": {
						"type": "string"
					}
				},
				"required": [
					"veiculo"
				]
			}
		},
		"remuneracao": {
			"type": "string"
		},
		"objetivo": {
			"type": "string"
		},
		"contato": {
			"type": "object",
			"properties": {
				"email": {
					"type": "string",
					"format": "email"
				},
				"telefone": {
					"type": "string",
					"format": "phone"
				},
				"social": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"rede": {
								"type": "string"
							},
							"identificacao": {
								"type": "string"
							}
						},
						"required": [
							"rede",
							"identificacao"
						]
					}
				}
			},
			"required": [
				"email",
				"telefone"
			]
		}
	},
	"required": [
		"remuneracao",
		"objetivo",
		"contato"
	]
}

export default CurriculoSchema
