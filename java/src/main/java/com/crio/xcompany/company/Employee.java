package com.crio.xcompany.company;


public class Employee {
    private String name;
    private Gender gender;

    public Employee(String name, Gender gender) {
    }

    public String getName() {
        return name;
    }

    public Gender getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "Employee [name=" + name + ", gender=" + gender + "]";
    }
    
}
