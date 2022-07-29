from src.company import Gender


class Employee:
    def __init__(self,name: str , gender: Gender) -> None:
        self._name = name
        self._gender = gender
        self._manager = None
        self._direct_reports = {}
        pass

    def get_name(self):
        return self._name

    def get_gender(self):
        return self._gender

    def get_direct_reports(self):
        pass

    def get_team_mates(self):
        pass

    def assign_manager(self,employee):
        pass

    def _add_direct_report(self,employee):
        pass

    def __repr__(self) -> str:
        return f'Employee [name="{self._name}", gender="{self._gender.value}"]'





    

