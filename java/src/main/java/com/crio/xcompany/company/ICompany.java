package com.crio.xcompany.company;

import java.util.List;

public interface ICompany {
    Employee registerEmployee(String employeeName, Gender gender);
    void assignManager(String employeeName, String managerName);
    Employee getEmployee(String employeeName);
    List<Employee> getDirectReports(String managerName);
    List<Employee> getTeamMates(String employeeName);
    void deleteEmployee(String employeeName);
    List<List<Employee>> getEmployeeHierarchy(String managerName);
}
