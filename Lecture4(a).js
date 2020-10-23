// =-=-=-=-=-=-=-=-=-Lecture4 Classes in Java Script =-=-=-=-=-=-=-=-=

// There are three ways to define classes in JavaScript

// -=-=-=-=-=-=-=-=-=-=-=-=-= Method-1 -=-=-=-=-=-=-=-=-=

function Complex(){

    this.setData=(i,r)=>
    {
        this.imaginary=i;
        this.real=r;
    }

    this.Show=function()
    {
        console.log("Complex Number is : "+this.real+"+"+this.imaginary+"i");
    }

}

/*  
In type of Class Declaration we can use any type of methods either anonymous or arrow functions , there is no restriction on functions 
 The variable always need to defined using this and have to be operated using this itself .
*/

var num1=new Complex();
num1.setData(5,10);
num1.Show();
console.log(num1.imaginary);


// -=-=-=-=-=-=-=-=-=-=-=-=-= Method-2 (Similar to C++ )-=-=-=-=-=-=-=-=-==-=-=-=

class Employee
{
    // Here in this case anonymous and and arrow functions are not allowed
    /** 
     * * This is similar to the traditional type of class that we use in C++ .
     * * Constructis Here are defined with keyword constructor .
     * 
     */

     constructor(name,age,dept)
     {
         this.name=name;
         this.age=age;
         this.dept=dept;
     }

     ShowData(){
         console.log("Name : "+this.name+" Age : "+this.age+" Department : "+this.dept);
     }
}

var Aman=new Employee("Aman",22,"Sales");
Aman.ShowData();

// -=-=-=-=-=-=-=-=-=-=-=-=-= Method-3 (similar to method 2 but is assigned to a varable as if a anonymous class ) -=-=-=-=-=-=-=-=-==-=-=-=

var Student = class{
    constructor(name,age,section)
    {
        this.name=name;
        this.age=age;
        this.section=section;

    }

    ShowStuData()
    {
        console.log("Name : "+this.name+", Age : "+this.age+", Section : "+this.section);
    }
}

var Kheman=new Student("Kheman",19,"Second Year");
Kheman.ShowStuData();