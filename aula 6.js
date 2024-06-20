import java.util.Scanner;

public class VerificarNumeroPrimo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número inteiro positivo para verificar se é primo: ");
        int numero = scanner.nextInt();

        if (ehPrimo(numero)) {
            System.out.println(numero + " é um número primo.");
        } else {
            System.out.println(numero + " não é um número primo.");
        }

        scanner.close();
    }

    // Método para verificar se um número é primo
    public static boolean ehPrimo(int numero) {
        // Casos especiais para números menores que 2
        if (numero <= 1) {
            return false;
        }

        // Verifica se é divisível por algum número além de 1 e ele mesmo
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }

        return true; // Se não foi divisível por nenhum número além de 1 e ele mesmo, é primo
    }
}