from typing import List
from src.company import Gender


class Employee:
    def __init__(self,name: str , gender: Gender) -> None:
        self._name = name
        self._gender = gender

    def get_name(self) -> str:
        return self._name

    def get_gender(self) -> str:
        return self._gender


    def __repr__(self) -> str:
        return f'Employee [name={self._name}, gender={self._gender.value}]'





    

