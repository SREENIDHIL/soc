import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.*;
// import java.util.*;

public class XMLParser {
    public static void main(String[] args) {
        try {
            File xmlFile = new File("holder_data.xml");
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(xmlFile);
            
            NodeList holderNodes = document.getElementsByTagName("holder");
            
            System.out.println("<html><body><table border='1'><tr><th>Name</th><th>Age</th><th>type</th></tr>");

            for (int i = 0; i < holderNodes.getLength(); i++) {
                Node holderNode = holderNodes.item(i);

                if (holderNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element holderElement = (Element) holderNode;
                    String name = holderElement.getElementsByTagName("name").item(0).getTextContent();
                    String age = holderElement.getElementsByTagName("age").item(0).getTextContent();
                    String type = holderElement.getElementsByTagName("type").item(0).getTextContent();

                    System.out.println("<tr><td>" + name + "</td><td>" + age + "</td><td>" + type + "</td></tr>");
                }
            }

            System.out.println("</table></body></html>");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
