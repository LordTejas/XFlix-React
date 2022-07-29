package com.crio.xcompany.company;

 import java.util.Collections;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class Employee {
    private String name;
    private Gender gender;
    private Employee manager;
    private Map<String, Employee> directReports;

    public Employee(String name, Gender gender) {
    }

    public String getName() {
        return name;
    }

    public Gender getGender() {
        return gender;
    }

    public List<Employee> getDirectReports() {
     return Collections.emptyList();
    }

    public List<Employee> getTeamMates() {
     return Collections.emptyList();
    }

    public void assignManager(Employee employee){
    }

    private void addDirectReport(Employee employee){
    }

    @Override
    public String toString() {
        return "Employee [name=" + name + ", gender=" + gender + "]";
    }
    
}
