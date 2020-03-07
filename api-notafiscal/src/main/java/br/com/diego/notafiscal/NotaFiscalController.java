package br.com.diego.notafiscal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notafiscal")
@CrossOrigin
public class NotaFiscalController {
	@Autowired
	private NotaFiscalRepository rp;

	
	@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public Iterable<NotaFiscal> salva(@Valid @RequestBody NotaFiscal notaFiscal) {
		System.out.println("entrou");

		rp.save(notaFiscal);

		return lista();
	}
	
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
	public Iterable<NotaFiscal> deleta(@Valid @PathVariable long id) {
		NotaFiscal nf = rp.findOne(id);

		if (nf != null) {
			rp.delete(nf);
		}
		
		return lista();
	}

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<NotaFiscal> lista() {
		return rp.findAll();
	}

	
}