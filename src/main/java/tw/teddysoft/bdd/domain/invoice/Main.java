package tw.teddysoft.bdd.domain.invoice;

import java.util.Scanner;

/**
 * Created by jeni on 2017/3/29.
 */
public class Main {
    public static void main(String[] args) {
        int vat = 0,price = 0;
        double vatRate = 0;
        boolean flag = true;
        String input,inputSplit[];
        Invoice invoice;
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            input = scanner.nextLine();
            // process the line
            inputSplit = input.split(" ");
            for (int i = 0; i < inputSplit.length; i++){
                if(inputSplit[i].equals("-r")){
                    i++;
                    vatRate = Double.parseDouble( inputSplit[i].toString());
                }
                else if(inputSplit[i].equals("-i")){
                    flag = true;
                    i++;
                    price = Integer.parseInt(inputSplit[i].toString());
                }
                else if(inputSplit[i].equals("-e")){
                    flag = false;
                    i++;
                    price = Integer.parseInt(inputSplit[i].toString());
                }
            }
            if(flag == true){
                invoice = InvoiceBuilder.newInstance().
                        withVatRate(vatRate).
                        withTaxIncludedPrice(price).
                        issue();

            }else {
                invoice = InvoiceBuilder.newInstance().
                        withVatRate(vatRate).
                        withTaxExcludedPrice(price).
                        issue();
            }
            System.out.println("The vat = " + invoice.getVAT() + " , The vatRate = " + vatRate
                                + " , The taxExcludedPrice = " + invoice.getTaxExcludedPrice()
                                + " , The includedPrice = " + invoice.getTaxIncludedPrice());
        }
        scanner.close();

    }
}
