class Value
{
   int a,b;
   void setValue(int x,int y)
   { a=x;
     b=y;
   }  
   int getResult()
   {  return 0;
   }
}
class Add extends Value 
{
  int getResult(){
    return a+b;
  }
}
class Mul extends Value
{
   int getResult(){
    return a*b;
  }
}
class Sub extends Value{
	
	int getResult(){
		  return a-b;
	}
}
class Div extends Value 
{
	  int getResult(){
		  return a/b;
	  }
}
class Calculator
{
   void performOperation(Value v,String type)
   {
      int result= v.getResult();
	  System.out.println(type+"\t"+result);
   }
}
public class LCAPP
{
   public static void main(String x[])
   {
     Calculator c = new Calculator();
	 Value v=null;
	 v=new Add();
	  v.setValue(10,20);
	  c.performOperation(v,"Addition");
	  v=new Mul();
	  v.setValue(5,4);
	  c.performOperation(v,"Multiplication");
	  
	  v=new Sub();
	  v.setValue(10,5);
	  c.performOperation(v,"Substraction");
	  
	  v=new Div();
	  v.setValue(10,2);
	  c.performOperation(v,"Division");
   }
}