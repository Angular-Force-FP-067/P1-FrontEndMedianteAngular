export interface Player {
    id: number;
    nombre: string;
    apellidos: string;
    posicion: 'Base' | 'Escolta' | 'Alero' | 'Ala-pívot' | 'Pívot';
    pais: string;
    edad: number;
    altura: number;
    peso: number;
    PPP: number; // Puntos Por Partido
    APP: number; // Asistencias Por Partido
    RPP: number; // Rebotes Por Partido
    TirosCampo: number; // Porcentaje
    videoURL: string; //Xavi debe proporcionar un enlace a un video destacado del jugador
    biografia: string;
    numejersey: number; 
}