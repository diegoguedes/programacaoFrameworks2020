package rmi.client;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import rmi.server.Ola;

public class Client {
	public static void main(String[] args) {
		Ola obj = null;
		String msg = "minha mensagem";
		String retorno = null;
		try {
			Registry registry = LocateRegistry.getRegistry("127.0.0.1", 2001);
			obj = (Ola) registry.lookup("OlaServidor");
			retorno = obj.showMsg(msg);
			System.out.println(retorno);
		} catch (Exception e) {
			System.out.println("Client exception: " + e.getMessage());
		}
	}
}
