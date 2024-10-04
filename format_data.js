/*
    Primeiro é necessário tirar uma extração dos protocolos que estão com os valores errados e exportar como json
    @author: Christian Gallo
*/

const resultSet = [
  {
    "code": "3333548",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8305392\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Outros\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  2/8/2024 - 11:16:45\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-09-8\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "3531720",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"1\",\"ouvidoriahotmart.label.feedbackData\":\"2024-06-29\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "3744949",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8331014\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Outros\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  22/8/2024 - 17:18:14\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-09-6\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "3785143",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"HP41480\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Reembolso de compra realizada\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  1/7/2024 - 17:7:33\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-07-6\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "3992369",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-07-10\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "4267545",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8298899\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Outros\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  23/5/2024 - 13:39:30\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"1\",\"ouvidoriahotmart.label.feedbackData\":\"2024-05-24\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "4472417",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"40816\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Acesso ao produto adquirido\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  12/6/2024 - 14:10:33\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-06-12\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "5179201",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"HP10638\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Reembolso de compra realizada\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  27/6/2024 - 11:28:47\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-07-2\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "5207670",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"0000000\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Problemas nas funcionaliades da Plataforma\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  22/4/2024 - 9:49:9\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-04-27\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "5773539",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-09-12\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "6229323",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8066507\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Outros\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  6/5/2024 - 10:24:54\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-05-6\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "6575743",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8132008\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Reembolso de compra realizada\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  28/5/2024 - 1:11:56\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-05-29\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "6911222",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-05-28\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "7444873",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"807692\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Acesso ao produto adquirido\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  6/5/2024 - 21:45:15\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-05-10\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "7561515",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8132045\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Outros\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  28/5/2024 - 11:39:43\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-06-12\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "7562681",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8005379\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Problemas nas funcionaliades da Plataforma\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  14/4/2024 - 10:44:54\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-04-18\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "7579684",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-07-19\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "7852483",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-09-18\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "8584229",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-09-15\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "8795283",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-09-14\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  },
  {
    "code": "9636359",
    "infofields": "{\"ouvidoriahotmart.label.protocolo\":\"\\\"8153399\\\"\",\"ouvidoriahotmart.label.productType\":\"\\\"Outros\\\"\",\"ouvidoriahotmart.label.termo\":\"\\\"Confirmação de leitura realizada em  7/6/2024 - 10:11:32\\\"\",\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-06-11\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": "5408600"
  },
  {
    "code": "9805972",
    "infofields": "{\"ouvidoriahotmart.label.feedbackSatisfactoryAnswer\":\"0\",\"ouvidoriahotmart.label.feedbackSatisfactoryProcess\":\"0\",\"ouvidoriahotmart.label.feedbackData\":\"2024-04-17\",\"ouvidoriahotmart.label.feedbackOrigem\":\"Site\",\"ouvidoriahotmart.label.isFeedback\":\"true\"}",
    "capture_page_id": null
  }
]

let formatData = [];
let tmp;

resultSet.forEach(obj => {
    tmp = JSON.parse(obj.infofields);
    tmp['ouvidoriahotmart.label.feedbackSatisfactoryAnswer'] = 1;
    tmp['ouvidoriahotmart.label.feedbackSatisfactoryProcess'] = 1;
    formatData.push({
        ...obj,
        infofields: JSON.stringify(tmp)
    })
})

let SQL = {
    head : [],
    body : []
};

let in_clause = [];
let updates = [];

function mountSelectQuery() {
    return `SELECT code,infofields
                FROM casemanagement.incident
            WHERE CODE IN (${in_clause.join(',')});`;
}

function mountInQuery(code) {
    in_clause.push(code);
}

function mountUpdateQuery(code,infofields) {    
    SQL['body'] += `
        BEGIN;
            UPDATE 
            casemanagement.incident
                SET infofields = '${infofields}' 
            WHERE CODE = ${code};
        COMMIT;
    `;

}

formatData.forEach(obj => {
    const { code, infofields } = obj;
    mountInQuery(code);
    mountUpdateQuery(code,infofields);
})

SQL['head'] = mountSelectQuery();

const result = `
    ${SQL['head']}
    ${SQL['body']}    
    ${SQL['head']}
`
console.log(result);