import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../employee";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  Employee: Employee;
  selectedEmployee: Employee;
  Employees: Employee[];
  readonly URL_API = "http://localhost:8088/getEmployeelist";
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  // Para la creación de un empleado
  postEmployee(Employee: Employee) {
    // console.log(Employee);
    return this.http.post(this.URL_API, Employee);
  }

  // Para la relación uno(Employee) a muchos(Tareas)
  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }
}