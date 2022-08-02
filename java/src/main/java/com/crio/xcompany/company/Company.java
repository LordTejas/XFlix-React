package com.crio.xcompany.company;

 import java.util.Collections;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;

public class Company implements ICompany{
    private String companyName;
    private Employee founder;
    private Map<String,Employee> employeeBook;
    

    private Company(String companyName, Employee founder) {
        this.companyName = companyName;
        this.founder = founder;
        employeeBook = new HashMap<String,Employee>();
        employeeBook.put(founder.getName(), founder);
    }
    

    public static Company create(String companyName, Employee founder){
        return new Company(companyName,founder);
    } 


    public String getCompanyName() {
        return companyName;
    }


    @Override
    public Employee registerEmployee(String employeeName, Gender gender) {
     return null;
    }


    @Override
    public void assignManager(String employeeName, String managerName) {
    }


    @Override
    public Employee getEmployee(String employeeName) { 
     return null;
    }


    @Override
    public List<Employee> getDirectReports(String managerName) {
     return Collections.emptyList();
    }


    @Override
    public List<Employee> getTeamMates(String employeeName) {
     return Collections.emptyList();
    }


    @Override
    public void deleteEmployee(String employeeName) {
    }

    @Override
    public List<List<Employee>> getEmployeeHierarchy(String managerName) {
     return Collections.emptyList();
    }
}
