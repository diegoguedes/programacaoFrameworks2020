package br.com.diego.item;


public class Item {

	private String codigo;
	private String nome;
	
	public Item(String codigo, String nome) {
		this.codigo = codigo;
		this.nome = nome;		
	}

	Item(String codigo) {
		this.codigo = codigo;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}	
}
