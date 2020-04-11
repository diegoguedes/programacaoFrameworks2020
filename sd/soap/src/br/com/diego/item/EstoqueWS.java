package br.com.diego.item;

import java.util.List;
import javax.jws.WebService;

@WebService
public class EstoqueWS {

    private ItemDao dao = new ItemDao();

    public List<Item> getItens() {

        System.out.println("Chamando getItens()");
        return dao.todosItens();
    }
}
