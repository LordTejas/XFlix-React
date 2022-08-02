from typing import List
from src.company import Employee, Gender


class Company:
    def __init__(self,company_name: str, founder: Employee) -> None:
        self._company_name = company_name
        self._founder = founder
        self._employee_book = {}
        self._employee_book[founder.get_name()] = founder
        pass

    def get_company_name(self) -> str:
        self._company_name

    def register_employee(self, employee_name: str, gender: Gender) -> Employee:
        pass

    def assign_manager(self,employee_name : str, manager_name: str) -> None:
        pass

    def get_employee(self,employee_name) -> Employee:
        pass

    def get_direct_reports(self,manager_name: str) -> List[Employee]:
        pass

    def get_team_mates(self,employee_name: str) -> List[Employee]:
        pass

    def delete_employee(self,employee_name: str) -> None:
        pass

    def get_employee_hierarchy(self,manager_name: str) -> List[List[Employee]]:
        pass



    




    

    