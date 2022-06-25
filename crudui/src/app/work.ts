export class Work {
    id: number;
    status: String; //"Se realizó", "Pendiente"
    date: String; // la fecha tiene dd/mm/aaaa/hh:mm:ss
    retdays: number; //Si la fecha ya pasó días desde la fecha hasta hoy
    empAsign: number; //id del empleado al que se le asignó la tarea
} 