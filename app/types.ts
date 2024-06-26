export type DatosViajes = {
    Id: number,
    IdProgramado: number,
    PlantaOrigen: string,
    Cliente: string,
    Patente: string,
    HoraInicioJornada: string,
    HoraConfirmacion: string,
    TaraViaje: number,
    HoraInicioCarga: string,
    LatitudInicioCarga: number,
    LongitudInicioCarga: number,
    HoraFinCarga: string,
    LatitudFinCarga: number,
    LongitudFinCarga: number,
    HoraPesaje: string,
    LatitudPesaje: number,
    LongitudPesaje: number,
    HoraConfirmacionFolio: string,
    LongitudConFolio: number,
    LatitudConFolio: number,
    HoraLlegadaCliente: string,
    LatitudLlegadaCliente: number,
    LongitudLlegadaCliente: number,
    HoraFinEntrega: string,
    LatitudFinEntrega: number,
    LongitudFinEntrega: number,
    PesoConfirmadoManual: number,
    Cancelado: boolean,
    Comentario: string
  }