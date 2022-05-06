import { Injectable } from "@nestjs/common";
export interface Simulator {
  curso: string;
  nombre: string;
  type: string;
  version: string;
  alumnosCon: string;
  avance: string;
  estado: string;
  bateria?: string;
}
@Injectable()
export class AppService {
  private readonly simulators: Simulator[] = [
    {
      "curso": "Quimica Industrial",
      "nombre": "Simulador VR",
      "type": "vr",
      "version": "v1.0.3",
      "alumnosCon": "15",
      "avance": "20/100(20%)",
      "estado": "En ejecución",
      "bateria": "100%"
    },
    {
      "curso": "Quimica Organica",
      "nombre": "Simulador VR",
      "type": "vr",
      "version": "v1.0.8",
      "alumnosCon": "20",
      "avance": "30/100(30%)",
      "estado": "En ejecución",
      "bateria": "60%"
    }, {
      "curso": "Ing civil",
      "nombre": "Simulador VR",
      "type": "vr",
      "version": "v1.0.5",
      "alumnosCon": "0",
      "avance": "10/100(10%)",
      "estado": "En ejecución",
      "bateria": "70%"
    }
    , {
      "curso": "Enfermeria",
      "nombre": "Simulador VR",
      "type": "vr",
      "version": "v1.0.2",
      "alumnosCon": "25",
      "avance": "80/100(80%)",
      "estado": "En ejecución",
      "bateria": "50%"
    },
    {
      "curso": "Quimica ",
      "nombre": "Simulador 360",
      "version": "v1.0.3",
      "alumnosCon": "15",
      "avance": "20/100(20%)",
      "estado": "En ejecución",
      "type": "web360"

    },
    {
      "curso": "Matematicas",
      "nombre": "Simulador 360",
      "version": "v1.0.8",
      "alumnosCon": "20",
      "avance": "30/100(30%)",
      "estado": "En Ejecución",
      "type": "web360"

    }, {
      "curso": "Ing civil",
      "nombre": "Simulador 360",
      "version": "v1.0.5",
      "alumnosCon": "0",
      "avance": "10/100(10%)",
      "estado": "OFF",
      "type": "web360"

    }
    , {
      "curso": "Enfermeria",
      "nombre": "Simulador 360",
      "version": "v1.0.2",
      "alumnosCon": "25",
      "avance": "80/100(80%)",
      "estado": "En ejecución",
      "type": "web360"

    }, {
      "curso": "Quimica ",
      "nombre": "Simulador 360",
      "version": "v1.0.3",
      "alumnosCon": "15",
      "avance": "20/100(20%)",
      "estado": "En ejecución",
      "type": "web360"

    },
    {
      "curso": "Matematicas",
      "nombre": "Simulador 360",
      "version": "v1.0.8",
      "alumnosCon": "20",
      "avance": "30/100(30%)",
      "estado": "En Ejecución",
      "type": "web360"

    }, {
      "curso": "Ing civil",
      "nombre": "Simulador 360",
      "version": "v1.0.5",
      "alumnosCon": "0",
      "avance": "10/100(10%)",
      "estado": "OFF",
      "type": "web360"

    }
    , {
      "curso": "Enfermeria",
      "nombre": "Simulador 360",
      "version": "v1.0.2",
      "alumnosCon": "25",
      "avance": "80/100(80%)",
      "estado": "En ejecución",
      "type": "web360"

    }, {
      "curso": "Quimica ",
      "nombre": "Simulador 360",
      "version": "v1.0.3",
      "alumnosCon": "15",
      "avance": "20/100(20%)",
      "estado": "En ejecución",
      "type": "web360"

    },
    {
      "curso": "Matematicas",
      "nombre": "Simulador 360",
      "version": "v1.0.8",
      "alumnosCon": "20",
      "avance": "30/100(30%)",
      "estado": "En Ejecución",
      "type": "web360"

    }, {
      "curso": "Ing civil",
      "nombre": "Simulador 360",
      "version": "v1.0.5",
      "alumnosCon": "0",
      "avance": "10/100(10%)",
      "estado": "OFF",
      "type": "web360"

    }
    , {
      "curso": "Enfermeria",
      "nombre": "Simulador 360",
      "version": "v1.0.2",
      "alumnosCon": "25",
      "avance": "80/100(80%)",
      "estado": "En ejecución",
      "type": "web360"

    }

  ];

  getSimulators(): any[] {
    return this.simulators;
  }
}
