using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Services.Models;

namespace Services.Controllers {

    //O atributo EnableCors que habilita o endereço do nosso serviço para chamadas Ajax,
    [EnableCors(origins: "http://localhost:14451",
         headers: "*", methods: "*")]
    public class PessoaController : ApiController {

        //Requisição para todas as pessoas
        public HttpResponseMessage Get() {
            var pessoas = new MockPessoa().obterPessoa();

            return Request.CreateResponse(HttpStatusCode.OK, pessoas);
        }

        //Requisição que busca uma pessoa por seu id
        public HttpResponseMessage Get(int id) {
            var result = new MockPessoa().obterPessoa().Where
             (w => w.Id == id).FirstOrDefault();

            return Request.CreateResponse(HttpStatusCode.OK, result);

        }

        //Requisição que simula uma deleção
        public HttpResponseMessage Delete(int id) {
            return Request.CreateResponse(HttpStatusCode.OK,
             "Pessoa id: " + id.ToString() + " excluido com sucesso!");
        }

        //Requisição que altera uma pessoa
        public HttpResponseMessage Put(Pessoa pessoa) {
            pessoa.Nome = "Alterado";

            var result = pessoa;
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        //Requisição que salva uma pessoa
        public HttpResponseMessage Post(Pessoa pessoa) {
            pessoa.Nome = string.Format("{0} - criado", pessoa.Nome);

            var result = pessoa;
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }
    }
    
    //Classe para simular os dados de uma pessoa
    //Em um cenário real tais esses dados veriam de um banco de dados
    public class MockPessoa {
        public List<Pessoa> obterPessoa() {
            var pessoas = new List<Pessoa>();
            pessoas.Add(new Pessoa() {
                Id = 1, 
                Nome = "Fernando",
                Endereco = "Rua Abura"
            });
            pessoas.Add(new Pessoa() {
                Id = 2, 
                Nome = "Luiz",
                Endereco = "Av Bogaert"
            });
            pessoas.Add(new Pessoa() {
                Id = 3,
                Nome = "Ester",
                Endereco = "Estrada das Tarroes"
            });
            pessoas.Add(new Pessoa() {
                Id = 4,
                Nome = "Isadora",
                Endereco = "Praça da Arvore"
            });

            return pessoas;
        }
    }
}