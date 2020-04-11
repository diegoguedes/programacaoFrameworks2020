package socket.udp.client;

import java.net.*;
import java.io.*;

public class UDPClient {
	public static void main(String args[]) {
		DatagramSocket aSocket = null;
		try {
			String msg = "PCF é muito legal!";
			String server = "localhost";			
			aSocket = new DatagramSocket();
			byte[] m = msg.getBytes();
			InetAddress aHost = InetAddress.getByName(server);
			int serverPort = 6789;
			DatagramPacket request = new DatagramPacket(m, msg.length(), aHost, serverPort);
			aSocket.send(request);
			byte[] buffer = new byte[1000];
			DatagramPacket reply = new DatagramPacket(buffer, buffer.length);
			aSocket.receive(reply);
			System.out.println("Recebeu: " + new String(reply.getData()));
		} catch (SocketException e) {
			System.out.println("Socket: " + e.getMessage());
		} catch (IOException e) {
			System.out.println("IO: " + e.getMessage());
		} finally {
			if (aSocket != null)
				aSocket.close();
		}
	}
}
