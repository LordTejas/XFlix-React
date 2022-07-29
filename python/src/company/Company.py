from src.company import Employee, Gender


class Company:
    def __init__(self,company_name: str, founder: Employee) -> None:
        self._company_name = company_name
        self._founder = founder
        self._employee_book = {}
        self._employee_book[founder.get_name()] = founder
        pass

    def get_company_name(self):
        self._company_name

    def register_employee(self, employee_name: str, gender: Gender):
        pass

    def assign_manager(self,employee_name : str, manager_name: str):
        pass

    def get_employee(self,employee_name):
        pass

    def get_direct_reports(self,manager_name: str):
        pass

    def get_team_mates(self,employee_name: str):
        pass

    def delete_employee(self,employee_name: str):
        pass

    # https://www.geeksforgeeks.org/level-order-traversal-of-n-ary-tree/
    def get_employee_hierarchy(self,manager_name: str):
        pass



    




    

    