const ApiService = {
    ListaNotasFiscais: () => {
        return fetch('http://localhost:8080/api/notafiscal').then(resposta => resposta.json())
    },
    CriaNotaFiscal: notaFiscal => {
        return fetch('http://localhost:8080/api/notafiscal',
            { method: 'POST', headers: { 'content-type': 'application/json' }, body: notaFiscal })
            .then(res => res.json());
    }, RemoveNotaFiscal: id => {
        return fetch(`http://localhost:8080/api/notafiscal/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' }, })
            .then(res => res.json());;
    }
}
export default ApiService;