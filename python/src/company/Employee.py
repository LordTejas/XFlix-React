from typing import List
from src.company import Gender


class Employee:
    def __init__(self,name: str , gender: Gender) -> None:
        self._name = name
        self._gender = gender
        self._manager = None
        self._direct_reports = {}
        pass

    def get_name(self) -> str:
        return self._name

    def get_gender(self) -> str:
        return self._gender

    def get_direct_reports(self) -> List:
        pass

    def get_team_mates(self) -> List:
        pass

    def assign_manager(self,employee) -> None:
        pass

    def _add_direct_report(self,employee) -> None:
        pass

    def __repr__(self) -> str:
        return f'Employee [name={self._name}, gender={self._gender.value}]'





    

