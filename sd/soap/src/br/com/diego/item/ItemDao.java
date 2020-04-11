package br.com.diego.item;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;

public class ItemDao {

	private static Map<String, Item> ITENS = new LinkedHashMap<>();

	public ItemDao() {
		popularItensNoMapa();
	}

	public ArrayList<Item> todosItens() {

		ArrayList<Item> resultados = new ArrayList<Item>();
		Collection<Item> todosItens = ITENS.values();

		resultados.addAll(todosItens);
		return resultados;

	}

	private void popularItensNoMapa() {
		ITENS.put("MOX", new Item("MOX", "Moto X"));
		ITENS.put("IPX", new Item("IPX", "IPhone X"));
	}

}
